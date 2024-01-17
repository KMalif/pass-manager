import React from 'react'
import style from '../style/style.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

function Add() {
    const navigation = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        provider: '',
        category: '',
    });
    const [success, setSuccess] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password || !formData.provider) {
            window.alert('All fields are required');
            return;
        }

        if (formData.password.length < 6) {
            window.alert('Password must be at least 6 characters');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/password/', formData);
            navigation("/")
            setSuccess('Data has been successfully posted!');
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return (
        <div className={style.container}>
            <Navbar />
            <div className={style.formContainer}>
                <div className={style.formCard}>
                    <h2>Add Account</h2>
                    <form id="add-account-form" onSubmit={handleSubmit}>
                        <label for="email">Email:</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required />
                        <label for="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required />
                        <label for="provider">Provider:</label>
                        <input
                            type="text"
                            id="provider"
                            name="provider"
                            value={formData.provider}
                            onChange={handleInputChange}
                            required />
                        <label for="category">Category:</label>
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}>
                            <option value="work">Work</option>
                            <option value="personal">Personal</option>
                            <option value="family">Family</option>
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                    {success && (
                        <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                            {success}
                        </Alert>
                    )}
                </div>

            </div>
        </div>

    )
}

export default Add