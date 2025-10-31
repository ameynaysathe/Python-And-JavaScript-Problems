# Find All Duplicate Elements in List
# Input: [1, 2, 3, 2, 1, 4] → Output: [1, 2]

def find_duplicate(lst):
    duplicates = []
    for item in lst:
        if lst.count(item) > 1 and item not in duplicates:
            duplicates.append(item)
    return duplicates

print(find_duplicate([1, 2, 3, 2, 1, 4]))