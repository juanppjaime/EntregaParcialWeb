import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/login', {
        login: username,
        password: password,
      });
      
      if (response.status === 200) {
        onLogin(username, password); 
        navigate('/robots');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        setError(true); 
      } else {
        console.error('Error en la solicitud:', error);
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '20px' }}>Adopta un Robot con Robot Lovers!</h1>
      
      <div style={{ padding: '20px', marginBottom: '20px' }}>
        <img 
          src="/bannerRobots.png" 
          alt="robots" 
          style={{ width: '100%', maxWidth: '1400px', height: 'auto' }} 
        />
      </div>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '22px', marginBottom: '10px' }}>Inicio de sesión</h2>
        
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ 
              width: '100%', 
              padding: '10px', 
              fontSize: '16px', 
              border: '1px solid #ccc', 
              borderRadius: '4px' 
            }}
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <button 
            type="submit" 
            style={{ 
              width: '48%', 
              padding: '10px', 
              fontSize: '16px', 
              backgroundColor: '#007bff', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              marginRight: '4%', 
              cursor: 'pointer'
            }}
          >
            Ingresar
          </button>
          <button 
            type="button" 
            onClick={() => { setUsername(''); setPassword(''); setError(false); }} 
            style={{ 
              width: '48%', 
              padding: '10px', 
              fontSize: '16px', 
              backgroundColor: '#dc3545', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px', 
              cursor: 'pointer'
            }}
          >
            Cancelar
          </button>
        </div>
        
        {error && <p style={{ color: 'red', marginTop: '10px' }}>Error de autenticación. Revise sus credenciales</p>}
      </form>
      
      <footer style={{ marginTop: '20px', fontSize: '14px', color: '#777' }}>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

export default LoginForm;
