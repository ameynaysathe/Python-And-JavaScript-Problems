# Problem: "Leaders in an Array"

# Input:  [16, 17, 4, 3, 5, 2]
# Output: [17, 5, 2]

# Input:  [1, 9, 3, 4, 2]
# Output: [9, 4, 2]


def find_leaders(arr):
    leaders = []
    max_right = arr[-1]        # last element is always a leader
    leaders.append(max_right)

    # move from right to left
    for i in range(len(arr)-2, -1, -1):
        if arr[i] > max_right:
            leaders.append(arr[i])
            max_right = arr[i]

    return leaders[::-1]  