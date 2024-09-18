import React from 'react';
import { AddTodo, Search, Sort, TodoList } from '../../Components/';
import styles from './TodoMainPage.module.css';

export const TodoMainPage = () => {
    return (
        <div className={styles.todos}>
            <AddTodo />
            <Search />
            <Sort />
            <TodoList />
        </div>
    );
};
