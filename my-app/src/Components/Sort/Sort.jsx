import React, { useContext, useState } from 'react';
import { Button } from '../Button/Button';
import { TodoContext } from '../../context';
import styles from './Sort.module.css';

export const Sort = () => {
    const [hasSort, setHasSort] = useState(false);

    const { setListTodos, requestSortTodos } = useContext(TodoContext);

    const handleSort = () => {
        requestSortTodos(hasSort, setListTodos);
        setHasSort(!hasSort);
    };

    return (
        <div>
            <Button className={hasSort ? styles.active : ''} onClick={handleSort}>
                Сортировать
            </Button>
        </div>
    );
};
