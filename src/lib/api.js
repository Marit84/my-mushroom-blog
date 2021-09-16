import axios from "axios";

export const getListing = async (listingId) => {
  const { data } = await axios.get(`/api/listing/${listingId}`);
  return data;
};

export const deleteListing = async (listingId) => {
  const { data } = await axios.delete(`/api/listings/${listingId}`);
  return data;
};

export const getAllListings = async (listingId) => {
  const { data } = await axios.get(`/api/listings/${listingId}`);
  return data;
};

export const addListing = async () => {
  const { data } = await axios.post("/api/add_listing");
  return data;
};
