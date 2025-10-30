// Find Maximum and Minimum in Array
// Input: [4, 2, 8, 6, 5] → Output: Max=8, Min=2

function find_max_and_min(arr){
    const maximum = Math.max(...arr)
    const minimum = Math.min(...arr)

    console.log(`Max=${maximum}, Min=${minimum}`);
    
}
find_max_and_min([4, 2, 8, 6, 5])