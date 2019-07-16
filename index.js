var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(array) {
  kittens.push("Ralph");
  return kittens;
}

function destructivelyPrependKitten(array) {
  kittens.unshift("Bob");
  return kittens;
}

