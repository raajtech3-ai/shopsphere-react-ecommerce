import React from "react";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  const [city, setCity] = useState("Ahmedabad");
  const [showDropdown, setShowDropdown] = useState(false);

  const locations = [
    "Ahmedabad",
    "Gandhinagar",
    "Vadodra",
    "Surat",
    "Katch",
    "Junagath",
  ];

  const handleSelect = (loc) => {
    setCity(loc);
    setShowDropdown(false);
  };

  return (
    <div className="location">
      <div
        className="location-box"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaMapMarkerAlt className="location-icon" />

        <div className="location-text">
          <span className="deliver">Deliver to</span>
          <span className="city">{city}</span>
        </div>
      </div>

      {showDropdown && (
        <div className="location-dropdown">
          {" "}
          {locations.map((loc, index) => (
            <div
              key={index}
              className="location-item"
              onClick={() => handleSelect(loc)}
            >
              {" "}
              {loc}{" "}
            </div>
          ))}{" "}
        </div>
      )}
    </div>
  );
};

export default Location;
