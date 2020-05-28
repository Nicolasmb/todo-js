import { Todo } from "./todo.class";

export class TodoList {

    constructor()  {

        // this.todos = [];
        this.cargarLocalStorage();

    }

    nuevoTodo( todo ) {
        this.todos.push( todo );
        this.guardarLocalStorage();
    }

    eliminarTodo( id ) {
        // Toda esta instruccion va a regresar un nuevo arreglo
        // excluyendo el elemento a eliminar.
        this.todos = this.todos.filter( todo => todo.id != id );
        this.guardarLocalStorage();
    }

    marcarCompletado( id ) {

        for( const todo of this.todos ) {
            
            if( todo.id == id ) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
                // Hacemos un break para salir del ciclo for, ya que no es necesario
                // seguir porque no va a haber otro todo con el mismo id.
            }
        }
    }

    eliminarCompletados() {
        // Dejamos solo los elementos que no estan completados
        this.todos = this.todos.filter( todo => !todo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify( this.todos ));

    }

    cargarLocalStorage() {
        this.todos = ( localStorage.getItem('todo') ) 
                        ? JSON.parse( localStorage.getItem('todo')) 
                        : [];
        
        this.todos = this.todos.map( obj => Todo.fromJson( obj ) );
    }
}