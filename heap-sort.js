/**
 * Концепцния
 * 1. Создаем кучу (граф) с масива
 * 2. Начиная с последнего не листка (родительского элемента) начинаем проверять
 * 3. Если элемент в листке больше, чем родительский, меняем местами, и так сортируем всю кучу
 * 4. Добавляем найменший элемент в начало отсортерованого масива
 * 
 */

function createHeap(array) {
    // Create heap from array
    let heap = [...array]

    // Starting from last non-leaf node
    for(let i = Math.floor(heap.length / 2); i >= 0; i--) {
        heapify(heap, i, heap.length)
    }

    return heap
}

function heapify(heap, i, heapSize) {
    let left = 2 * i + 1;
    let right = 2 * i + 2
    let largest = i
    if(left < heapSize && heap[left] > heap[largest]) {
        largest = left
    }
    if(right < heapSize && heap[right] > heap[largest]) {
        largest = right
    }
    if(largest !== i) {
        [heap[i], heap[largest]] = [heap[largest], heap[i]]
        heapify(heap, largest, heapSize)
    }
}

function heapSort(array) {
    let heap = createHeap(array)
    let sortedArray = []
    while(heap.length > 0) {
        sortedArray.unshift(heap.shift())
        heap = createHeap(heap)
    }

    return sortedArray
}

let array = [3, 5, 1, 4, 2]
console.log(heapSort(array))