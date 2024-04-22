import React, { useState, useEffect } from "react";
import { listDepartments, deleteDepartment } from "../service/DepartmentService";
import { useNavigate } from "react-router-dom";

const ListDepartment = () => {
    const [departments, setDepartments] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = () => {
        listDepartments().then((response) => {
            setDepartments(response.data);
        }).catch(error => {
            console.error("Error fetching departments:", error);
        });
    };

    const addNewDepartment = () => {
        navigator('/add-department');
    };

    const updateDepartment = (id) => {
        navigator(`/edit-department/${id}`);
    };

    const deleteDepartmentById = (id) => {
        deleteDepartment(id).then(() => {
            fetchDepartments();  // Refresh the list after deleting a department
        }).catch(error => {
            console.error("Error deleting the department:", error);
        });
    };

    return (
        <div className="container">
            <h2 className="text-center">List of Departments</h2>
            <button type="button" className="btn btn-info mb-2" onClick={addNewDepartment}>Add Department</button>

            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Department ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {departments.map((department) => (
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.name}</td>
                            <td>{department.description}</td>
                            <td>
                                <button className="btn btn-info" onClick={() => updateDepartment(department.id)}>Update</button>
                                <button className="btn btn-danger" onClick={() => deleteDepartmentById(department.id)} style={{marginLeft: '10px'}}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListDepartment;
