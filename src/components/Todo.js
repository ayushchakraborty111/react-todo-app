import React from 'react'
import styles from './Todo.module.css';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillArrowUpCircleFill,BsArrowDownCircleFill } from "react-icons/bs";

const Todo = (props) => {
    //  const index = props.key1;
    const deleteTodoHandler = () => {
        props.deleteTodo(props.id)
    }

    const upHandler = () =>{
        props.upTodo(props.key1)
    }
    const downHandler = () =>{
        props.downTodo(props.key1)
    }


    return (
        <li style={{textDecoration: props.completed ? 'line-through':'none'}} className={styles['items']}>
            <span>
                <input onChange={()=>props.toggleTodo(props.id)} type="checkbox" defaultChecked={props.completed} />
            </span>
            <span>{props.task}</span>
            <span onClick={deleteTodoHandler} className={styles['todo-icon']}><FaTrashAlt/></span>
            <span onClick={upHandler} className={styles['todo-icon']}><BsFillArrowUpCircleFill/></span>
            <span onClick={downHandler} className={styles['todo-icon']}><BsArrowDownCircleFill/></span>
        </li>
    )
}

export default Todo
