# Find All Numbers Divisible by 3 and 5 in a Range
# Input: 1 to 30 → Output: [15, 30]

def divisible_by_3_and_5(start, end):
    result = []

    for i in range(start, end + 1):
        if i % 3 == 0 and i % 5 == 0:
            result.append(i)
    return result

print(divisible_by_3_and_5(1, 30))
