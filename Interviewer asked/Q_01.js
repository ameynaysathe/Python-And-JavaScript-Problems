function findLeaders(arr) {
  const leaders = [];
  let maxRight = arr[arr.length - 1]; // last element is always a leader
  leaders.push(maxRight);

  // loop from second last to first element
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= maxRight) {
      leaders.push(arr[i]);
      maxRight = arr[i];
    }
  }

  // reverse to get the correct left-to-right order
  return leaders.reverse();
}

// Test cases
console.log(findLeaders([16, 17, 4, 3, 5, 2])); // [17, 5, 2]
console.log(findLeaders([1, 9, 3, 4, 2]));      // [9, 4, 2]
