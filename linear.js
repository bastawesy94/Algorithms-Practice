//by using for loop
//O(n) .. n is the length of arrray
function linearSearch(array, input) {
    for (let i = 0; i < array.length; i++) {
        if (input === array[i]) {
            return array[i]
        }
    }
    return -1
}

function recursivLinearSearch(array, input) {
    if (array[0] === input)
        return input
    if (array.length <= 0)
        return -1
    return input = recursivLinearSearch(array.slice(1), input)
}
console.log(recursivLinearSearch([2, 3,1, 2, 3,1, 5, 3], 5))