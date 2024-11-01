import React, { useEffect, useState } from "react";
import Book from "./Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className=" mt-10">
      <h2 className="text-4xl font-bold text-center">Books</h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10 ">
        {books.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </section>
    </div>
  );
};

export default Books;
