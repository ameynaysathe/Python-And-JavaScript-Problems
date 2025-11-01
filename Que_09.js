// Find Second Largest Number in List
// Input: [1, 3, 4, 5, 0, 2] → Output: 4

function findSecondLargestNumber(arr){
    arr.sort((a, b) => b - a)
    return arr[1]
    
}

console.log(findSecondLargestNumber([1, 3, 4, 5, 0, 2]))