// Given an array of integers, return a new array where each element in the new array is the number of smaller elements to the right of that element in the original input array.

// For example, given the array [3, 4, 9, 6, 1], return [1, 1, 2, 1, 0], since:

//     There is 1 smaller element to the right of 3
//     There is 1 smaller element to the right of 4
//     There are 2 smaller elements to the right of 9
//     There is 1 smaller element to the right of 6
//     There are no smaller elements to the right of 1

let onYourRight = (arr) => {
    let n = arr.length
    let output = []
    for(let i = 0; i < n; i++){
        if(i === (n-1) ){
            output.push(0)
            break;
        }
        let count = 0;
        let j = i + 1
        while(j<n){
            if(arr[i]>arr[j]){
                count += 1;
            }
            j++
        }
        output.push(count)
    }
    console.log(output)
}

onYourRight([3, 4, 9, 6, 1])
