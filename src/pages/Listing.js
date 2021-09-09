import React from "react";
import listingContent from "./listing-content";
import ListingsComponent from "../components/ListingsComponent";

const Listing = ({ match }) => {
  const name = match.params.name;
  const listing = listingContent.find((listing) => listing.name === name);
  if (!listing) return <h1>That Listing does not exist</h1>;
  const otherListings = listingContent.filter(
    (listing) => listing.name !== name
  );
  return (
    <>
      <h1 className="sm:text-4xl text-2xl font-bold mt-6 mb-6 text-gray-900">
        {listing.title}
      </h1>
      <p className="mx-auto leading-relaxed text-base mb-4">
        {listing.description}
      </p>
      <h2>{listing.edibel}</h2>
      <h1 className="sm:text-2x text-xl font.bold mt-4 mb-4 text-gray-900">
        More Listings
      </h1>
      <div className="flex flex-wrap -m-4">
        <ListingsComponent listings={otherListings} />
      </div>
    </>
  );
};

export default Listing;
