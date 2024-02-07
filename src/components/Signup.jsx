import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { app } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignupWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log('Utilisateur créé avec succès:', user);
      navigate('/PagesArtist');
    } catch (error) {
      console.error('Erreur lors de la création de l\'utilisateur avec Google:', error.message);
    }
  };

  return (
    <div>
      <h2>Inscription avec Google</h2>
      <button onClick={handleSignupWithGoogle}>S'inscrire avec Google</button>
    </div>
  );
}

export default Signup;
