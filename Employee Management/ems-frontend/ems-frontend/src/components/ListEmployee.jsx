import React, { useState, useEffect } from "react";
import { listEmployees, deleteEmployee } from "../service/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        });
    };

    const addNewEmployee = () => {
        navigator('/add-employee')  
    }

    const updateEmployee = (id) => {
        navigator(`/edit-employee/${id}`)
    }

    const deleteEmployeeById = (id) => {
        deleteEmployee(id).then(() => {
            fetchEmployees();
        }).catch(error => {
            console.error("Error deleting the employee:", error);
        });
    }

    return (
        <div className="container">
            <h2 className="text-center">List of Employees</h2>
            <button type="button" className="btn btn-info mb-2" onClick={addNewEmployee}>Add Employee</button>

            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department_id}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => deleteEmployeeById(employee.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListEmployee;
