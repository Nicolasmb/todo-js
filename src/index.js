import { saludar, crearTodoHtml } from './js/componentes.js';
import './styles.css';
// Aca no hace falta aclarar que queremos importar el archivo './classes/index.js 
// ya que por defecto va a buscar el index.js
import { Todo, TodoList } from './classes';

export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// Como se manda solo un argumento se puede escribir asi:
todoList.todos.forEach( crearTodoHtml );

console.log( 'todos', todoList.todos );

