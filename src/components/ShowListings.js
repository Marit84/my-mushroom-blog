import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

function ListingCard({ data }) {
  const { _id, title, image, description, edibel } = data;
  const history = useHistory();

  //TODO: clear deleted listing
  const handleDelte = (value) => {
    console.log(value);
    axios.delete(`http://localhost:8000/listings/${_id}`).then(() => {
      alert("The listing was sucessfully deleted!");
      history.push("/listings");
    });
  };

  function handleUpdate() {
    history.push(`/updateListing/${_id}`);
  }

  return (
    <div
      key={_id}
      className="border-2 border-gray-200 border-opacity-60 overflow-hidden bg-white shadow-md rounded px-4 mb-4 h-6/7"
    >
      <Link key={_id} to={`/listing/${_id}`}>
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={image}
          alt="image"
        />
      </Link>
      <div className="p-4">
        <Link key={_id} to={`/listing/${_id}`}>
          <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h3>
        </Link>
        <p className="h-24 overflow-hidden mb-2">{description}...</p>
        {edibel ? (
          <p className="text-green-700 font-bold">Edibel</p>
        ) : (
          <p className="text-red-500 font-bold">Not Edibel</p>
        )}
        <div className="flex item-center flex-wrap">
          <Link
            key={_id}
            to={`/listing/${_id}`}
            className="text-green-500 inline-flex items-center lg:mb-0"
          >
            Read more...
          </Link>
        </div>
      </div>
      <div className="bottom-0">
        <button
          className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white  py-1 px-2 rounded m-4 self-auto "
          value={_id}
          key={_id}
          onClick={handleUpdate}
        >
          Update
        </button>
        <button
          className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white py-1 px-2 rounded m-4 self-auto "
          value={_id}
          key={_id}
          onClick={handleDelte}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export function ShowListings() {
  const [listing, setListing] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/listings")
      .then((res) => {
        console.log(res.data);
        setListing(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className=" grid grid-cols-3 gap-2">
      {listing.map((data) => (
        <ListingCard data={data} className="grid-cols-3 p-4 md:w-1/3" />
      ))}
    </div>
  );
}

export const deleteListing = async (_id) => {
  const { data } = await axios.delete(`http://localhost:8000/listings/${_id}`);
  return data;
};

export default ListingCard;
