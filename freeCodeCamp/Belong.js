// Return the lowest index at which a value (second argument)
// should be inserted into an array (first argument) once it has been sorted. 
// The returned value should be a number.


const getIndexToIns = (arr, num) => {

    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
          if (num <= arr[i]) {
            return i
          }
    }
    return arr.length
}  



getIndexToIns([10, 20, 30, 40, 50], 35) // 3
getIndexToIns([10, 20, 30, 40, 50], 35) // number
getIndexToIns([10, 20, 30, 40, 50], 30) // 2
getIndexToIns([40, 60], 50) // 1
getIndexToIns([2, 5, 10], 15) // 3
getIndexToIns([], 1) // 0
getIndexToIns([], 1) // number.
