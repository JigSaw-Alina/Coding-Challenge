// Use the array methods slice and splice to copy each 
// element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

// All elements from the first array should be added to the second array in their original order.
// The first array should remain the same after the function runs.
// The second array should remain the same after the function runs.


const frankenSplice = (arr1, arr2, n) => {
    let localArr = arr2.slice()

    localArr.splice(n, 0, ...arr1)
   
    return localarr
}



// 2nd solution
const frankenSplice = (arr1, arr2, n) => {
    let localArr = arr2.slice()

    for (let i = 0; i<arr1.length; i++) { 
        localArr.splice(n, 0, arr1[i])
        n++
    }
    return localArr
}

frankenSplice([1, 2, 3], [4, 5], 1) // [4, 1, 2, 3, 5].
frankenSplice([1, 2], ["a", "b"], 1) // ["a", 1, 2, "b"].
frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) // ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

