import React, { useState, useEffect } from 'react';
import { createDepartment, getDepartment, updateDepartment } from '../service/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const Department = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const { id } = useParams();
    const navigator = useNavigate();

    const [errors, setErrors] = useState({
        name: '',
        description: ''
    });

    useEffect(() => {
        if (id) {
            getDepartment(id).then((response) => {
                setName(response.data.name);
                setDescription(response.data.description);
            }).catch(error => {
                console.error('Error fetching department details:', error);
            });
        }
    }, [id]);

    const validateForm = () => {
        let isValid = true;
        const newErrors = { name: '', description: '' };

        if (!name.trim()) {
            newErrors.name = 'Department name is required.';
            isValid = false;
        }

        if (!description.trim()) {
            newErrors.description = 'Description is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const saveOrUpdateDepartment = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const department = { name, description };

            if (id) {
                updateDepartment(id, department).then(() => {
                    navigator('/departments');
                }).catch(error => {
                    console.error('Error updating department:', error);
                });
            } else {
                createDepartment(department).then(() => {
                    navigator('/departments');
                }).catch(error => {
                    console.error('Error creating department:', error);
                });
            }
        }
    };

    const pageTitle = () => {
        return <h2 className="text-center">{id ? 'Update Department' : 'Add Department'}</h2>;
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {pageTitle()}
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateDepartment}>
                            <div className="form-group mb-2">
                                <label className="form-label">Name:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Department Name'
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Description:</label>
                                <input
                                    placeholder='Enter Department Description'
                                    className={`form-control ${errors.description ? 'is-invalid' : ''}`}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && (
                                    <div className="invalid-feedback">
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Department;
