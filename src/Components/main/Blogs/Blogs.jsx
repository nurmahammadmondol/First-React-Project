import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = ({ HandleBookMark }) => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 ">
      {Blogs.map(blog => (
        <Blog blogs={blog} HandleBookMark={HandleBookMark}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
