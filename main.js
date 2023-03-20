const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');

addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;

    if(text !== "") {
        const li = document.createElement('li');
    const p = document.createElement('p');

    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn() );
    ul.appendChild(li);

    //limpia el textbox de la tarea cargada anteriormente
    input.value = '';
    //quitar el elmento que dice no tiene tareas pendientes
    empty.style.display = 'none';
    }

    

});

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        //chequeamos que al eliminar elementos de la lista...no sean el ultimo de forma tal que vuelva a aparecer el texto no hay tareas pendientes.
        const items = document.querySelectorAll('li');

        if (items.length === 0) {
             empty.style.display = 'block';

        }
    });
    return deleteBtn;

}