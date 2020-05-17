const largestOfFour = (arr) => {

    let maxes = [];

     for (let i=0; i<arr.length; i++) {
         let maxTemp = arr[i][0]
      for(let j=0; j<arr[i].length; j++) {
         let currentElement = arr[i][j]
        if (currentElement >= maxTemp) maxTemp = currentElement

      }
      maxes.push(maxTemp)
     }
     return maxes
}

// other solution 

const maxNumber = (arr) => {
    let max = arr[0]

    for (let i=0; i<arr.length; i++) {
        if (arr[i] > max) max = arr[i] 
    }
    return max
}

const largestOfFour = (arr) => {
    let maxes = []


    for (let i=0; i<arr.length; i++) {
      let innerMax = maxNumber(arr[i])
        maxes.push(innerMax);
    }
    return maxes;

}

largestOfFour([[4, 5, 1, 3], 
              [13, 27, 18, 26],
              [32, 35, 37, 39], 
              [1000, 1001, 857, 1]])


