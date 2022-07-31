import React from "react";
import { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useNavigate } from 'react-router-dom';


export function Login() {
    const [user, setUser] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate();
    const [error, setError] = useState();
    const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
    const handleSubmit = async e => {
        e.preventDefault();
        setError('');
        try {
            await login(user.email, user.password);
            navigate('/Home');
        } catch (error) {
            setError(error.message);
        }
    };
}
