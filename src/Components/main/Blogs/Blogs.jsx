import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';
import PropTypes from 'prop-types';

const Blogs = ({ HandleBookMark, handleAddReadTime }) => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('Blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3 ">
      {Blogs.map(blog => (
        <Blog
          key={Blogs.id}
          blogs={blog}
          HandleBookMark={HandleBookMark}
          handleAddReadTime={handleAddReadTime}
        ></Blog>
      ))}
    </div>
  );
};

Blogs.propTypes = {
  HandleBookMark: PropTypes.object,
  handleAddReadTime: PropTypes.object,
};
export default Blogs;
