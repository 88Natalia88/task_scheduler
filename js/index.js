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
        textNew.innerHTML += `<p>${taskEnd}</p>
        <input type="checkbox" class="yes">`;
        text.append(textNew);
        textNew.classList.toggle('line');
        textNew.style.cssText = "display: flex; justify-content: space-between; color: black; padding-top: 10px;";
        cleanTask();
        //}
});

//зачеркивание сделанных задач
function cleanTask(){
    let checkboxAll = document.querySelectorAll('.yes');
        checkboxAll.forEach(function(checkbox){
            if(checkbox.checked == true){
                text.style.cssText = "text-decoration: line-through; color: lightgray;";
                //console.log(checkbox);
            }
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
