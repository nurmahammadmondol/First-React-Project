const Book = ({ Books }) => {
  const { title, reading_time } = Books;
  return (
    <div className="p-4 my-3 bg-[#e6f1f2] rounded-lg">
      <h4>{title}</h4>

      <small className="flex justify-end mt-2 text-gray-500">
        {reading_time} min read
      </small>
    </div>
  );
};

export default Book;
