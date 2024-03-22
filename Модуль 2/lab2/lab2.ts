/** Part 1 - START **/
//Вариант №5. Реализовать метод, возвращающий максимальное значение среди отрицательных чисел массива целых чисел.

// Одномерные массивы
function getMaxNegativeValue(arr: number[]): number | undefined {
    const negativeNumbers = arr.filter(num => num < 0);
    if (negativeNumbers.length === 0) {
        return undefined; // Если нет отрицательных чисел
    }
    return Math.max(...negativeNumbers);
}
// Вариант №5. Реализовать метод, возвращающий матрицу целых
// чисел, составленный из матрицы булевых значений (значение true
// переходит в формат числа 1, а false в формат числа 0).

// Двумерные массивы
function booleanMatrixToNumberMatrix(matrix: boolean[][]): number[][] {
    return matrix.map(row => row.map(value => value ? 1 : 0));
}
// Пример использования
const oneDimensionalArray = [1, -5, 3, -7, 8];
console.log(getMaxNegativeValue(oneDimensionalArray));
const twoDimensionalArray = [
    [true, false, true],
    [false, true, false],
    [true, true, false]
];
console.log(booleanMatrixToNumberMatrix(twoDimensionalArray));

/** Part 1 - END **/

/** Part 2 - START **/
// Вариант №5. Создайте кортеж, который может содержать только 2
// строковых и 1 числовое значения (порядок следования: число,
// строка0, строка1). Реализуйте метод, возвращающий конкатенацию
// строк в формате: строка1: строка0

// Кортеж
type MyTuple = [number, string, string];
function concatenateStrings(tuple: MyTuple): string {
  const [num, str0, str1] = tuple;
  return `${str1}: ${str0}`;
}
// Пример использования
const myTuple: MyTuple = [42, "Hello", "World"];
console.log(concatenateStrings(myTuple));

/** Part 2 - END **/

/** Part 3 - START **/
// Вариант №5. Создайте тип перечисление для типов стандартных
// аминокислот (Глицин, Глутамин и т.д). Выведите какой-либо тип
// аминокислоты в консоль.

enum AminoAcid {
    ELEM_1 = 'Глицин',
    ELEM_2 = 'Глутамин',
}

console.log(AminoAcid.ELEM_1,AminoAcid.ELEM_2);

/** Part 3 - END **/

/** Part 4 - START **/
class Pet {
    name: string = '';
    age: number = -1;

    speak() {
        return "";
    }
}

class Dog extends Pet {
    name = "AngryHunter";
    age = 8;

    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;

    speak() {
        return "Miyau!";
    }
}

// Обобщенный тип
function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}`);
}
// Пример использования
const dog = new Dog();
const cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);

/** Part 4 - END **/

/** Part 5 - START **/

// Перечисление с полями
enum CustomEnum {
    Type1 = 'Type One',
    Type2 = 'Type Two'
}
// Тип с применением перечисления
type MyType = {
    itemType: CustomEnum;
    description: string;
    value: number;
};
// Объект на основе типа
const myObject: MyType = {
    itemType: CustomEnum.Type1,
    description: 'This is type one',
    value: 42
};
// Вывод в консоль в формате JSON
console.log(JSON.stringify(myObject, null, 2));

/** Part 5 - END **/