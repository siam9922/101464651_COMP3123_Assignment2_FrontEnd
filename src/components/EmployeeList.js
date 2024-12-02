import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([
        { id: 1, name: 'John Doe', position: 'Developer', department: 'IT' },
        { id: 2, name: 'Jane Smith', position: 'Designer', department: 'Marketing' },
        { id: 3, name: 'Siam Hasan', position: 'Designer', department: 'Marketing' },
    ]);
    
    const navigate = useNavigate();

    const deleteEmployee = (id) => {
        setEmployees(employees.filter((employee) => employee.id !== id));
    };

    return (
        <div className="container">
            <h1>Employee List</h1>
            <button onClick={() => navigate('/add-employee')}>Add Employee</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.position}</td>
                            <td>{employee.department}</td>
                            <td>
                                <button onClick={() => navigate(`/view-employee/${employee.id}`)}>View</button>
                                <button onClick={() => navigate(`/update-employee/${employee.id}`)}>Update</button>
                                <button className="delete" onClick={() => deleteEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


const styles = {
    employeeContainer: {
        maxWidth: '900px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    table: {
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '20px',
    },
    th: {
        padding: '10px',
        textAlign: 'center',
        backgroundColor: '#007bff',
        color: 'white',
        fontWeight: 'bold',
    },
    td: {
        padding: '10px',
        textAlign: 'center',
        border: '1px solid #ddd',
    },
    button: {
        padding: '8px 12px',
        margin: '5px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    buttonDelete: {
        backgroundColor: '#dc3545',
    },
    buttonDeleteHover: {
        backgroundColor: '#a71d2a',
    },
};


export default EmployeeList;
