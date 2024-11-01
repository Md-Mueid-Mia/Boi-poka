import React from "react";
import bannerimg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="">
      <div className="hero bg-base-200 h-[500px] rounded-2xl md:p-20">
        <div className="hero-content p-5 flex-col lg:flex-row-reverse">
          <img
            src={bannerimg}
            className="max-w-72  md:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl md:text-5xl font-bold ">
              Books to freshen up your bookshelf
            </h1>

            <button className="btn btn-primary mt-7">View The List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
