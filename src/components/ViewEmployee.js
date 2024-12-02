import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const ViewEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        const fetchEmployee = async () => {
            const { data } = await API.get(`/employees/${id}`);
            setEmployee(data);
        };
        fetchEmployee();
    }, [id]);

    return (
        <div className="container">
            <h1>View Employee</h1>
            {employee ? (
                <div>
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Position:</strong> {employee.position}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <button onClick={() => navigate('/employees')}>Back</button>
                </div>
            ) : (
                <p>Loading employee details...</p>
            )}
        </div>
    );
};
const styles = {
    viewContainer: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
    },
    paragraph: {
        fontSize: '16px',
        margin: '10px 0',
    },
    button: {
        padding: '10px 15px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default ViewEmployee;
