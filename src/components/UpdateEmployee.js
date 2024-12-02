import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../api';

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        department: '',
    });

    const fetchEmployee = async (id) => {
        try {
            const response = await API.get(`/employees/${id}`);
            setFormData(response.data);
        } catch (error) {
            console.error('Error fetching employee data:', error);
            alert('Error fetching employee data. Please check the API endpoint.');
        }
    };
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        await API.put(`/employees/${id}`, formData);
        alert('Employee updated successfully!');
        navigate('/employees');
    };

    return (
        <div className="container">
            <h1>Update Employee</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

const styles = {
    updateContainer: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};


export default UpdateEmployee;
