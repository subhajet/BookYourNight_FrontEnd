  import { DateSelector } from "../DateSelector/DateSelector";
  import "./SearchStayWithDate.css";
  import { useDate, useCategory } from "../../context";
  import {  useEffect, useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";

  export const SearchStayWithDate = () => {
    const [hotels, setHotels] = useState([]);
    const { destination, guests, isSearchResultOpen, dateDispatch } = useDate();
    const { hotelCategory } = useCategory();

    const navigate = useNavigate();

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get(
            `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}`
          );
          setHotels(data);
        } catch (err) {
          console.log(err);
        }
      })();
    }, [destination, hotelCategory]);
  
    const handleDestinationschange = (event) => {
      dateDispatch({
        type: "DESTINATION",
        payload: event.target.value,
      });
    };
    const handleGuestsChange = (event) => {
      dateDispatch({
        type: "GUESTS",
        payload: event.target.value,
      });
    };
    const handleSearchResultClick = (address) => {
      dateDispatch({
        type: "DESTINATION",
        payload: address,
      });
    };
  
    const handleDestinationFocus = () =>{
      dateDispatch({
        type: "SHOW_SEARCH_RESULT",
      });
    }
    const destinationOptions = hotels.filter(
      ({ address, city, state, country }) =>
        address.toLowerCase().includes(destination.toLowerCase()) ||
        city.toLowerCase().includes(destination.toLowerCase()) ||
        state.toLowerCase().includes(destination.toLowerCase()) ||
        country.toLowerCase().includes(destination.toLowerCase())
    );
  
  
    const handleSearchButtonClick =() =>{

      dateDispatch({
        type : "CLOSE_SEARCH_MODAL"
      })
      navigate(`/hotels/${destination}`)
    }
    return (
      <div className="destination-container">
        <div className="destination-options d-flex align-center absolute">
          <div className="location-container">
            <label className="label">Where</label>
            <input
              value={destination}
              onChange={handleDestinationschange}
              onFocus={handleDestinationFocus}
              className="input search-dest"
              placeholder="Search-Destination"
              autoFocus
            />
          </div>
          <div className="location-container">
            <label className="label">Check in</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="location-container">
            <label className="label">Check out</label>
            <DateSelector checkInType="out" />
          </div>
          <div className="location-container">
            <label className="label">No. of Guests</label>
            <input
              value={guests}
              className="input search-dest"
              placeholder="Add guests"
              onChange={handleGuestsChange}
            />
          </div>
          <div className="search search-container d-flex align-center cursor" onClick={handleSearchButtonClick}>
            <span className="material-symbols-outlined">search</span>
            <span className="search-name">search</span>
          </div>
        </div>
        {isSearchResultOpen && (
          <div className="search-result-container absolute">
            {destinationOptions &&
              destinationOptions.map(({ address, city }) => (
                <p
                  className="p cursor-pointer"
                  onClick={() => handleSearchResultClick(address)}
                >
                  {address}, {city}
                </p>
              ))}
          </div>
        )}
      </div>
    );
  };