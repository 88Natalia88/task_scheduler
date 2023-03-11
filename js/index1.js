const nums = document.getElementById('num');
const btn = document.getElementById('btn');
const text = document.getElementById('text');
const example = document.getElementById('sum');
const long = document.getElementById('long');
const around = document.getElementById('around');

btn.addEventListener('click', function(){
let num = nums.value;
let array = Array.from(num);
text.innerHTML = `Введенное число состоит из цифр: ${String(array)}`;
around.innerHTML = `Введенное значение наоборот: ${array.reverse()}`;
long.innerHTML = `Длина введенного значения: ${array.length} цифры`;
//console.log(array.length);

});
btn.addEventListener('click', sumAll);

function sumAll(){
let num = nums.value;
let array = Array.from(num);
let sum = 0;
for(let i = 0; i<array.length; i++){
    sum += Number(array[i]);
}
example.innerHTML = `Сумма введенных цифр: ${sum}`;
}
