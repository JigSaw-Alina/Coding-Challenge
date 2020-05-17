// Find the Longest Word in a String 
// Return the length of largest word in the 

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



