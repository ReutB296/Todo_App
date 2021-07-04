

//  export default function Input ({todo, settodoItem, handleSubmit}){


//     return (
//         <form onSubmit={handleSubmit}>
//         <input 
//         placeholder='add your task here' 
//         type ="text"
//         className="input"
//         onChange = { e => settodoItem(e.target.value)}
//         value = {todo}
//         />
//      </form>
//     )
// }


import {useContext} from 'react';
import {TodoItemContext} from './TodoItemContext';

export default function Input (){
const {todoItem, settodoItem, addTodo} = useContext(TodoItemContext);

    return (
        <form onSubmit={addTodo}>
                <input 
                placeholder='add your task here' 
                type ="text"
                className="input"
                onChange = { e => settodoItem(e.target.value)}
                value = {todoItem}
                />
        </form>
    )
}