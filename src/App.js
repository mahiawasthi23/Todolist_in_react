import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';
import Sidebar from './Components/Sidebar';
import Footer from './Components/Footer';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');
  const [currentCategory, setCurrentCategory] = useState('All');
  const [completedTodos, setCompletedTodos] = useState([]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    if (index < todos.length) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos.splice(index - todos.length, 1);
      setCompletedTodos(newCompletedTodos);
    }
  };

 

  const completeTodo = (index) => {
    const newTodos = [...todos];
    const completedTodo = newTodos.splice(index, 1);
    completedTodo.completed = true;
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, completedTodo]);
  };

  const editTodo = (index, newText) => {
    const newTodos = [...todos];
    newTodos[index].text = newText;
    setTodos(newTodos);
    setEditIndex(null);
    setEditText('');
  };

  const startEdit = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const filterTodos = () => {
    switch (currentCategory) {
      case 'All':
        return [...todos, ...completedTodos];
        return todos;
      case 'In Progress':
        return todos.filter(todo => !todo.completed);
      case 'Completed':
        return completedTodos;
        return todos.filter(todo => todo.isCompleted);
      default:
        return [...todos, ...completedTodos];
        return todos;
    }
  };

  return (
    <div className="app">
      <Navbar openModal={openModal} />
      <Sidebar setCurrentCategory={setCurrentCategory} />
      {showModal && (
        <Modal
          closeModal={closeModal}
          addTodo={addTodo}
          todos={filterTodos()}
          removeTodo={removeTodo}
          startEdit={startEdit}
          editIndex={editIndex}
          editText={editText}
          setEditText={setEditText}
          editTodo={editTodo}
          completeTodo={completeTodo}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
