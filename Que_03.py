# Count Even and Odd Numbers in a List
# Input: [1, 2, 3, 4, 5, 6] → Output: Even=3, Odd=3


def count_even_and_odd(arr):
    even = 0
    odd = 0
    for n in arr:
        if n % 2 == 0:
            even += 1
        else:
            odd += 1
    print(f"Even={even}, odd={odd}")

count_even_and_odd([1, 2, 3, 4, 5, 6])