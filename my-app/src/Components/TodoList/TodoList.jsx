import React, { useContext } from 'react';
import { Todo } from './Components';
import { TodoContext } from '../../context';
import styles from './TodoList.module.css';

export const TodoList = () => {
    const { listTodos, isLoading } = useContext(TodoContext);
    return (
        <div className={styles.listTodos}>
            {isLoading ? (
                <div className={styles.loader}></div>
            ) : (
                listTodos.map(({ id, title }, index) => (
                    <Todo key={id} id={id} title={title} index={index} />
                ))
            )}
        </div>
    );
};
