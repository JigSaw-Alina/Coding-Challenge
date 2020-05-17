// Use the array methods slice and splice to copy each element 
// of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array. The input arrays should remain the same after the function runs.

const titleCase = (str) => {
   let newTitle = str.toLowerCase()
                     .split(' ')
                     .map((val) => 
                      val[0].toUpperCase() + val.slice(1))

    return newTitle.join(' ')
    
}

// solution using map, replace and charAt
const titleCase = (str) => {
    let newTitle = str.toLowerCase()
                      .split(' ')
                      .map((val) => val.replace(val.charAt(0), val.charAt(0).toUpperCase()))

    return newTitle.join(' ')
}

// solution for-loop, slice() and join()
const titleCase = (str) => {
    let newTitle = str.toLowerCase().split(' ')

    for(let i=0; i<newTitle.length; i++) {
       newTitle[i] = `${newTitle[i][0].toUpperCase()}${newTitle[i].slice(1)}` 
    }
    
    return newTitle.join(' ')
}




titleCase("I'm a little tea pot") // string.
titleCase("sHoRt AnD sToUt") // I'm A Little Tea Pot.
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") // Here Is My Handle Here Is My Spout.
