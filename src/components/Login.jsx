import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleLoginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Utilisateur connecté avec succès:', user);
      navigate('/home');
    } catch (error) {
      console.error('Erreur lors de la connexion de l\'utilisateur:', error.message);
      
    }
  };

  return (
    <div>
      <h2>Connexion avec Google</h2>
      <button onClick={handleLoginWithGoogle}>Se connecter avec Google</button>
    </div>
  );
}

export default Login;
