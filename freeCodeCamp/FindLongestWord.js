// Find the Longest Word in a String 
// Return the length of largest word in the 


// using for loop solution
const findLongestWord = (str) => {
    let word = str.split(' ')
    let longest = ''
    
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > longest.length) {
        longest = word[i]
      }
    }
    return longest.length
}


// using for of solution
const findLongestWord = (str) => {
    let word = str.split(' ');
    let longest = ''
    for (let words of word ) {
        if (words.length > longest.length) {
            longest = words
        }
    }
    return longest.length
    
}


// one-line solution 

const findLongestWord = (str) => {
    return str.split(' ')
              .sort((a, b) =>  (b.length - a.length))[0].length
}

findLongestWord('the quick fox jumped over the lazy dog')



