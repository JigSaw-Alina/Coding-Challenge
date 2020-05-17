// Create a program to convert Number to Word

function convertNumToWord (num) {
  
    const wordNum = {
    Million:   1000000,
    Thousand:     1000,
    Hundred:       100,
    Ninety:         90,
    Eighty:         80,        
    Seventy:        70,
    Sixty:          60,
    Fifty:          50,
    Forty:          40,
    Thirty:         30,
    Twenty:         20,
    Nineteen:       19,	
    Eighteen:       18,	
    Seventeen:      17,	
    Sixteen:        16,	
    Fifteen:        15,
    Fourteen:       14,	
    Thirteen:       13,
    Twelve:         12,
    Eleven:         11,
    Ten:            10,
    Nine:            9,	
    Eight:           8,	
    Seven:           7,
    Six:             6,
    Five:            5,
    Four:            4,
    Three:           3,
    Two:             2,
    One:             1
  }                             
  
  let wordInEnglish= ''
  
  for (let key in wordNum ){
    let d = num % wordNum[key] 
    let t = Math.floor(num / wordNum[key])
  
    while (num >= wordNum[key])
      if(num <= 99){
      wordInEnglish += key
      num -= wordNum[key]
      wordInEnglish += ' '
  
    }else if(d > 0) {
        return `${convertNumToWord(t)}${key} ${convertNumToWord(d)}`
        }else {
        return `${convertNumToWord(t)}${key}`
        }
      
    
  
  }
  return wordInEnglish
  
  }
  
  convertNumToWord(11000001)