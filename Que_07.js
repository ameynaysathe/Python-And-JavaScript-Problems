// Find Largest of Three Numbers
// Input: 10, 20, 5 → Output: 20

function findLargestNumber(a, b, c){
    if (a >= b && a >= c){
        return a
    }
    if (b >= a && b >= c){
        return b
    }
    else {
        return c
    }
}

console.log(findLargestNumber(40, 20, 90));
