// Write a function that takes unlimited amount of arguments (numbers) and 
// returns the biggest number of them. The number returned must be at least 
// 100. If they are all smaller than 100, then it should return 100, 
// as shown on the image below..


const getBiggest = (...arg) => {
    
    const maxValue = Math.max(...arg)
    return maxValue > 100 ? maxValue : 100 
}

getBiggest(23,112, 150) // 112
getBiggest(1, 55, 39 , 3)  // 100
getBiggest(209, 300) // 300
getBiggest(5, 4, 90, 99, -153) // 100
getBiggest(165, 111, 176, 133) // 176


