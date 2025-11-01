// Sum of Elements in an Array
// Input: [1, 2, 3, 4] → Output: 10


function sumOfArray(arr){
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
    }
    return sum
}

console.log(sumOfArray([1, 2, 3, 4]))