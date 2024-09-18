import React, { useContext } from 'react';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { TodoContext } from '../../context';
import styles from './AddTodo.module.css';

export const AddTodo = () => {
    const { inputTodo, setInputTodo, isCreating, requestAddTodo } = useContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        requestAddTodo(inputTodo, setInputTodo);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.wrapPanel}>
                <Input
                    type={'text'}
                    placeholder={'Новая задача'}
                    value={inputTodo}
                    onChange={({ target }) => setInputTodo(target.value)}
                />
                <Button type={'submit'} disabled={isCreating}>
                    Добавить задачу
                </Button>
            </form>
        </div>
    );
};
