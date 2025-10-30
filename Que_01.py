# Find Maximum and Minimum in Array
# Input: [4, 2, 8, 6, 5] → Output: Max=8, Min=2

def find_max_and_min(arr):
    maximum = max(arr)
    minimum = min(arr)

    print(f"Max={maximum}, Min={minimum}")

find_max_and_min([4, 2, 8, 6, 5])