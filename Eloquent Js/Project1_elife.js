/* NOTE: All code was provided by the book!
 * My intentino is by typing out all the code given, I will try
 * to understand how mid-sized program are organized in js!
*/

// Can be run in cmd by "node Project1_elife.js"

//-----------------------------------------------
// Constants

// What the world will look like
var plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

// Directions and its's values
// Each have a vector so it can be added to things
var directions = {
  "n":  new Vector( 0, -1),
  "ne": new Vector( 1, -1),
  "e":  new Vector( 1,  0),
  "se": new Vector( 1,  1),
  "s":  new Vector( 0,  1),
  "sw": new Vector(-1,  1),
  "s":  new Vector(-1,  0),
  "nw": new Vector(-1, -1),
}

// ----------------------------------

// Vector constructor
// Think of vector as a position object
function Vector(x,y) {
  this.x = x;
  this.y = y;
}

// REQUIRES: other Vector object
// EFFECT: Returns a new Vector that has the sum of x and y
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
}

// Grid constructor
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

// REQUIRES: vector obj
//   EFFECT: check if given vector can fit in a grid
Grid.prototype.isInside = function(vector) {
  return vector.x >= 0 && vector.x < this.width &&
         vector.y >= 0 && vector.y < this.height;
}

// REQUIRES: Vector obj
//   EFFECT: Returns an element at vector position in a grid
Grid.prototype.get = function(vector) {
  return this.space[vector.x + this.width * vector.y];
}

// REQUIRES: vector obj, value
// MODIFIES: this
//   EFFECT: Set the new element at the given vector;
Grid.prototype.set = function(vector, value) {
  this.space[vector.x + this.width * vector.y] = value;
}


// BouncingCritter constructor
// it's direction is chosen randomly
function BouncingCritter() {
  this.direction = randomElement(directionNames);
};

// REQUIRES: array
//   EFFECT: returns a randomly chosen item in an array
function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var directionNames = "n ne e se s sw w nw".split(" ");

// REQUIRES: view obj
// MODIFIES: this
//   EFFECT: Changes its direction to where there is a blank space & move there
BouncingCritter.prototype.act = function(view) {
  if (view.look(this.direction) != " ")
    this.direction = view.find(" ") || "s";
  return {type: "move", direction: this.direction};
}


//A legend is an object that tells us what each character in the map means. It
// contains a constructor for every character—except for the space character,
// which always refers to null
// EX {
//      "#": Wall,
//      "o": BouncingCritter
//     }


// World Constructor
// REQUIRES: map, legend
function World(map, legend) {
  var grid = new Grid(map[0].length, map.length);
  this.grid = grid;
  this.legend = legend;

  map.forEach(function(line, y) {
    for (var x = 0; x < line.length; x++)
      grid.set(new Vector(x,y),
               elementFromChar(legend, line[x]));
  })
}

// REQUIRES: legend, ch
//   EFFECT: Return a obj of ch, null if char is a space
function elementFromChar(legend, ch) {
  if (ch == " ")
    return null;
  var element = new legend[ch]();   //Call the Constructor of ch
  element.originChar = ch;
  return element;
}

// REQUIRES: element
//   EFFECT: return the character representation of an element
function charFromElement(element) {
  if (element == null)
    return " ";
  else
    return element.originChar;
}

// REQUIRES: world
//   EFFECT: Return the state of the world in string-format
World.prototype.toString = function() {
  var output = "";
  for (var y = 0; y < this.grid.height; y++) {
    for (var x = 0; x < this.grid.width; x++) {
      var element = this.grid.get(new Vector(x, y));
      output += charFromElement(element);
    }
    output += "\n";
  }
  return output;
}

// Enables forEach on each block of the  grid
Grid.prototype.forEach = function (f, context) {
  for (var y=0; y < this.height; y++) {
    for (var x=0; x < this.width; x++) {
      var value = this.space[x + y * this.width];
      if (value != null)
        f.call(context, value, new Vector(x,y));
    }
  }
}

// REQUIRES: none
// MODIFIES: this
//   EFFECT: Make critters take action
World.prototype.turn = function() {
  var acted = [];
  this.grid.forEach(function(critter, vector) {
    if (critter.act && acted.indexOf(critter) == -1) {
      acted.push(critter);
      this.letAct(critter, vector);
    }
  }, this);
  // this "this" allows the "this" inside the loop to access the top var!
}

