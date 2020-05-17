// remove all falsy an array
// falsy values are ; false , null, 0, "", undefined, Nan, 0 , "" and ``

const  bouncer = (arr) => {
    truthyValues = []
    
    for (let elem of arr) {
        if (elem) {
            truthyValues.push(elem)
        }
    }
    return truthyValues
}

// one line solution 

const bouncer = (arr) => {
    return arr.filter((elem) => elem)
}


    
console.log(bouncer([7, 'ate', '', false, 9, null, undefined, NaN, 0 , "" ,``]))
   