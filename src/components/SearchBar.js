import React, { useState } from "react";

const SearchBar = ({ onChangeSearchTerm }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick = () => {
    onChangeSearchTerm(searchTerm);
  };

  return (
    <div className="row justify-content-md-center">
      <div className="col-lg-4">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter country name..."
            value={searchTerm}
            onChange={handleInputChange} />
          
          <button
            className="btn btn-outline-primary"
            type="button"
            onClick={handleButtonClick} >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
