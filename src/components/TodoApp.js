import React,{useState} from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import styles from './TodoApp.module.css';
import { v4 as uuid } from 'uuid';


const TodoApp = () => {

    const initalialTodos = [
        // {
        //     id:uuid(),
        //     task:'Go To Shopping',
        //     completed:false
        // },
        // {
        //     id:uuid(),
        //     task:'Learn React',
        //     completed:false
        // }
    ]

    // const initalialTodos = JSON.parse(window.localStorage.getItem('todos'||"[]"));
    
    const [todos, setTodos] = useState(initalialTodos);

    // useEffect(() => {
    //     window.localStorage.setItem('todos', JSON.stringify(todos));
    // },[todos])

 
    const addTodo = (inputTask) => {
        setTodos((prevState) => {
            return [...prevState, {
                id: uuid(),
                task: inputTask,
                completed: false
            }];
        })
    }

    const deleteTodo = (todoid) => {
        setTodos((prevState) => {
            return prevState.filter((todo) => todo.id !== todoid);
        })

    }

    const toggleTodo=(todoid) => {
        setTodos((prevState) => {
            return prevState.map((todo) => {
                return todo.id === todoid ? { ...todo, completed: !todo.completed } : todo;
            })
        })
    }

    const upTodo=(todoIndex) => {
        
        setTodos((prevState) => {
            let data = [...prevState]
            if(todoIndex>0)
            {
                const obj = data[todoIndex] 
                data[todoIndex]= data[todoIndex-1]
                data[todoIndex - 1] = obj;
    
            }
          return data;
        })
       
    }

    const downTodo=(todoIndex) => {
        setTodos((prevState) => {
            let data = [...prevState]
            let n = data.length;
            if(todoIndex<n-1)
            {
                const obj = data[todoIndex] 
                data[todoIndex]= data[todoIndex+1]
                data[todoIndex + 1] = obj;
    
            }
          return data;
        })
     
    }



    return (
        <div>
            <section className={styles['todo-form']}>
                <InputForm
                    addTodo={addTodo}
                />
            </section>
            <section className={styles['todo-list']}>
                <TodoList
                    todos={todos}
                    deleteTodo={deleteTodo}
                    toggleTodo={toggleTodo}
                    upTodo={upTodo}
                    downTodo={downTodo}
                />
            </section>
        </div>
    )
}

export default TodoApp
