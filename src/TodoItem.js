
 import {useContext} from 'react';
 import {TodoItemContext} from './TodoItemContext';
 import './TodoItem.css';
 

 export default function TodoItem({id, text}){
    const {todos, idNum, setidNum, setTodos} = useContext(TodoItemContext);

    const onButtonClick = e => {  //deleting task
        e.preventDefault();
        const newTodo = todos.filter(({id}) => id != e.target.id);
        setTodos(newTodo);
        setidNum(idNum-1);
      }

    return (
        <form id={id}>
            <input 
            className= "checkbox"
            type="checkbox"
            />
            <button id={id} onClick ={onButtonClick}>X</button>
            <input 
            type ="text"
            className= "todo"
            value ={text}
            />
        </form>
    );
}



