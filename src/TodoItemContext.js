import React, {useState} from 'react';

export const TodoItemContext = React.createContext({
    todoItem: "",
    settodoItem: () => {},
    todos: [],
    setTodos: () => {},
    idNum: "",
    setidNum: () => {},
    addTodo: () => {},
});


export default function TodoItemProvider({children}){
    const [todoItem, settodoItem] = useState("");  //one todo
    const [idNum, setidNum] = useState(2);
    const [todos, setTodos] = useState([  //list of todos
            {
                 id: 0,
                 text: "Learn about React",
                 isCompleted: false,
            },
            
            {
                id: 1,
                text: "Build todo App",
                isCompleted: true,
            },
               
          ]);

    const addTodo = e => {
            e.preventDefault();
            if (!todoItem) return;
            setidNum(idNum+1);
            todos.push({text: todoItem,  isCompleted: "", id: idNum});
            setTodos(todos);
            settodoItem("");
          }

    return (
        <TodoItemContext.Provider value={{
            todoItem,
            settodoItem,
            todos,
            setTodos,
            idNum,
            setidNum,
            addTodo,
        }}>
            {children}
        </TodoItemContext.Provider>
    );
}
