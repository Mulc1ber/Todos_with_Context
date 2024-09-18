import { useState, useEffect } from 'react';
import { TodoMainPage } from './Components/';
import { TodoContext } from './context';
import {
    useRequestGetTodos,
    useRequestAddTodo,
    useRequestDeleteTodo,
    useRequestSearchTodos,
    useRequestSortTodos,
} from './Hooks';
import styles from './App.module.css';

export const App = () => {
    const [listTodos, setListTodos] = useState([]);
    const [refreshTodosFlag, setRefreshTodosFlag] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [inputTodo, setInputTodo] = useState('');

    const [searchValue, setSearchValue] = useState('');

    const refreshTodos = () => setRefreshTodosFlag(!refreshTodosFlag);

    const { requestGetTodos } = useRequestGetTodos();
    const { requestSearchTodos } = useRequestSearchTodos(refreshTodos);
    const { requestSortTodos } = useRequestSortTodos(refreshTodos);
    const { isCreating, requestAddTodo } = useRequestAddTodo(refreshTodos);
    const { isDeleting, requestDeteleTodo } = useRequestDeleteTodo(refreshTodos);

    const todoData = {
        listTodos,
        setListTodos,
        isLoading,
        setIsLoading,
        inputTodo,
        setInputTodo,
        searchValue,
        setSearchValue,
        refreshTodos,
        requestSearchTodos,
        requestSortTodos,
        isCreating,
        requestAddTodo,
        isDeleting,
        requestDeteleTodo,
    };

    useEffect(() => {
        if (searchValue.length > 0) {
            requestSearchTodos(searchValue, setListTodos);
        } else {
            requestGetTodos(setListTodos, setIsLoading);
        }
    }, [refreshTodosFlag, searchValue]);

    return (
        <TodoContext.Provider value={todoData}>
            <div className={styles.app}>
                <h1 className={styles.header}>Todos JSON Server</h1>
                <TodoMainPage />
            </div>
        </TodoContext.Provider>
    );
};
