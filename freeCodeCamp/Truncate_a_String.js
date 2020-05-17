// Truncate a string (first argument) 
// if it is longer than the given maximum string length (second argument).
// Return the truncated string with a ... ending.


const truncateString = (str, num) => {
    
    if  (num >= str.length) return str 
    return (num <= 3) ? `${str.slice(0, num)}...` : `${str.slice(0, num)}...`
}

truncateString("A-tisket a-tasket A green and yellow basket", 8); // A-tisket...
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) // "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1) // A...
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) // "A-tisket a-tasket A green and yellow basket".