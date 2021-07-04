import {useContext} from 'react';
import {TodoItemContext} from './TodoItemContext';
import TodoItem from './TodoItem';


export default function TodoList(){
    const {todos} = useContext(TodoItemContext);

    return (
        <div className="todo-list">
             {todos.map(
             ({id, text, isCompleted}) => <TodoItem id ={id} text={text}/>
            )}
        </div>
    );
}
