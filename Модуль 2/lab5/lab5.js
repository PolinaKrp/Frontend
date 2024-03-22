document.addEventListener("DOMContentLoaded", function () {
    console.log("Страница загрузилась");
    var data = [];
    var record = function (param) {
        data.push(param);
        console.log('Record ' + param + ' added');
        setTimeout(function () {
            remove();
        }, 10000);
    };
    function remove() {
        var removedItem = data.pop();
        console.log('Record ' + removedItem + ' removed');
    }
    var count = 0;
    var interval = setInterval(function () {
        if (count == 6) {
            clearInterval(interval);
        }
        ++count;
        record(12345);
    }, 10000);
    function extFunction(x) {
        console.log("Внешняя фунция вводим строку: " + x);
        return function (y) { return console.log("Возврат результата в виде функции с замыканием на внешнюю функцию: " + (x + y)); };
    }
});
