// Create a Program to Pick & show random words 

const words = [
    'God',
    'code',
    'eat',
    'sleep',
    'repeat',
    'relax',
    'vacation',
    'grandmother',
    
];



const showWords = (words) => {
    const randomIndex = Math.floor(Math.random() * words.length)
       return words[randomIndex] 
};

showWords(words)

