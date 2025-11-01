// Find All Numbers Divisible by 3 and 5 in a Range
// Input: 1 to 30 → Output: [15, 30]

function divisibleBy3And5(start, end) {
  let result = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(divisibleBy3And5(1, 30)); 

