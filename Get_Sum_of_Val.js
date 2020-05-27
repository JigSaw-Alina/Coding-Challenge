//  Write a program for this output
// Note: Without using plus (+) sign 

const getSumofVal = (...arg) => {
    return arg.reduce((accumulator , currentValue) => (
        accumulator - -currentValue
    ), 0);
}



getSumofVal(10, 20) // 30
getSumofVal(5, 8) // 13
getSumofVal(10, -10) // 0
getSumofVal(5, 8) // 13
getSumofVal(0, 0) // 0