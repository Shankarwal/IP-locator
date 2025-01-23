import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { LocationContext } from "./MainContainer";

const SearchBox = () => {
  const [searchIP, setSearchIP] = useState("");
  const locationCtx = useContext(LocationContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchIP(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (searchIP) {
        handleSearch();
      } else {
        if (locationCtx?.currentLocation) {
          locationCtx?.setSearchedLocation(locationCtx?.currentLocation);
        }
      }
    }
  };

  const handleSearch = async () => {
    try {
      const url = import.meta.env.VITE_BACKEND_PUBLIC_URL;
      const response = await axios.post(url, {
        ip: searchIP,
      });
      if (locationCtx?.setSearchedLocation) {
        locationCtx.setSearchedLocation([
          response?.data?.lat,
          response?.data?.long,
        ]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="search-box">
      <input
        className="search-box-input"
        placeholder="Please enter IP address"
        onChange={handleChange}
        value={searchIP}
        onKeyUp={handleKeyUp}
      />
      <FiSearch className="search-box-icon" onClick={handleSearch} />
    </div>
  );
};

export default SearchBox;
