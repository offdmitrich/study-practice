/**
 * Концепция
 * 1. Считаем первый элемент как отсортированый, начинаем со второго
 * 2. Проверяем все элементы, которые больше, и перед данным элементом
 * 3. Возвращеаем отсортированый масив
 */

const arr = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
  32,
]; // [0,1,1,2,3.......]
let count = 0;

function insertionSort(array) {
    let len = array.length
    for(let i = 1; i < len; i++){
        let key = array[i]
        let j = i - 1
        while (j >= 0 && array[j] > key) {
            count++ 
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array
}

console.log(insertionSort(arr))
console.log("Steps before sorted: ", count)