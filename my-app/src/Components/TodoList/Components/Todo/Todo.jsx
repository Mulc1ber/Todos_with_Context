import React, { useContext } from 'react';
import { useState, useRef, useEffect } from 'react';
import { useRequestUpdateTodo } from '../../../../Hooks';
import { Input, Button } from '../../../../Components/';
import { TodoContext } from '../../../../context';
import styles from './Todo.module.css';

export const Todo = ({ id, title, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [titleState, setTitleState] = useState(title);

    const { isDeleting, requestDeteleTodo } = useContext(TodoContext);

    const { requestUpdateTodo } = useRequestUpdateTodo();

    const refInput = useRef();

    const handleInputBlur = () => {
        requestUpdateTodo(id, titleState);
        setIsEditing(false);
    };

    useEffect(() => {
        if (isEditing || isEditing === 0) {
            refInput.current?.focus();
        }
    }, [isEditing]);

    return (
        <li key={id} className={styles.items}>
            {isEditing === index ? (
                <>
                    <Input
                        type="text"
                        value={titleState}
                        onChange={({ target }) => setTitleState(target.value)}
                        onBlur={handleInputBlur}
                        refInput={refInput}
                        className={styles.inputEdit}
                    />
                </>
            ) : (
                <>
                    <span>{titleState}</span>
                    <div className={styles.wrapButtons}>
                        <Button onClick={() => requestDeteleTodo(id)} disabled={isDeleting}>
                            Удалить
                        </Button>
                        <Button onClick={() => setIsEditing(index)}>Изменить</Button>
                    </div>
                </>
            )}
        </li>
    );
};
