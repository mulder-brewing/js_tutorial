let numbers = [1,2,3,4,5,6,7,8,9,10];
let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//Imperative version
function imperative(elements) {
  let lengths = {};
  elements.forEach(element => lengths[element] = element.length);
  return lengths;
}

console.log(imperative(states));


// Functional version
function functional(elements) {
  return elements.reduce((lengths, element) => {
    lengths[element] = element.length;
    return lengths;
  }, {});
}

console.log(functional(states));

// Excercise
function exercise(elements) {
  return elements.reduce((total, n) => { return total *= n; }, 1);
}

console.log(exercise(numbers));
