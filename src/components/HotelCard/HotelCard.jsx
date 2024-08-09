import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

export const HotelCard = ({ hotel = {} }) => {
  const { _id, name, image, address, state, rating, price } = hotel;

  const navigate = useNavigate();

  const handleHotelcardClick = () =>{
    navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`)
  }

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div onClick={handleHotelcardClick}>
        <img className="img" src={image} alt={name} />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location">
              {address} {state}
            </span>
            <span className="rating d-flex align-center">
              <span class="material-symbols-outlined">star</span>
              <span>{rating}</span>
            </span>
          </div>
          <p className="hotel-name">{name}</p>
          <p className="price-details ">
            <span className="price">Rs. {price}</span>
            <span>Night</span>
          </p>
        </div>
      </div>
      <button className="button btn-wishlist absolute">
        <span className="material-symbols-outlined">favorite</span>
      </button>
    </div>
  );
};
