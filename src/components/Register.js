// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && password) {
      alert('Registro exitoso. Por favor inicia sesión.');
      navigate('/login'); 
    } else {
      alert('Por favor completa todos los campos.');
    }
  };

  return (
    <div className="register-background"> 
      <div className="register-container">
        <h2>Registro</h2>
        <input 
          type="text" 
          placeholder="Usuario" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Contraseña" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleRegister}>Registrar</button>
        <button onClick={() => navigate('/login')}>Volver al Login</button>
      </div>
    </div>
  );
};

export default Register;
