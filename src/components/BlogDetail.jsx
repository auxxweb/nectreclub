import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams(); // Get the dynamic blog ID from the URL
  const navigate = useNavigate();
  
  const blog = {
    1: {
      title: 'If You Can Answer These 7 Questions...',
      image: '/images/1.jpeg',
      description: 'JavaScript can be a little tricky sometimes.',
      content: 'Detailed blog content goes here...',
    },
    2: {
      title: 'Mastering React Components',
      image: '/images/2.jpeg',
      description: 'Learn to build reusable and efficient components.',
      content: 'Detailed blog content goes here...',
    },
    3: {
      title: 'The Art of CSS Styling',
      image: '/images/3.jpeg',
      description: 'Discover tips for creating visually appealing web designs.',
      content: 'Detailed blog content goes here...',
    },
  };

  const selectedBlog = blog[id];

  useEffect(() => {
    // If no blog is found, redirect to the homepage
    if (!selectedBlog) {
      navigate('/');
    }
  }, [id, selectedBlog, navigate]);

  // If the blog is not found, we don't need to render the component, as it's handled by the redirect
  if (!selectedBlog) {
    return <p>Blog not found, redirecting...</p>;
  }

  return (
    <div className="blog-detail">
      <h1 className="blog-title">{selectedBlog.title}</h1>
      <img src={selectedBlog.image} alt={selectedBlog.title} className="blog-image" />
      <p className="blog-description">{selectedBlog.description}</p>
      <p className="blog-content">{selectedBlog.content}</p>
    </div>
  );
};

export default BlogDetail;
