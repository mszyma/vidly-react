import React from "react";
import Input from "./common/input";

const SearchBox = ({ value, onChange }) => {
  return (
    <Input
      name="query"
      value={value}
      className="form-control my-3"
      onChange={e => onChange(e.currentTarget.value)}
      autoFocus
      type="text"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
