const task = document.getElementById('task');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const btn1 = document.getElementById('btn1');
btn1.disabled = true;

// Загрузка задач из localStorage при запуске страницы
window.addEventListener('load', function() {
    if (localStorage.getItem('tasks')) {
        text.innerHTML = localStorage.getItem('tasks');
        cleanTask();
        btn1.disabled = false;
    }
});
    
//Добавление задач
btn.addEventListener('click', function(){
    let taskEnd = task.value;

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
        saveTasksToLocalStorage();
        cleanTaskInput();
});

function checkedTask(e){
    if(e.target.checked){
        e.target.parentElement.className = "done";
    } else {
        e.target.parentElement.className = '';
    }
    saveTasksToLocalStorage();
}

//зачеркивание сделанных задач
function cleanTask(){
    let checkboxAll = document.querySelectorAll('.yes');
        checkboxAll.forEach(function(checkbox){
            checkbox.addEventListener('click', checkedTask);
        })
        //console.log(checkboxAll);
}

// Сохранение задач в localStorage
function saveTasksToLocalStorage() {
    localStorage.setItem('tasks', text.innerHTML);
}

//очистка задач
btn1.addEventListener('click' , clean);
function clean(){
    localStorage.removeItem('tasks');
    text.innerHTML = 'Нет задач';
    text.style.cssText = "border: none";
    btn1.disabled = true;
}

function cleanTaskInput() {
    task.value = '';
}