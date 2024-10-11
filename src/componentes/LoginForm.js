import React, { useState } from 'react';
import { authService } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/styles.css'


function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    authService.login(email, password)
      .then(response => {
        setLoading(false);
        if (response.success) {
          navigate('/dash'); // Navegación en caso de login exitoso
        } else {
          setErrorMessage(response.message);
        }
      })
      .catch(() => {
        setLoading(false);
        setErrorMessage('Error en el inicio de sesión');
      });
  };

  return (
    


    <form className='formulario' onSubmit={handleSubmit}>
      <h1>Iniciar Sesión</h1>
      <div className='info' >
        <label className='labelemail' >Email:</label>
        <input
          className='inputs'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='info' >
        <label  className='labelpassword' >Contraseña:</label>
        <input
          className='inputs'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type='submit' disabled={loading}>
        {loading ? 'Cargando...' : 'Ingresar'}
      </button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
}

export default LoginForm;

