import { Todo } from '../classes';

import { todoList } from '../index';

// Referencias en el HTML
const divTodoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');



export const crearTodoHtml = ( todo ) => {

    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : '' }" data-id="${ todo.id }">
		<div class="view">
			<input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : '' }>
			<label>${ todo.tarea }</label>
			<button class="destroy"></button>
		</div>
	    <input class="edit" value="Create a TodoMVC template">
    </li>`
    
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append( div.firstElementChild );

    return div.firstElementChild;
}



// Eventos
txtInput.addEventListener('keyup', ( event ) => {
// El evento 'keyup' es cuando la persona suelta la tecla
// El "event" nos dice que tecla presionó el usuario
// El KeyCode nos dice que tecla presionó el usuario
    if( event.keyCode === 13 && txtInput.value.length > 0) {

        console.log(txtInput.value);
        const nuevoTodo = new Todo( txtInput.value );
        todoList.nuevoTodo( nuevoTodo );

        crearTodoHtml( nuevoTodo );
        txtInput.value = '';

    }

});


divTodoList.addEventListener('click', (event) => {
    
    const nombreElemento = event.target.localName; // input, label o button
    // Aca obtenemos una referencia al elemento html de la lista a eliminar
    const todoElemento   = event.target.parentElement.parentElement;
    // Obtenemos el id de ese elemento
    const todoId         = todoElemento.getAttribute('data-id');

    if( nombreElemento.includes('input') ) { // Si se hizo click en check
        todoList.marcarCompletado( todoId );
        todoElemento.classList.toggle('completed');

    } else if ( nombreElemento.includes('button') ) { // Hay que borrar el todo
        
        todoList.eliminarTodo( todoId );
        divTodoList.removeChild( todoElemento );

    }
});


btnBorrar.addEventListener('click', () => {

    todoList.eliminarCompletados();
    // Haste este punto todos los "todo" completados seguirian existiento en el html.
    // Hacemos una referencia a todos los hijos del divTodoList. Recordar que todos 
    // los arreglos en JS empiezan en 0, por eso le restamos -1. 
    // Además, realizamos un ciclo for inverso porque sino se irian borrando otros elementos
    // al irse cambiando el indice, de esta forma si elimino el último elemento del arreglo 
    // los indices de los elementos que quedan no se modifican. 
    for( let i = divTodoList.children.length-1; i >= 0; i-- ) {
         
        const elemento = divTodoList.children[i];
        // Si el elemento tiene la clase "completed" se lo elimina de la lista divTodoList.
        if( elemento.classList.contains('completed') ){
            divTodoList.removeChild(elemento);
        }
    }
})


ulFiltros.addEventListener('click', (event) => {

    const filtro = event.target.text;
    // Se hace una validacion por si se hace click en un lugar en el que no
    // haya ningun boton. Si no hay nada la variable filtro se hace un return.
    if( !filtro){ return;}

    anchorFiltros.forEach( elem => elem.classList.remove('selected') );
    event.target.classList.add('selected');


    for( const elemento of divTodoList.children) {

        // Al iniciar limpiamos la clase hidden del elemento.
        elemento.classList.remove('hidden');
        // Consultamos si ese elemento esta completado:
        const completado = elemento.classList.contains('completed');

        switch( filtro ) {
            
            case 'Pendientes': //Si se hizo click en Pendientes
                if( completado ) {
                    elemento.classList.add('hidden');
                }
            break;

            case 'Completados': //Si se hizo click en Completados
                if( !completado ) {
                    elemento.classList.add('hidden');
                }
            break;
        }
    }

});