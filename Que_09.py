# Find Second Largest Number in List
# Input: [1, 3, 4, 5, 0, 2] → Output: 4



def second_largest_number(arr):
    arr.sort()
    return arr[-2]
    
print(second_largest_number([1, 3, 4, 5, 0, 2]))
