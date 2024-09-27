import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function LoginForm({ onLogin, error }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const loginSuccess = onLogin(username, password);
    
    if (loginSuccess) {
      navigate('/robots'); 
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Adopta un Robot con Robot Lovers!</h1>
      <div style={{ background: '#FF6F61', padding: '20px' }}>
        <img src="https://www.shutterstock.com/image-vector/set-cute-vintage-robots-banner-260nw-746786869.jpg" alt="robots" style={{ width: '2000px', height:'400px' }} />
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Inicio de sesión</h2>
        <div>
          <input
            type="text"
            placeholder="Ingresa el nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Ingresar</button>
          <button type="button" onClick={() => { setUsername(''); setPassword(''); }}>Cancelar</button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
      <footer>
        <p>Contact us: +57 3102105253 - info@robot-lovers.com - @robot-lovers</p>
      </footer>
    </div>
  );
}

export default LoginForm;
