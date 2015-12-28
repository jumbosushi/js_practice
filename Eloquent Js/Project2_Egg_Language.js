  /*
   * NOTE: All code was provided by the book!
   * My intentino is by typing out all the code given, I will try
   * to understand how mid-sized program are organized in js!
  */

  //-------------------------------------
  // This file will create a simple programming language called "Egg"
  // Everything in Egg will be an expression

  // String is in tthe form of  /b /w /b
  // Number will be a sequence of digits
  // These expressions will be refered as "value" type

  // Variable names can not have a whitespace
  // These expressions will be refered as "word" type

  // Application will be an exxpression followed by a ( ) w/ params separated w/ ,
  // Applications are recursive in nature - it contains other expressions
  // These expressions will be refered as "apply" type

  /* Example Application
   * do (define (x, 10)
   *   if (>(x, 5)
   *        print ("large"),
   *        print ("small")))
  */

  /* Representation of >(x,5)
   *   {
   *     type: "apply"
   *     operator: {type: "word", name: ">"}.
   *     args: [
   *        {type: "word", name: "x"},
   *        {type: "value", value: 5}
   *     ]
   *   }
  */

  // Promgram Paser
  //  REQUIRE: program
  //   EFFECT: Give appropriate object to expr, and run the rest of the program
  function parseExpression(program) {
    program = skipSpace(program);
    var match, expr;
    if (match = /^"([^"]*)"/.exec(program))        // find strings
     expr = {type: "value", value: match[1]};
    else if (match = /^\d+\b/.exec(program))       // find numbers
     expr = {type: "value", value: Number(match[0])};
    else if (match = /^[^\s(),"]+/.exec(program))  // find words
     expr = {type: "word", name: match[0]};
    else
     throw new SyntaxError("Unexpected syntax: " + program);

    return parseApply(expr, program.slice(match[0].length));
  }

  //  REQUIRE: non empty string
  // MODIFIES: this
  //   EFFECT: Remove white space that comes before the expression
  function skipSpace(string) {
    var first = string.search(/\S/);
    if (first == -1) return "";
    return string.slice(first);
  }

  //  REQUIRE: expr, program
  //   EFFECT: Runs the program
  function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] != "(")        // if not an open parenthesis, not an expression
      return {expr: expr, rest: program};

    program = skipSpace(program.slice(1));
    expr = {type: "apply", operator: expr, args: []};
    while (program[0] != ")") {
      var arg = parseExpression(program);
      expr.args.push(arg.expr);
      program = skipSpace(arg.rest);
      if (program[0] == ",")
        program = skipSpace(program.slice(1));
      else if (program[0] != ")")
        throw new SyntaxError("Expected ',' or ')'");
    }
    return parseApply(expr, program.slice(1));
  }

  //  REQUIRE: program following Egg syntax
  //   EFFECT: Return a syntax tree of a Egg program
  function parse(program) {
    var result = parseExpression(program);
    if (skipSpace(result.rest).length > 0)
      throw new SyntaxError("Unexpected text after program");
    return result.expr;
  };

  // Evaluator -> Runs the Egg syntax tree
  //  REQUIRE:
  // MODIFIES:
  //   EFFECT:
  function evaluate(expr, env) {
    switch(expr.type) {
      case "value":
        return expr.value;

      case "word":
        if (expr.name in env)
          return env[expr.name];
        else
          throw new ReferenceError("Undefined variable: " +
                                    expr.name);

      case "apply":
        if (expr.operator.type == "word" &&
            expr.operator.name in specialForms)
          return specialForms[expr.operator.name](expr.args, env);

        var op = evaluate(expr.operator, env);
        if (typeof op != "function")
          throw new TypeError("Applyting a non-function.");
        return op.apply(null, expr.args.map(function(arg) {
          return evaluate(arg, env);
        }));
    }
  }

// To define special Syntax in Egg
var specialForms = Object.create(null); //empty object

// Definition of if in Egg language
specialForms["if"] = function(args, env) {
  if (args.length != 3)
    throw new SyntaxError("Bad number of args to if");

  if (evaluate(args[0], env) !== false)  // only allow strictly false
    return evaluate(args[1], env);
  else
    return evaluate(args[2], env);
};

// Definition of while in Egg Language
specialForms["while"] = function(args, env) {
  if (args.length != 2)
    throw new SyntaxError("Bad number of args to while");

  while (evaluate(args[0], env) !== false)
    evaluate(args[1], env);

  // Since undefined deos not exist in Egg, we return false,
  // for lack of a meaningful result
  return false
}

//Define do in Egg
specialForms["do"] = function(args, env) {
  var value = false;
  args.forEach(function(arg) {
    value = evaluate(arg, env);
  });
  return value;
};

// Define define in Egg
// to be used to define new variables
specialForms["define"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of definition");
  var value = evaluate(args[1], env);
  env[args[0].name] = value;
  return value;
}


// Environment object
// Object with properties whose name correspond to var names
// with corresponding values
var topEnv = Object.create(null);

//define true / false for Egg language
topEnv["true"] = true;
topEnv["false"] = false;

// define mathmatical operators
["+", "-", "*", "/", "==", "<", ">"].forEach(function(op) {
  topEnv[op] = new Function("a, b", "return a " + op + " b;");
});

// define print
topEnv["print"] = function(value) {
  console.log(value);
  return value;
};


//define function for Egg
specialForms["fun"] = function(args, env) {
  if (!args.length)
    throw new SyntaxError("Functions neeed a body");
  function name(expr) {
    if (expr.type != "word")
      throw new SyntaxError("Arg names must be words");
    return expr.name;
  }
  var argNames = args.slice(0, args.length - 1).map(name);
  var body = args[args.length - 1];

  return function() {
    if (arguments.length != argNames.length)
      throw new TypeError("Wrong number of arguments");
    var localEnv = Object.create(env);
    for (var i = 0; i < arguments.length; i++)
      localEnv[argNames[i]] = arguments[i];
    return evaluate(body, localEnv);
  };
};

//run will make the program run easier
function run() {
  var env = Object.create(topEnv);
  var program = Array.prototype.slice.call(arguments, 0).join("\n");
  return evaluate(parse(program), env);
}

// Example code
run("do(define(plusOne, fun(a, +(a, 1))),",
    "  print(plusOne(10)))");
