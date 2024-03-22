var data = {
    id: 4,
    e1: 55,
    e2: "test string",
};
// Реализация стрелочной функции
var multiplyNumbers = function (a, b) { return a * b; };
// Создание объектов-констант и переменных
var constantObject = { id: 1 };
var variableObject = { id: 2, e1: 3, e2: "test" };
console.log(variableObject);
// Вывод произведения чисел
var num1 = 5, num2 = 6;
console.log("\u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0447\u0438\u0441\u0435\u043B ".concat(num1, " \u0438 ").concat(num2, ": ").concat(multiplyNumbers(num1, num2)));
// Преобразование объекта data в формат JSON
var jsonData = JSON.stringify(data);
console.log(jsonData);
