import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const db = getDatabase();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    const postsRef = ref(db, 'posts');
    onValue(postsRef, (snapshot) => {
      const postsData = snapshot.val();
      const loadedPosts = [];
      for (const key in postsData) {
        loadedPosts.push({
          id: key,
          ...postsData[key],
        });
      }
      setPosts(loadedPosts);
    });
  }, [db]);

  if (!currentUser) {
    return <div>Please log in to see the posts.</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.profilePictureUrl || 'defaultProfilePicUrl'} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
