# Find Largest of Three Numbers
# Input: 10, 20, 5 → Output: 20

def find_largest(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

print(find_largest(40, 10, 5))