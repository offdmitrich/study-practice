function timSort(arr) {
    const minRun = 32;
    const len = arr.length;

    for (let i = 0; i < len; i += minRun) {
        insertionSortTim(arr, i, Math.min(i + minRun - 1, len - 1));
    }

    for (let size = minRun; size < len; size *= 2) {
        for (let left = 0; left < len; left += 2 * size) {
            const mid = Math.min(left + size - 1, len - 1);
            const right = Math.min(left + 2 * size - 1, len - 1);
            mergeTim(arr, left, mid, right);
        }
    }

    return arr;
}

function insertionSortTim(arr, left, right) {
    for (let i = left + 1; i <= right; i++) {
        let temp = arr[i];
        let j = i - 1;
        while (j >= left && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }
}

function mergeTim(arr, left, mid, right) {
    let len1 = mid - left + 1;
    let len2 = right - mid;
    let leftArr = new Array(len1);
    let rightArr = new Array(len2);

    for (let i = 0; i < len1; i++) leftArr[i] = arr[left + i];
    for (let i = 0; i < len2; i++) rightArr[i] = arr[mid + 1 + i];

    let i = 0, j = 0, k = left;

    while (i < len1 && j < len2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < len1) arr[k++] = leftArr[i++];
    while (j < len2) arr[k++] = rightArr[j++];
}

console.log(timSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]