const nums = document.getElementById('num');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const example = document.getElementById('sum');
const long = document.getElementById('long');
const around = document.getElementById('around');

btn.addEventListener('click', function(){
let num = nums.value;
let array = Array.from(num);
for(let arr of array){
    let sum = 0;
    sum = arr + arr;
}
text.innerHTML = `Введенное число состоит из цифр: ${String(array)}`;
//example.innerHTML = `Сумма введенных цифр: ${sum}`;
around.innerHTML = `Введенное значение наоборот: ${array.reverse()}`;
long.innerHTML = `Длина введенного значения: ${array.length} цифры`;
//console.log(array.length);
example.innerHTML = `Сумма введенных цифр: ${sum}`;
});
