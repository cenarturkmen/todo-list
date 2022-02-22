import {useState} from 'react';
import './Todo.css';

const Todo = (props) => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([
    {name: 'Learn React', status: false},
    {name: 'Learn Redux', status: false},
    {name: 'Learn React Native', status: false},
  ]);

  const detectChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = (e) => {
    if (input) {
      setTodos([...todos, {name: input, status: false}]);
      setInput('');
    }
  };

  const changeStatus = (e) => {
    const newTodos = todos;
    newTodos[e.target.name].status = !newTodos[e.target.name].status;
    setTodos(newTodos);
  };

  const handleRemove = (e) => {
    const filteredTodos = todos.filter((todo) => todo.status === false);
    setTodos(filteredTodos);
  };

  return (
    <div className="container">
      <h1>Todo-List</h1>
      <div>
        <input
          type="text"
          className="input"
          placeholder="Todo"
          value={input}
          onChange={detectChange}
        />
        <button className="add" onClick={addTodo}>
          Add
        </button>
        <button className="remove" onClick={handleRemove}>
          Remove Dones
        </button>
      </div>
      <div>
        {todos.map((todo, index) => {
          return (
            <div className="todos" key={index}>
              <span className="todosName">{todo.name}</span>
              <input
                className="checkbox"
                type="checkbox"
                name={index}
                onClick={changeStatus}
              ></input>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
