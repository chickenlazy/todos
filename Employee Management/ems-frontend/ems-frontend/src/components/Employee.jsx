import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createEmployee, getEmployee, updateEmployee } from '../service/EmployeeService';
import { listDepartments } from '../service/DepartmentService';

const Employee = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department_id, setdepartment_id] = useState('');
    const [departments, setDepartments] = useState([]);
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        department_id: '',
    });

    useEffect(() => {
        listDepartments().then(response => {
            setDepartments(response.data);
        }).catch(error => {
            console.error('Failed to fetch departments:', error);
        });
    }, []);

    useEffect(() => {
        if (id) {
            getEmployee(id).then(response => {
                const { firstName, lastName, email, department_id } = response.data;
                setFirstName(firstName);
                setLastName(lastName);
                setEmail(email);
                setdepartment_id(department_id);
            }).catch(error => {
                console.error('Failed to fetch employee:', error);
            });
        }
    }, [id]);

    const validateForm = () => {
        let isValid = true;
        let newErrors = { firstName: '', lastName: '', email: '', department_id: '' };

        if (!firstName.trim()) {
            newErrors.firstName = 'First Name is required.';
            isValid = false;
        }
        if (!lastName.trim()) {
            newErrors.lastName = 'Last Name is required.';
            isValid = false;
        }
        if (!email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        }
        if (!department_id) {
            newErrors.department_id = 'Department is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const employee = { firstName, lastName, email, department_id };
            const action = id ? updateEmployee(id, employee) : createEmployee(employee); 
            action.then(() => {
                navigate('/employees');
            }).catch(error => {
                console.error('Error saving employee:', error);
            });
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    <h2 className="text-center">{id ? 'Update' : 'Add'} Employee</h2>
                    <div className="card-body">
                        <form onSubmit={saveOrUpdateEmployee}>
                            <div className="form-group mb-2">
                                <label className="form-label">First Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee First Name"
                                    className={`form-control ${errors.firstName && 'is-invalid'}`}
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                                {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Last Name:</label>
                                <input
                                    type="text"
                                    placeholder="Enter Employee Last Name"
                                    className={`form-control ${errors.lastName && 'is-invalid'}`}
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                                {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Email:</label>
                                <input
                                    type="email"
                                    placeholder="Enter Employee Email"
                                    className={`form-control ${errors.email && 'is-invalid'}`}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className="form-label">Select Department:</label>
                                <select
                                    className={`form-control ${errors.department_id && 'is-invalid'}`}
                                    value={department_id}
                                    onChange={e => setdepartment_id(e.target.value)}
                                >
                                    <option value="">Select Department</option>
                                    {departments.map(department => (
                                        <option key={department.id} value={department.id}>{department.name}</option>
                                    ))}
                                </select>
                                {errors.department_id && <div className="invalid-feedback">{errors.department_id}</div>}
                            </div>

                            <button type="submit" className="btn btn-success">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Employee;
