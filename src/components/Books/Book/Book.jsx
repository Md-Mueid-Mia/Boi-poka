import React from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-80 md:w-[360px] shadow-xl p-6 border mx-auto">
        <figure className="bg-slate-300 py-8 rounded-2xl">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-actions justify-start mt-6">
          <button className="btn  btn-xs border-green-500">{tags[0]}</button>
          <button className="btn  btn-xs border-green-500">{tags[1]}</button>
        </div>
        <div className="card-body p-0 mt-6">
          <div className="border-dashed border-b pb-4">
            <h2 className="card-title text-2xl font-bold ">{bookName}</h2>
            <p className="my-4">By: {author}</p>
          </div>
          <div className="flex mt-4">
            <p>{category}</p>
            <p className=" flex items-center justify-end text-right">
              {rating} <CiStar className="text-2xl ml-1" />
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
