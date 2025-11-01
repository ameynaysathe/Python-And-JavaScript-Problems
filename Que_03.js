// Count Even and Odd Numbers in a List
// Input: [1, 2, 3, 4, 5, 6] → Output: Even=3, Odd=3

function countEvenOdd(arr){
    let even = 0
    let odd = 0

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            even += 1
        }
        else {
            odd += 1
        }   
    }
    console.log(`Even= ${even}, Odd= ${odd}`)
}

countEvenOdd([1, 2, 3, 4, 5, 6])