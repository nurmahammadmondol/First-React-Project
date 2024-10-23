import Book from './Book';

const BookMark = ({ bookMark }) => {
  // console.log(bookMark);
  return (
    <div className="md:w-1/3">
      <div className="p-5 border border-[#b4d5d9] bg-[#e6f1f2] rounded-md">
        <h3 className="text-lg font-bold text-[#077482] text-center">
          Spent time on read : 0 min
        </h3>
      </div>

      <div className="mt-5 p-5 h-[500px] md:h-[1400px] bg-gray-100 rounded-md">
        <h5 className="text-lg font-bold mb-3">
          Bookmarked Blogs :{bookMark.length}
        </h5>

        <div className="h-[450px] md:h-[1300px] overflow-auto">
          {bookMark.map(mark => (
            <Book key={bookMark.id} Books={mark}></Book>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMark;
