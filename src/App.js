import './App.css';
import Input from './Input';
import TodoItemProvider from './TodoItemContext';
import TodoList from './TodoList';


function App() {

  return (
    <TodoItemProvider>
         <div className="App">
           <h1>todos</h1>
           <section>
          <Input/>
          <TodoList/>
          </section>
         </div>
    </TodoItemProvider>
  );
}

export default App;



// function App() {
//   const [todoItem, settodoItem] = useState("");  //one todo
//   const [idNum, setidNum] = useState(2);
//   const [todos, setTodos] = useState([  //list of todos
//     {
//          id: 0,
//          text: "Learn about React",
//          isCompleted: false,
//     },
    
//     {
//         id: 1,
//         text: "Build todo App",
//         isCompleted: true,
//     },
       
//   ]);


//   const addTodo = e => {
//     e.preventDefault();
//     if (!todoItem) return;
//     setidNum(idNum+1);
//     todos.push({text: todoItem,  isCompleted: "", id: idNum});
//     setTodos(todos);
//     settodoItem("");
//   }

//   const onButtonClick = e => {
//     e.preventDefault();
//     const newTodo = todos.filter(({id}) => id != e.target.id);
//     setTodos(newTodo);
//     setidNum(idNum-1);

//   }


//   return (
//     <div className="App">
//       <Input todo= {todoItem} settodoItem={settodoItem} handleSubmit={addTodo}/>
//       <div className="todo-list">
//         {todos.map(
//             ({id, text, isCompleted}) => <TodoItem id ={id} text={text} handleButtonClick={onButtonClick}/>
//             )}
//       </div>
//     </div>
//   );
// }

// export default App;

