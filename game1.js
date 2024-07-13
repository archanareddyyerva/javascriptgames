const todoList=[];

function addTodo(){
    const ele=document.querySelector('.js-name-input').value;
    const dued=document.querySelector('.js-due-date-input').value;
    const obj={
        name:ele,
        dueDate:dued
    };
    todoList.push(obj);
    document.querySelector('.js-name-input').value='';
    renderTodoList();
}

function renderTodoList(){
    let todoListHTML='';
    for(let i=0;i<todoList.length;i++){
        let todoObject=todoList[i];
        let html=`
        <div>${todoObject.name}</div>
        <div>${todoObject.dueDate}</div> 
            <button onclick="
                todoList.splice(${i},1);
                renderTodoList();
            " class="delete-todo-button">Delete</button>`;
        todoListHTML+=html;
    }
    document.querySelector('.js-todo-list').innerHTML=todoListHTML;
}