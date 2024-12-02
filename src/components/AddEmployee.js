import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddEmployee = () => {
    const [formData, setFormData] = useState({ name: '', position: '', department: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Employee added successfully!');
        navigate('/employees');
    };

    return (
        <div className="container">
            <h1>Add Employee</h1>
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
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '500px',
        margin: '50px auto',
        padding: '30px',
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    header: {
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#007bff',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
    },
    input: {
        width: '100%',
        padding: '15px',
        fontSize: '1rem',
        borderRadius: '8px',
        border: '1px solid #ddd',
        backgroundColor: '#f9f9f9',
        transition: 'all 0.3s ease',
    },
    inputFocus: {
        borderColor: '#007bff',
        backgroundColor: '#ffffff',
        boxShadow: '0 0 5px rgba(0, 123, 255, 0.5)',
    },
    button: {
        width: '100%',
        padding: '15px',
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    buttonHover: {
        backgroundColor: '#0056b3',
    },
};

export default AddEmployee;
