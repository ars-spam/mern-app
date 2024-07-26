import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function Login() {
    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = loginInfo;
        if (!email || !password) {
            return handleError('Email and password are required.');
        }
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/login`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(loginInfo)
            });
            const result = await response.json();
            const { success, message, jwtToken, name, error } = result;
            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', name);
                setTimeout(() => {
                    navigate('/home');
                }, 1000);
            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else {
                handleError(message);
            }
            console.log(result);
        } catch (err) {
            handleError(err);
        }
    };

    return (
        <div className='container auth-container'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <h1 className='text-center mb-4'>Login</h1>
                    <form onSubmit={handleLogin} className='bg-light p-4 rounded shadow'>
                        <div className='form-group mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Enter your email...'
                                value={loginInfo.email}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='password'>Password</label>
                            <input
                                onChange={handleChange}
                                type='password'
                                name='password'
                                className='form-control'
                                placeholder='Enter your password...'
                                value={loginInfo.password}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>Login</button>
                        <div className='text-center mt-3'>
                            <span>Doesn't have an account? <Link to="/signup">Signup</Link></span>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Login;
