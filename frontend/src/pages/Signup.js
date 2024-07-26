import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';


function Signup() {
    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: '',
        dob: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const { name, dob, email, password } = signupInfo;
        if (!name || !dob || !email || !password) {
            return handleError('Name, date of birth, email, and password are required.');
        }
        try {
            const url = `${process.env.REACT_APP_API_URL}/auth/signup`;
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(signupInfo)
            });
            const result = await response.json();
            const { success, message, error } = result;
            if (success) {
                handleSuccess(message);
                setTimeout(() => {
                    navigate('/login');
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
                    <h1 className='text-center mb-4'>Signup</h1>
                    <form onSubmit={handleSignup} className='bg-light p-4 rounded shadow'>
                        <div className='form-group mb-3'>
                            <label htmlFor='name'>Name</label>
                            <input
                                onChange={handleChange}
                                type='text'
                                name='name'
                                className='form-control'
                                autoFocus
                                placeholder='Enter your name...'
                                value={signupInfo.name}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='dob'>Date of Birth</label>
                            <input
                                onChange={handleChange}
                                type='date'
                                name='dob'
                                className='form-control'
                                placeholder='Enter your date of birth...'
                                value={signupInfo.dob}
                            />
                        </div>
                        <div className='form-group mb-3'>
                            <label htmlFor='email'>Email</label>
                            <input
                                onChange={handleChange}
                                type='email'
                                name='email'
                                className='form-control'
                                placeholder='Enter your email...'
                                value={signupInfo.email}
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
                                value={signupInfo.password}
                            />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'>Signup</button>
                        <div className='text-center mt-3'>
                            <span>Already have an account? <Link to="/login">Login</Link></span>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default Signup;
