// function to get the factorial of a number 'N'
const factorialNumber = (N) => {

    let result = 1
    
    for (let i = 1; i <= N; i++) {
            result *= i
     }
        return result
    }  

console.log(factorialNumber(4))