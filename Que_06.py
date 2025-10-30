# Find Factorial of a Number
# Input: 5 → Output: 120

def find_factorial(n):
    fact = 1
    for i in range(1, n + 1):
        fact *= i
    return fact

print(find_factorial(5))



