import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === '' || content.trim() === '') {
      alert('Title and content cannot be empty');
      return;
    }

    setRecentPosts((prevPosts) => [
      ...prevPosts,
      { title, content, image },
    ]);

    setTitle('');
    setContent('');
    setImage(null);
  };

  const pageStyle = {
    backgroundImage: `url("https://media.discordapp.net/attachments/952166523831742494/1186596488814538792/3.png?ex=6593d318&is=65815e18&hm=4532ffd0fdfacd2cf6212e74558d0540ecc14bf166a4f503fe7da45ab6b8e131&=&format=webp&quality=lossless&width=1177&height=662")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // Keep the background fixed
    width: '100%',
  };

  return (
    <div className="blog-container" style={{ width: '100%', maxWidth: '1920px', margin: '0', padding: '0' }}>
      <div style={pageStyle}>
        <div className="row justify-content-center">
          <div className="col-md-8">
          <form className="blog-form mx-auto" style={{ marginTop: '40px' }} onSubmit={handleSubmit}>
              <h2>Add new Blog post</h2>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="form-control"
                ></textarea>
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control-file"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="recent-posts mx-auto">
              <h2>Recent Blog Posts</h2>
              {recentPosts.map((post, index) => (
                <div className="recent-post card" key={index}>
                  <div className="card-body">
                    <h3 className="card-title">{post.title}</h3>
                    <p className="card-text">{post.content}</p>
                    {post.image && (
                      <div className="centered-image">
                        <img
                          src={URL.createObjectURL(post.image)}
                          alt="Blog Post"
                          className="img-fluid"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
