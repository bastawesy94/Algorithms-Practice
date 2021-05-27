function binarySearch(array, value) {
    let start = 0
    let end = array.length - 1
    let pivot = 0
    do {
        pivot = Math.floor(end + start) / 2
        if (array[pivot] === value)
            return pivot
        else
            if (value < array[pivot])
                end = pivot - 1
            else
                if (value > array[pivot])
                    start = pivot + 1
        return -1
    }
    while (array[pivot] !== value);
    return -1
}
console.log("place : " + binarySearch([1, 2, 3, 4, 5], 15))