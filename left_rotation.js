let arr = [ 1, 2, 3, 4, 5 ]
let target = 4

function rotateLeft(d, arr) {
    let newArr = []
    for(let i=0;i<arr.length;i++){
        let step = i-d
        if(step<0){
            step += arr.length
        }
        newArr[step] = arr[i] 
    }
    console.log(newArr)
    return newArr
}

rotateLeft(target,arr)