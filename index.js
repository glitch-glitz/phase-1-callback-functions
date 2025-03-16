function iReturnThings(thing) {
  return thing;
}

console.log(
  iReturnThings({ firstName: "Brendan", lastName: "Eich", familyName: "Kip" })
);

iReturnThings(function (dogname, breed) {
  return dogname, breed;
});
console.log(iReturnThings("Pookie" + "Germany Shepherd"));

//Example 2

function iInvokeThings(thing) {
  return thing;
}

iInvokeThings(function () {
  return 4 + 5;
});
console.log(iInvokeThings(4 + 5));

iInvokeThings(function () {
  return "Hello, " + "world!";
});
console.log(iInvokeThings("Hello, " + "world!"));

//Define Callback Functions

// When we pass a function into another function wherein it might be invoked, we refer to the passed function as a callback.
function main(cb) {
  console.log(cb());
}

main(function () {
  return "After I get passed to the main() function as the only argument, I'm stored in the local 'cb' variable!";
});

//eg
function greet(name, cb) {
  return cb(name);
}

greet("Ada Lovelace", function (name) {
  return "Hello there, " + name;
});
// => "Hello there, Ada Lovelace"

function doMath(num1, num2, cb) {
  return cb(num1, num2);
}

doMath(42, 8, function (num1, num2) {
  return num1 * num2;
});
