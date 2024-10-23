import { useState } from 'react';
import './App.css';
import Header from './Components/Header/header';
import Blogs from './Components/main/Blogs/Blogs';
import BookMark from './Components/main/BookMark/BookMark';

function App() {
  const [bookMark, setBookMark] = useState([]);

  const handleAddToBookMarked = blogs => {
    const NewBookMarks = [...bookMark, blogs];

    setBookMark(NewBookMarks);
  };

  return (
    <>
      <Header></Header>
      <div className="w-10/12 mx-auto py-10 md:flex gap-10">
        <Blogs HandleBookMark={handleAddToBookMarked}></Blogs>

        <BookMark bookMark={bookMark}></BookMark>
      </div>
    </>
  );
}

export default App;
