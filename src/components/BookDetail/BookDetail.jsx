import React from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import {
  addToStoredReadList,
  addToStoredWishList,
} from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === parseInt(bookId));
  const {
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

  const handleMarkAsRead = (id) => {
    // implement your logic here
    addToStoredReadList(id);
  };
  const handleAddToWishlist = () => {
    // Add to wishlist logic here
  };

  return (
    <div className="md:flex gap-10 my-16">
      <div className="flex-1 bg-slate-300 p-16 rounded-2xl my-auto mx-auto">
        <img className="mx-auto" src={image} alt="" />
      </div>
      <div className="flex-1 mt-8 md:mt-0 p-6">
        <h2 className="text-2xl md:text-4xl font-bold">{bookName}</h2>
        <p className="mt-4 text-xl font-medium">By: {author}</p>
        <div className="divider"></div>
        <p className="mt-4 text-xl font-medium"> {category}</p>
        <div className="divider"></div>
        <p className="leading-7">
          <span className="text-lg font-bold">Review:</span> {review}
        </p>
        <div className="flex justify-start gap-6 items-center mt-6">
          <p className="text-lg font-bold">Tag</p>
          <button className="btn  btn-xs border-green-500">{tags[0]}</button>
          <button className="btn  btn-xs border-green-500">{tags[1]}</button>
        </div>
        <div className="divider"></div>
        <div className="flex gap-10">
          <div className=" leading-8">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of Publishing:</p>
            <p>Rating:</p>
          </div>
          <div className=" leading-8">
            <p className="font-bold">{totalPages}</p>
            <p className="font-bold">{publisher}</p>
            <p className="font-bold">{yearOfPublishing}</p>
            <p className="font-bold">{rating}</p>
          </div>
        </div>
        <div className="flex mt-6 gap-5">
          <NavLink
            onClick={() => handleMarkAsRead(bookId)}
            className="btn btn-outline btn-accent"
          >
            Mark as Read
          </NavLink>
          <NavLink
            onClick={() => addToStoredWishList(bookId)}
            className="btn  btn-accent"
          >
            Add to Wishlist
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
