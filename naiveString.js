function stringIsExist(long, small) {
    let l = 0
    let s = 0
    let counter = 0
    for (let l = 0; l < long.length; l++) {
        for (let i = 0; i < small.length; i++) {
            if (long[l] === small[i]) {
                counter++
                l++
                i++
            }
            break
        }

        if (counter === small.length)
            return i
    }
    return -1
}
console.log(stringIsExist("mohamedelbastawesy", "ha"))