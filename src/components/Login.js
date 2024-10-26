// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user && password) {
      // Aquí podrías agregar una lógica de autenticación real
      console.log("Usuario:", user, "Contraseña:", password);
      
      // Redirigir al usuario a la lista de libros
      navigate('/books');
    } else {
      alert('Por favor ingresa el usuario y la contraseña');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="User" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
