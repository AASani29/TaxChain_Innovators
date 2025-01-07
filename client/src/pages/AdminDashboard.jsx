    import React, { useEffect, useState } from 'react';
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import { useSelector } from 'react-redux';
import Header from '../components/Header';

    const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const { currentUser } = useSelector((state) => state.user); // Get currentUser from Redux
    const navigate = useNavigate();

    // Redirect non-admin users to sign-in page
    useEffect(() => {
        if (!currentUser || currentUser.role !== 'admin') {
        alert('Access denied! Admins only.');
        navigate('/signin');
        }
    }, [currentUser, navigate]);

    // Fetch users from the backend
    useEffect(() => {
        const fetchUsers = async () => {
        try {
            const res = await axios.get('/api/users/admin/users', {
            withCredentials: true,
            });
            setUsers(res.data);
        } catch (err) {
            console.error(err);
            alert('Failed to fetch users.');
        }
        };

        fetchUsers();
    }, []);

    // Handle user deletion
    const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;

    try {
        const res = await axios.delete(`/api/users/delete/${id}`, {
        withCredentials: true, // Ensure cookies are sent
        });
        console.log('User deleted:', res.data); // Debug log
        setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
        console.error('Error deleting user:', err); // Debug log
        alert('Failed to delete user.');
    }
    };


    return (
         <div className="bg-cream min-h-screen px-4" style={{ backgroundColor: "#f8f1d1" }}>
                 <Header/>
        <h1>Admin Dashboard</h1>
        <table border="1">
            <thead>
            <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => (
                <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                    <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
    };

    export default AdminDashboard;
