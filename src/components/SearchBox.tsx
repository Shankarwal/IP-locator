import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div className="search-box">
      <input
        className="search-box-input"
        placeholder="Please enter IP address"
      />
      <FiSearch className="search-box-icon" />
    </div>
  );
};

export default SearchBox;
