// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");



// ***** Regular math operators: +, -, *, /
console.log((5 + 4) / 3);
console.log(undefined / 5); // nan = not a number
function test1 (a) {
  console.log( a / 5);
}
test1();// we are calling the function with an undifined argument


// ***** Equality 
var x = 4, y = 4;
if (x == y) {
  console.log("x=4 is equal to y=4");
}

x = "4";
if (x == y) {
  console.log("x='4' is equal to y=4");// in javascript, the language converts one of the primitive types to match the other, when using the == operator
}


// ***** Strict equality
if (x === y) {// the strict equality "===" first checks if the primitive type is the same, it doesn't convert it to match the other one, hence we get the message on the else stament, x is a string '4' and y a number 4
  console.log("Strict: x='4' is equal to y=4");
}
else {
  console.log("Strict: x='4' is NOT equal to y=4");
}


// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}


// ***** Best practice for {} style
// Curly brace on the same or next line...
// Is it just a style?
function a() 
{
  return
  { 
    name: "Yaakov"
  };
}

function b() {
  return { 
      name: "Yaakov"
  };
}

console.log(a());
console.log(b());

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);
