// ? Task:   На входе массив чисел, например: arr = [-2, -1, 1, 2].

// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

// Функция getMaxSubSum(arr) должна возвращать эту сумму.

// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:


// Solution 1
const getMaxSubSum = arr => {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        partialSum += item;
        maxSum = Math.max(maxSum, partialSum);
        if (partialSum < 0) 
            partialSum = 0;
        }

        return maxSum;
    };

console.log(getMaxSubSum([-2, -1, 1, 2])); // 1 + 2 = 3

console.log(getMaxSubSum([2, -1, 2, 3, -9])); // 2 + (-1) + 2 + 3 = 6

console.log(getMaxSubSum([-1, -2, -3])); // 0


// ! Explanation: Идём по массиву и накапливаем текущую частичную сумму элементов в переменной s. Если s в какой-то момент становится отрицательной – присваиваем s=0. Максимальный из всех s и будет ответом