function shellSort(array) {
    let len = array.length
    let gap = Math.floor(len / 2)

    while(gap > 0) {
        for(let i = gap; i < len; i++) {
            let temp = array[i]
            let j = i
            while(j >= gap && array[j - gap] > temp) {
                array[j] = array[j - gap]
                j -= gap
            }
            array[j] = temp
        }
        gap = Math.floor(gap / 2)
    }

    return array
}

let array = [5, 3, 1, 2, 4]
console.log(shellSort(array))