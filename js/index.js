const task = document.getElementById('task');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
btn1.disabled = true;

//Добавление задач
btn.addEventListener('click', function(){
    let taskEnd = task.value;
    //if(taskEnd !== ''){
       // if(text.innerHTML === 'Нет задач'){
        if(taskEnd && text.innerHTML === 'Нет задач' || task.value == ""){
            text.textContent = '';
            text.style.cssText = "border: none";
        }
        btn1.disabled = false;   
        const textNew = document.createElement('div');
        textNew.className = 'tasks';
        textNew.innerHTML += `<div class="allTasks"><p>${taskEnd}</p>
        <input type="checkbox" class="yes"></div>`;
        text.append(textNew);
        textNew.classList.toggle('line');
        textNew.style.cssText = "color: black; padding-top: 10px;";
        cleanTask();
        //}
});

function checkedTask(e){
    if(e.target.checked){
        e.target.parentElement.className = "done";
    } else {
        e.target.parentElement.className = '';
    }
}
//зачеркивание сделанных задач
function cleanTask(){
    let checkboxAll = document.querySelectorAll('.yes');
        checkboxAll.forEach(function(checkbox){
            checkbox.addEventListener('click', checkedTask);
        })
        //console.log(checkboxAll);
}

//очистка задач
btn1.addEventListener('click' , clean);
function clean(){
    text.innerHTML = 'Нет задач';
    text.style.cssText = "border: none";
    btn1.disabled = true;
}
