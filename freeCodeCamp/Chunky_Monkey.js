// Write a function that splits an array (first argument) 
// into groups the length of size (second argument) and returns 
// them as a two-dime`nsional array.



// solution using slice
const chunkArrayInGroups = (arr, size) => {
      
    let groups = []

    while (arr.length > 0) {
        groups.push(arr.slice(0, size))
        arr = arr.slice(size)
    }
    return groups
}


// // solution using splice
const chunkArrayInGroups = (arr, size) => {
    let groups = []

    while (arr.length > 0) {
        groups.push(arr.splice(0, size))
    }
    return groups
}
chunkArrayInGroups(["a", "b", "c", "d"], 2) // [["a", "b"], ["c", "d"]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) // [[0, 1, 2], [3, 4, 5]]
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) // [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) // [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) // [[0, 1], [2, 3], [4, 5], [6, 7], [8]].




