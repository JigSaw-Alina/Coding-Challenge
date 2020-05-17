// Create a function that looks through an array (first argument)
// and returns the first element in the array that passes a truth test (second argument).
// If no element passes the test, return undefined.


// for loop
const findElement = (arr, func) => { 
let Element = []

for (let i = 0; i < arr.length; i++) {
     let num = arr[i]
  if (func(num)) {
    Element.push(num)
  }
}
    return Element[0]
}

// Using filter 

const findElement = (arr, func) => {
    return arr.filter(func)[0]
}

console.log(findElement([1, 2, 3], num => num % 2 === 0 )) // 0
console.log(findElement([1, 3, 5, 9], num => num % 2 === 0 )) // undefined.


