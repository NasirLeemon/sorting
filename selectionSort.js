

function selectionSort(arr){

for(let i = 0; i < arr.length; i++){

    let minIndex = i
    // find index of minimum value
    for(let j = i; j < arr.length; j++){
        if (arr[j] < arr[minIndex]) {
            minIndex = j
        }
    }
     
    // swap
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
    
    
}
return arr
}

console.log(selectionSort([9,2,1,4,7,3,0]));