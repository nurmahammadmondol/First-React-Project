import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import BookMark from '../BookMark/BookMark';

const Blogs = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="w-10/12 mx-auto py-10 md:flex gap-10">
      <div className="w-2/3 ">
        {Blogs.map(blog => (
          <Blog blogs={blog}></Blog>
        ))}
      </div>

      <div className="w-1/3 p-5">
        <BookMark></BookMark>
      </div>
    </div>
  );
};

export default Blogs;
