# Count Occurrences of an Element in List
# Input: [1, 2, 2, 3, 2, 4], Element: 2 → Output: 3

def count_occurrences(lst, element):
    count = 0
    for num in lst:
        if num == element:
            count += 1
    return count

num = [1, 2, 2, 3, 2, 4]
target = 2


print(count_occurrences(num, target))
