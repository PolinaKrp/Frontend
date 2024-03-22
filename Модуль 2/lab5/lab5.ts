document.addEventListener("DOMContentLoaded", () => {
  console.log("Страница загрузилась");

  const data: number[] = [];

  const record = (param: number) => {
      data.push(param);
      console.log('Record ' + param + ' added');
        setTimeout(()=>{
            remove()
        }, 10000)
  };

  function remove() {
      const removedItem = data.pop();
      console.log('Record ' + removedItem + ' removed');
  }

    let count=0

  const interval = setInterval (()=> {
    if (count==6){
        clearInterval (interval)
    }
    ++count
    record (12345)
  }, 10000) 

  function extFunction(x: string) {
      console.log("Внешняя фунция вводим строку: " + x);
      return (y: string) => console.log("Возврат результата в виде функции с замыканием на внешнюю функцию: " + (x + y));
  }
});