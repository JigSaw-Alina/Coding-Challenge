// Return true if the string in the first element of the array contains 
// all of the letters of the string in the second element of the arry.


const mutation = (arr) => {
    let firstWord = arr[0].toLowerCase()
    let secondWord = arr[1].toLowerCase()

  for (let i = 0; i<secondWord.length; i++) {
        if (firstWord.indexOf(secondWord[i]) === -1) {
            return false
        }
    }
            return true
            
}


// Using for of Loop //


const mutation = (arr) => {
    let firstWord = arr[0].toLowerCase()
    let secondWord = arr[1].toLowerCase()

    for (let word of secondWord ) {
        if (firstWord.indexOf(word) === -1) {
            return false
        }      
    }
            return true
}

mutation(["hello", "hey"])  // false.
mutation(["hello", "Hello"]) // true 
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // true
mutation(["voodoo", "no"]) // false.