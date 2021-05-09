import React from react;

export const todoList = () => {
    const [todoList, setTodoList] = useState([]);
    const [todoInput, setTodoInput] = useState('');

    const addTodo = () => {
        if (todoInput) {
            setTodoList([
                ...todoList,
                todoInput
            ]);
            setTodoInput('');
        }
    }

    const clearTodos = () => {
        setTodoList([]);
    }

    const removeTodo = (index) => {
        let todos = [...todoList];
        todos.splice(index, 1);
        setTodoList(todos);
    }

    return (
        <div>
            <div>
                <input type="text" value={todoInput} onChange={setTodoInput} />
                <button onClick={addTodo}>Add</button>
                <button onClick={clearTodos}>Clear</button>
            </div>
            {
                todoList.map((todo, index) => {
                    return (
                        <div className='todo-container'>
                            <p className='todo-text'>{todo}</p>
                            <button className='todo-button' onClick={() => removeTodo(index)}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
}