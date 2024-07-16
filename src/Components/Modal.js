import React, { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const Modal = ({ closeModal, addTodo, todos, removeTodo, startEdit, editIndex, editText, setEditText, editTodo, completeTodo }) => {
  const [task, setTask] = useState('');

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      addTodo(task.trim());
      setTask('');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          startEdit={startEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      </div>
    </div>
  );
}

export default Modal;
