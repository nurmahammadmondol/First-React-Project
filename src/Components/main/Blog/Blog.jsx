import PropTypes from 'prop-types';
import { CiBookmarkCheck } from 'react-icons/ci';

const Blog = ({ blogs }) => {
  console.log(blogs);

  const {
    id,
    author,
    author_img,
    cover,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blogs;

  return (
    <div className="bg-gray-50 mb-12 p-5 rounded-xl">
      <img className="w-full rounded-xl" src={cover} alt="" />
      <div className="my-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img className="w-14" src={author_img} alt="" />
          <div>
            <p>{author}</p>
            <small>{posted_date}</small>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <small>{reading_time} min read</small>
          <span className="text-2xl">
            <CiBookmarkCheck />
          </span>
        </div>
      </div>
      <h6 className="text-2xl md:text-3xl font-bold">{title}</h6>

      <div className="my-3 text-gray-500">
        {hashtags.map(hash => (
          <span className="mr-3">
            <a href="">#{hash}</a>
          </span>
        ))}
      </div>

      <button className="text-xl text-[#8fc0c6] border-b border-[#8fc0c6]">
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blogs: PropTypes.object,
};
export default Blog;
