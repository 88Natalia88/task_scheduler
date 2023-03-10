const task = document.getElementById('task');
const text = document.getElementById('text');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
    let taskEnd = task.value;
    text.innerHTML += `<p>${taskEnd}</p>
    <input type="checkbox" id="yes">`;
});
