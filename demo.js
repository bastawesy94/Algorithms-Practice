function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            let temp = 0
            if (arr[i] > arr[x]) {
                temp = arr[i]
                arr[i] = arr[x]
                arr[x] = temp
            }
        }
    }
    console.log("first max = " + arr[0] + "  second max = " + arr[1])
    return arr
}
console.log(bubbleSort([29,10,14,30,37,14,18]))
