const task = document.getElementById('task');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');

btn.addEventListener('click', function(){
    let taskEnd = task.value;
    //if(taskEnd !== ''){
       // if(text.innerHTML === 'Нет задач'){
        if(taskEnd && text.innerHTML === 'Нет задач'){
            text.textContent = '';
            text.style.cssText = "border: none";
    }
        const textNew = document.createElement('div');
        textNew.className = 'tasks';
        textNew.innerHTML += `<p>${taskEnd}</p>
        <input type="checkbox" id="yes">`;
        text.append(textNew);
        textNew.style.cssText = " display: flex; justify-content: space-around; color: black";
        text.style.cssText = "border-bottom: 2px solid rgb(197, 179, 179); margin-bottom: 16px;";
    //}
   
});
btn1.addEventListener('click' , clean);
function clean(){
    text.innerHTML = 'Нет задач';
    text.style.cssText = "border: none";
}
