// Write a code find the nearest number to 100

// solution using Math.abs
const closeTo100 = (a, b) => {
    let numA = Math.abs(a - 100)
    let numB = Math.abs(b - 100)
    return numA < numB ? a : b 
}

// solution using spread and Math.max
const closeTo100 = (...arr) => {
  let maxNum = Math.max(...arr)
  return maxNum 
}




closeTo100(30, 40) // 40
closeTo100(101, 98) // 101
closeTo100(-2, -3) // -2
