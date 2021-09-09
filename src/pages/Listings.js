import React from "react";
import { Link } from "react-router-dom";
import listingContent from "./listing-content";
import ListingsComponent from "../components/ListingsComponent";

const Listings = () => {
  const isEdibelOrNot = (listing) => {
    //TODO fix!
    if (listing.edibel === true) {
      <p>Edibel</p>;
    } else {
      <p>Not edibel</p>;
    }
    return isEdibelOrNot;
  };
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        Listings
      </h1>
      <div className="container py-4 mx-auto">
        <div className="flex flex-wrap -m-4">
          <ListingsComponent listings={listingContent} />
        </div>
      </div>
    </>
  );
};

export default Listings;
