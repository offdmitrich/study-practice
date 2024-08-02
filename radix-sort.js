function radixSort(arr) {
    let maxDigits = 0

    // Find the maximum number of digits in the array elements
    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, getNumberOfDigits(arr[i]))
    }

    // Split elements to 10 buckets (0-9)
    for(let i = 0; i < maxDigits; i++) {
        let buckets = Array.from({length: 10}, () => [])
        
        for(let j = 0; j < arr.length; j++) {
            let digit = getDigit(arr[j], i)
            buckets[digit].push(arr[j])
        }

        arr = [].concat(...buckets)
    }
    return arr;
}

function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10)
}

function getNumberOfDigits(num) {
    return Math.floor(Math.log10(Math.abs(num)) + 1)
}

let arr = [5, 3, 4, 1, 2]
console.log(radixSort(arr))