// Repeat a given string str (first argument) for num times (second argument).
// Return an empty string if num is not a positive number.

const repeatStringNumTimes = (str, num) => {
    return num < 0 ? '' : str.repeat(num)
};

// // using for loop
const repeatStringNumTimes = (str, num) => {
    
    let final = ''    

    if (num < 0) return ''
        for (let i=0; i<num; i++) {
            final += str
    }
    return final
}

// using Recursion

function repeatStringNumTimes(str, num) {
    if (num <= 0) return "";
    if (num === 1) return str;

    return str + repeatStringNumTimes(str, num - 1) 
}

repeatStringNumTimes('*', 3) // ***
repeatStringNumTimes("abc", 3) // abcabcabc
repeatStringNumTimes("abc", -2) // "" 
repeatStringNumTimes("abc", 0) // "" 


