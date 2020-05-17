// create a looping function to reverse a string.
const reverseString = (str) => {

    let word = ''

    for (let i=str.length - 1; i >= 0; i--) {
        word += str[i]
    }
    return word
};

// // one line solution 
const reverseString = (str) => {
    return str.split('')
              .reverse()
              .join('')
};
    
    
reverseString('hello')
reverseString("Howdy")
reverseString("Greetings from Earth")

    
