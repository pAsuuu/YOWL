import React, { useState, useEffect } from 'react';
import { getDatabase, ref, push, set } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function PostPopup({ onClose }) {
  const [content, setContent] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!user) {
      console.log('Aucun utilisateur connecté');
      return; // Early return if no user is logged in
    }

    const db = getDatabase();
    const postsRef = ref(db, 'posts');
    const newPostRef = push(postsRef);

    set(newPostRef, {
      userId: user.uid,
      content: content,
      createdAt: new Date().toISOString(),
    })
    .then(() => {
      console.log('Post ajouté avec succès');
      onClose(); // Close the popup after posting
    })
    .catch(error => {
      console.error('Erreur lors de l\'ajout du post:', error);
    });
  };

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-600 shadow-md rounded-md p-6">
      <h2 className="text-lg font-bold mb-4">Nouveau post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={handleChange}
          className="w-full h-32 border border-gray-300 rounded-md p-2 mb-4"
          placeholder="Quoi de neuf ?"
          rows="4"
          cols="50"
        />
        <button type="submit" className="bg-indigo-700 text-white px-4 py-2 rounded-md mr-2">Publier</button>
        <button type="button" onClick={onClose} className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md">Annuler</button>
      </form>
    </div>
  );
}

export default PostPopup;
