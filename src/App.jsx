import { useState } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Blogs from './Components/main/Blogs/Blogs';
import BookMark from './Components/main/BookMark/BookMark';

function App() {
  const [bookMark, setBookMark] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookMarked = blogs => {
    const NewBookMarks = [...bookMark, blogs];

    setBookMark(NewBookMarks);
  };

  const handleAddReadTime = (id, time) => {
    const newReadTime = readTime + time;
    setReadTime(newReadTime);
    // console.log('book mark', id);

    // Remove This ID Bookmarks
    const BooKMarkedMoreReadButton = bookMark.filter(book => book.id !== id);
    setBookMark(BooKMarkedMoreReadButton);
  };

  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto py-10 md:flex gap-10">
        <Blogs
          HandleBookMark={handleAddToBookMarked}
          handleAddReadTime={handleAddReadTime}
        ></Blogs>

        <BookMark bookMark={bookMark} setReadTimes={readTime}></BookMark>
      </div>
    </>
  );
}

export default App;
