import React, { useEffect, useState } from "react";
const Search = ({ getSearch }) => {
  const [search, setsearch] = useState("");
  const handleChange = (e) => {
    setsearch(e.target.value);
  };
  useEffect(() => {
    getSearch(search);
  }, [search]);
  return (
    <div className="my-5 flex items-center justify-center">
      <input
        type="text"
        name=""
        id=""
        className="text-black border-none bg-green-400 rounded placeholder:text-orange-400 px-3 py-2 focus:bg-blue-500 focus:text-white"
        placeholder="Search Food"
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
