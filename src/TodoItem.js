
 import {useContext} from 'react';
 import {TodoItemContext} from './TodoItemContext';

 export default function TodoItem({id, text}){
    const {todos, idNum, setidNum, setTodos} = useContext(TodoItemContext);

    const onButtonClick = e => {
        e.preventDefault();
        const newTodo = todos.filter(({id}) => id != e.target.id);
        setTodos(newTodo);
        setidNum(idNum-1);
      }

    return (
        <form id={id}>
            <input 
            type ="text"
            value ={text}
            />
            <input 
            type="checkbox"
            />
            <button id={id} onClick ={onButtonClick}>X</button>
        </form>
    );
}



