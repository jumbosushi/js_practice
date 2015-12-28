#Modules

It is good idea to uncouple files to avoid overriding variables

Additionally, it makes the program easier to scale

Using Functions to protet variables is also a good practice

[This article](http://addyosmani.com/writing-modular-js/) talks more about modularity

In javascript, function is the only thing that creates a scope

This idea is useful to tackle **Namespace pollution**  (lot of unrelated code sharing the same
  single set of global varibales)

You may choose to reuse the code in various files by copy and pasting, but
when one part of the code has to change, it is highly likely for a programmer to
forget to update the entire copies (I know I would)
