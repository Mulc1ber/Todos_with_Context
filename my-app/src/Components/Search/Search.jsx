import React, { useContext } from 'react';
import { Input } from '../Input/Input';
import { TodoContext } from '../../context';
import styles from './Search.module.css';

export const Search = () => {
    const { searchValue, setSearchValue, setListTodos, requestSearchTodos } =
        useContext(TodoContext);

    const handleSearchValue = ({ target }) => {
        setSearchValue(target.value);
        requestSearchTodos(target.value, setListTodos);
    };

    return (
        <div className={styles.wrapPanel}>
            <Input
                type={'search'}
                placeholder={'Поиск'}
                value={searchValue}
                onChange={handleSearchValue}
            />
        </div>
    );
};
