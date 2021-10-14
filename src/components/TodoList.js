import { logDOM } from '@testing-library/react';
import React from 'react'
import Todo from './Todo'
import styles from './TodoList.module.css';

const TodoList = ({todos,deleteTodo,toggleTodo,upTodo,downTodo}) => {
    return (
        <ul className={styles['todo-list']}>
            {
                todos.map((todo,idx) => {
                    return <Todo
                        id={todo.id}
                        task={todo.task}
                        completed={todo.completed}
                        key={idx}
                        key1={idx}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        upTodo={upTodo}
                        downTodo={downTodo}
                    />
                })
            }
        </ul>
    )
}

export default TodoList
