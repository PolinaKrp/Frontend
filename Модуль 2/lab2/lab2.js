/** Part 1 - START **/
//Вариант №5. Реализовать метод, возвращающий максимальное значение среди отрицательных чисел массива целых чисел.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Одномерные массивы
function getMaxNegativeValue(arr) {
    var negativeNumbers = arr.filter(function (num) { return num < 0; });
    if (negativeNumbers.length === 0) {
        return undefined; // Если нет отрицательных чисел
    }
    return Math.max.apply(Math, negativeNumbers);
}
// Вариант №5. Реализовать метод, возвращающий матрицу целых
// чисел, составленный из матрицы булевых значений (значение true
// переходит в формат числа 1, а false в формат числа 0).
// Двумерные массивы
function booleanMatrixToNumberMatrix(matrix) {
    return matrix.map(function (row) { return row.map(function (value) { return value ? 1 : 0; }); });
}
// Пример использования
var oneDimensionalArray = [1, -5, 3, -7, 8];
console.log(getMaxNegativeValue(oneDimensionalArray));
var twoDimensionalArray = [
    [true, false, true],
    [false, true, false],
    [true, true, false]
];
console.log(booleanMatrixToNumberMatrix(twoDimensionalArray));
function concatenateStrings(tuple) {
    var num = tuple[0], str0 = tuple[1], str1 = tuple[2];
    return "".concat(str1, ": ").concat(str0);
}
// Пример использования
var myTuple = [42, "Hello", "World"];
console.log(concatenateStrings(myTuple));
/** Part 2 - END **/
/** Part 3 - START **/
// Вариант №5. Создайте тип перечисление для типов стандартных
// аминокислот (Глицин, Глутамин и т.д). Выведите какой-либо тип
// аминокислоты в консоль.
var AminoAcid;
(function (AminoAcid) {
    AminoAcid["ELEM_1"] = "\u0413\u043B\u0438\u0446\u0438\u043D";
    AminoAcid["ELEM_2"] = "\u0413\u043B\u0443\u0442\u0430\u043C\u0438\u043D";
})(AminoAcid || (AminoAcid = {}));
console.log(AminoAcid.ELEM_1, AminoAcid.ELEM_2);
/** Part 3 - END **/
/** Part 4 - START **/
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = '';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
// Обобщенный тип
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age));
}
// Пример использования
var dog = new Dog();
var cat = new Cat();
printPetInfo(dog);
printPetInfo(cat);
/** Part 4 - END **/
/** Part 5 - START **/
// Перечисление с полями
var CustomEnum;
(function (CustomEnum) {
    CustomEnum["Type1"] = "Type One";
    CustomEnum["Type2"] = "Type Two";
})(CustomEnum || (CustomEnum = {}));
// Объект на основе типа
var myObject = {
    itemType: CustomEnum.Type1,
    description: 'This is type one',
    value: 42
};
// Вывод в консоль в формате JSON
console.log(JSON.stringify(myObject, null, 2));
/** Part 5 - END **/ 
