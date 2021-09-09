import React from "react";
import { Link } from "react-router-dom";

const ListingsComponent = ({ listings }) => {
  return (
    <>
      {listings.map((listing, index) => (
        <div key={index} className="grid-cols-3 p-4 md:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-1g overflow-hidden">
            <Link to={`/listing/${listing.name}`}>
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={listing.thumbnail}
                alt="blog"
              />
            </Link>
            <div className="p-6">
              <Link key={index} to={`/listing/${listing.name}`}>
                <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                  {listing.title}
                </h3>
                {/* {isEdibelOrNot}  TODO*/}
              </Link>
              <p className="leading-relaxed mb-3">
                {" "}
                {/* TODO : fix margin right */}
                {listing.description.substring(0, 75)}...
              </p>
              <div className="flex item-center flex-wrap">
                <Link
                  className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                  to={`/listing/${listing.name}`}
                >
                  Read more...
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListingsComponent;