// REQUIRES: critter, vector
// MODIFIES: critter, this
//   EFFECT: If the critter could move, it moves
World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  if (action && action.type == "move") {
    var dest = this.checkDesttination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null);
      this.grid.set(dest, critter);
    }
  }
};

// REQUIRES: action, vector
//   EFFECT: check if the action can take place
World.prototype.checkDesttination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};


//View Constructor
function View(world, vector) {
  this.world = world;
  this.vector = vector;
}

// REQUIRES: A direction
//   EFFECT: Return a character of the block
View.prototype.look = function(dir) {
  var target = this.vector.plus(directions[dir]);
  if (this.world.grid.isInside(target))
    return charFromElement(this.world.grid.get(target));
  else
    return "#";
}

// REQUIRES: map character
//   EFFECT: Return an array containing all direction with that character
View.prototype.findAll = function(ch) {
  var found = [];
  for (var dir in directions)
    if (this.look(dir) == ch)
      found.push(dir);
  return found;
}

// REQUIRES:  map character
//   EFFECT: Return a direction in which the character can be found next to the
//           crutter or return null;
View.prototype.find = function(ch) {
  var found = this.findAll(ch);
  if (found.length == 0) return null;
  return randomElement(found);
};


//More life forms!

//Turns a direction by the increment of 45 degrees
function dirPlus(dir, n) {
  var index = directionNames.indexOf(dir);
  return directionNames[(index + n + 8) % 8];
}

// A life form that just follows along the wall
function WallFollower() {
  this.dir = "s";
}

WallFollower.prototype.act = function(view) {
  var start = this.dir;
  if (view.look(dirPlus(this.dir, -3)) != " ")
    start = this.dir = dirPlus(this.dir, -2);
  while (view.look(this.dir) != " ") {
    this.dir = dirPlus(this.dir, 1);
    if (this.dir == start) break;
  }
  return {type: "move", direction: this.dir};
}

//Add the plant concept

function LifelikeWorld(map, legend) {
  World.call(this, map, legend);
}
LifelikeWorld.prototype = Object.create(World.prototype);

var actionTypes = Object.create(null);

// Let Act
LifelikeWorld.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector));
  var handled = action &&
    action.type in actionTypes &&
    actionTypes[action.type].call(this, critter,
                                  vector, action);
  if (!handled) {
    critter.energy -= 0.2;
    if (critter.energy <= 0)
      this.grid.set(vector, null);
  }
}

// Add grow action type
actionTypes.grow = function(critter) {
  critter.energy += 0.5;
  return true;
}

//Move action
actionTypes.move = function (critter, vector, action) {
  var dest = this.checkDesttination(action, vector);
  if (dest == null ||
      critter.energy <= 1 ||
      this.grid.geet(dest) != null)
    return false;
  critter.energy -= 1;
  this.grid.set(vector, null);
  this.grid.set(dest, critter);
  return true;
}

//Eat action
actionTypes.eat = function(critter, vector, action) {
  var dest = this.checkDesttination(action, vector);
  var atDest = dest != null && this.grid.get(dest);
  if (!atDest || atDest.energy == null)
    return false;
  critter.energy += atDest.energy;
  this.grid.set(dest, null);
  return true;
}

//Reproduce action
actionTypes.reproduce = function(critter, vector, action) {
  var baby = elementFromChar(this.legend, critter.originChar);
  var dest = this.checkDesttination(action, vector);
  if (dest == null ||
      critter.energy <= 2 * baby.energy ||
      this.grid.get(dest) != null)
    return false;
  critter.energy -= 2 * baby.energy;
  this.grid.set(dest, baby);
  return true;
}

//Plant constructor
// plant will be used to regain energy
function Plant() {
  this.energy = 3 + Math.random() * 4;
}
Plant.prototype.act = function(view) {
  if (this.energy > 15) {
    var space = view.find(" ");
    if (space)
      return {type: "reproduce", direction: space};
  }
  if (this.energy < 20)
    return {type: "grow"}
}

// PlantEater constructor
function PlantEater() {
  this.energy = 20;
}
PlantEater.prototype.act = function(view) {
  var space = view.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  if (plant)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
}
//---------------------------------

//To RUn the program

// Wall Constructor
function Wall() {};

var world = new World(plan, {"#": Wall,
                            "o": BouncingCritter});
console.log(world.toString());

for (var i=0; i<5; i++) {
  world.turn();
  console.log(world.toString());
}
