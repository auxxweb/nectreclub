import React, { useState } from 'react';
import './BlogCard.css';
import { Link } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    title: 'If You Can Answer These 7 Questions...',
    image: '/images/1.jpeg',
    description: 'JavaScript can be a little tricky sometimes.',
  },
  {
    id: 2,
    title: 'Mastering React Components',
    image: '/images/2.jpeg',
    description: 'Learn to build reusable and efficient components.',
  },
  {
    id: 3,
    title: 'The Art of CSS Styling',
    image: '/images/3.jpeg',
    description: 'Discover tips for creating visually appealing web designs.',
  },
];

const BlogCard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter blogs based on search term
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="blog-container">
      <h1 className="blog-heading text-[40px] font-serif text-center">Blogs</h1>

      {/* Search Bar */}
      <div className="search-container text-center mb-5">
        <input
          type="search"
          placeholder="Search here"
          className="search-bar border-b-gray-500 w-[500px] p-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Blog Cards */}
      <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div key={blog.id} className="blog-card relative">
             <Link to={`/blog/${blog.id} classname="blog-card-link"`}>
              <img src={blog.image} alt={blog.title} className="blog-card-image" />
              <div className="blog-card-overlay absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
                <h2 className="blog-card-title text-white text-xl font-bold mb-2">
                  {blog.title}
                </h2>
                <p className="blog-card-description text-white text-sm">
                  {blog.description}
                </p>
              </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results text-center text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
