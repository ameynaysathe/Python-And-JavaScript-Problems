// Print Fibonacci Series up to n Terms
// Input: n=5 → Output: 0 1 1 2 3

function fiboSeries(n){
    let fib = [0, 1];

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    
    }

    console.log(fib.join(" "));
}


fiboSeries(5)
