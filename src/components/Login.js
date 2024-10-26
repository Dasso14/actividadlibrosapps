import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ onLogin }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user && password) {
      onLogin();
      navigate('/');
    } else {
      alert('Por favor ingresa el usuario y la contraseña');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input 
        type="text" 
        placeholder="Usuario" 
        value={user} 
        onChange={(e) => setUser(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
    </div>
  );
};

export default Login;
