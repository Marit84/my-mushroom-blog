import React from "react";

const SearchBox = ({ keyword, updateInput }) => {
  const BarStyling = {
    width: "20rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
  };
  return (
    <input
      style={BarStyling}
      key="random1"
      value={keyword}
      placeholder={"Search ..."}
      onChange={updateInput}
    />
  );
};

export default SearchBox;
