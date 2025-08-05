import React, { useState, useEffect } from 'react';
import styles from './Posts.module.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  // Load posts from localStorage
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts);
  }, []);

  // Save to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newPost.title.trim() || !newPost.content.trim()) {
      return alert("Title and content are required.");
    }

    if (editingIndex !== null) {
      // PUT (edit)
      const updated = [...posts];
      updated[editingIndex] = newPost;
      setPosts(updated);
      setEditingIndex(null);
    } else {
      // POST (create)
      setPosts([...posts, newPost]);
    }

    setNewPost({ title: '', content: '' });
  };

  const handleEdit = (index) => {
    setNewPost(posts[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updated = [...posts];
    updated.splice(index, 1);
    setPosts(updated);
  };

  return (
    <div className={styles.container}>
      <h2>📝 Posts</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Title"
          value={newPost.title}
          onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
          className={styles.input}
          required
        />
        <textarea
          placeholder="Content"
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          className={styles.textarea}
          required
        />
        <button type="submit" className={styles.button}>
          {editingIndex !== null ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      <div className={styles.list}>
        {posts.map((post, index) => (
          <div key={index} className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div className={styles.actions}>
              <button onClick={() => handleEdit(index)}>✏️ Edit</button>
              <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
