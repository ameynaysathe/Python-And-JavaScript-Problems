// Reverse a List / Array
// Input: [10, 20, 30] → Output: [30, 20, 10]

function reverseArray(arr){
    let result = []

    for (let i = arr.length - 1 ; i >= 0; i--){
        result.push(arr[i]);
        
    }
    return result;

}
console.log(reverseArray([10, 20, 30]))