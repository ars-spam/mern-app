import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../utils';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, []);

    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Logged out');
        setTimeout(() => {
            navigate('/login');
        }, 1000);
    };

    const fetchProducts = async () => {
        try {
            const url = `${process.env.REACT_APP_API_URL}/products`;
            const headers = {
                headers: {
                    'Authorization': localStorage.getItem('token'),
                },
            };
            const response = await fetch(url, headers);
            const result = await response.json();
            console.log(result);
            setProducts(result);
        } catch (err) {
            handleError(err);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className="main-container home" style={{display: 'flex', flexDirection: 'column', alignItems:'center' }}>
            <div className="header" style={{ display: 'flex', flexDirection: 'column', margin: 40, alignItems: 'center'}}>
                <h1>Welcome {loggedInUser}!</h1>
                <button className="btn btn-danger w-30" onClick={handleLogout}>Logout</button>
            </div>
            <div className="card-no-border">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover earning-box" style={{ margin: '0 auto' }}>
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products && products.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{ width: '50px' }}><span className="round"><img src={item.image} alt={item.name} width="50" /></span></td>
                                            <td><h6>{item.name}</h6></td>
                                            <td>${item.price}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Home;
