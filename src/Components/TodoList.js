
import React from 'react';

function TodoList({ todos, removeTodo, startEdit, editIndex, editText, setEditText, editTodo, completeTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index} className="todo">
          {editIndex === index ? (
            <input 
              type="text" 
              value={editText} 
              onChange={(e) => setEditText(e.target.value)} 
            />
          ) : (
            <span style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
              {todo.text}
            </span>
          )}
          <div>
            {editIndex === index ? (
              <button onClick={() => editTodo(index, editText)}>Save</button>
            ) : (
              <>
                <button onClick={() => startEdit(index, todo.text)}>Edit</button>
                <button onClick={() => removeTodo(index)}>Remove</button>
                {!todo.completed && (
                  <button onClick={() => completeTodo(index)}>Complete</button>
                )}
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;