// Find Factorial of a Number
// Input: 5 → Output: 120

function findFactorial(num){
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
        
    }
    return result
}

console.log(findFactorial(5));

