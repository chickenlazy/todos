import React, { useState, useEffect } from 'react';
import { listTodos, deleteTodo, completeTodo, incompleteTodo } from '../service/TodoService';
import { useNavigate } from 'react-router-dom';
import { getUserRole } from '../service/AuthService';  // Import getUserRole

const ListTodo = () => {
    const [todos, setTodos] = useState([]);
    const navigate = useNavigate();
    const userRole = getUserRole();  // Lấy vai trò người dùng

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = () => {
        listTodos().then((response) => {
            setTodos(response.data);
        }).catch(error => {
            console.error('Error fetching todos:', error);
        });
    };

    const addNewTodo = () => {
        navigate('/add-todo');
    };

    const updateTodo = (id) => {
        navigate(`/edit-todo/${id}`);
    };

    const deleteTodoById = (id) => {
        deleteTodo(id).then(() => {
            fetchTodos();  // Refresh the list after deletion
        }).catch(error => {
            console.error("Error deleting the todo:", error);
        });
    };

    const toggleTodoStatus = (todo) => {
        const action = todo.completed ? incompleteTodo : completeTodo;
        action(todo.id).then(() => {
            fetchTodos();  // Refresh the list to show the updated status
        }).catch(error => {
            console.error("Error updating todo status:", error);
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Todos</h2>
            {userRole === 'ROLE_ADMIN' && (
                <button type="button" className="btn btn-primary mb-2" onClick={addNewTodo}>Add Todo</button>
            )}

            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((todo) => (
                        <tr key={todo.id}>
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td>{todo.completed ? 'Completed' : 'Pending'}</td>
                            <td>
                                {userRole === 'ROLE_ADMIN' && (
                                    <>
                                        <button className="btn btn-secondary" onClick={() => updateTodo(todo.id)}>Update</button>
                                        <button className="btn btn-danger" onClick={() => deleteTodoById(todo.id)} style={{marginLeft: '10px'}}>Delete</button>
                                    </>
                                )}
                                <button className="btn btn-info" onClick={() => toggleTodoStatus(todo)} style={{marginLeft: '10px'}}>
                                    {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListTodo;
