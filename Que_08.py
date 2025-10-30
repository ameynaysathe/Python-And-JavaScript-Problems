# Print Fibonacci Series up to n Terms
# Input: n=5 → Output: 0 1 1 2 3

def fibo_series(n):
    n1, n2 = 0, 1
    for i in range(n):
        print(n1, end=" ")
        n1, n2 = n2, n1 + n2
fibo_series(10)