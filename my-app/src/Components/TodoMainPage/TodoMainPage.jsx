import React from 'react';
import { AddTodo } from '../AddTodo/AddTodo';
import { Search } from '../Search/Search';
import { Sort } from '../Sort/Sort';
import { TodoList } from '../TodoList/TodoList';
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
