import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getTodo, createTodo, updateTodo } from '../service/TodoService';

const TodoForm = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);
    const [errors, setErrors] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        if (id) {
            getTodo(id).then(response => {
                const { title, description, completed } = response.data;
                setTitle(title);
                setDescription(description);
                setCompleted(completed);
            }).catch(error => {
                console.error('Failed to fetch todo:', error);
            });
        }
    }, [id]);

    const validateForm = () => {
        let isValid = true;
        let newErrors = { title: '', description: '' };

        if (!title.trim()) {
            newErrors.title = 'Title is required.';
            isValid = false;
        }
        if (!description.trim()) {
            newErrors.description = 'Description is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const saveOrUpdateTodo = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const todo = { title, description, completed };
            const action = id ? updateTodo(id, todo) : createTodo(todo);
            action.then(() => {
                navigate('/');
            }).catch(error => {
                console.error('Error saving todo:', error);
            });
        }
    };  

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">{id ? 'Update' : 'Add'} Todo</h2>
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateTodo}>
                            <div className="form-group mb-2">
                                <label className="form-label">Title:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Todo Title"
                                    className={`form-control ${errors.title && 'is-invalid'}`}
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                                {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Description:</label>
                                <textarea
                                    placeholder="Enter Todo Description"
                                    className={`form-control ${errors.description && 'is-invalid'}`}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                                {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Completed:</label>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    checked={completed}
                                    onChange={e => setCompleted(e.target.checked)}
                                />
                            </div>

                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoForm;
