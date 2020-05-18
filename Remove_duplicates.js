// Create a program remove Dulicates

// using loop
const duplicate = (arr) => {
    let uniqueVal = []

    for (let i = 0; i < arr.length; i++) {
        if (arrB.indexOf(arr[i]) === - 1) {
            arrB.push(arr[i])
        }
    }
    return uniqueVal
}

// solution using sort 
const duplicate = (arr) => {
    let uniqueVal = []
    arr.sort()
    let temp
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== temp) {
            uniqueVal.push(arr[i])
            temp = arr[i]
        }
    }
}

// using object
const duplicate = (arr) => {
    obj = {};

    for (let i of arr) {
        obj[i] = true
    }
    return UniqueVal  = Object.keys(obj)   

}

// using set()

const duplicate = (arr) => {

   let uniqueVal = new Set(arr)
    return [...uniqueVal]
}

duplicate([1, 2, 3, 4, 3, 5, 6, 7 ,6, 2])

duplicate([5, 5, 5, 1, 2, 3, 4, 5, 8, 8, 9, 9, 9, 10, 10])