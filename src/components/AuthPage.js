import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [formData, setFormData] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignup) {
            alert('Signup successful!');
            setIsSignup(false);
        } else {
            localStorage.setItem('token', 'mockToken');
            navigate('/employees');
        }
    };

    return (
        <div className="container">
            <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button type="submit">{isSignup ? 'Sign Up' : 'Login'}</button>
            </form>
            <p>
                {isSignup ? 'Already have an account? ' : "Don't have an account? "}
                <span style={{ color: 'blue', cursor: 'pointer' }} onClick={() => setIsSignup(!isSignup)}>
                    {isSignup ? 'Login' : 'Sign Up'}
                </span>
            </p>
        </div>
    );
};

const styles = {
    authContainer: {
        maxWidth: '400px',
        margin: '50px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    authLink: {
        color: '#007bff',
        cursor: 'pointer',
        fontWeight: 'bold',
        textDecoration: 'underline',
    },
};

export default AuthPage;



