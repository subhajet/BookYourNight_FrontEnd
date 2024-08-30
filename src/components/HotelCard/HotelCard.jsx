import { useNavigate } from "react-router-dom";
import "./HotelCard.css";
import { useWishlist, useAuth } from "../../context";
import { findHotelInWishlist } from "../../utils";

export const HotelCard = ({ hotel = {} }) => {
  const { _id, name, image, address, state, rating, price } = hotel;

  const { wishlistDispatch, wishlist } = useWishlist();

  const { accessToken, authDispatch } = useAuth();

  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const navigate = useNavigate();

  const handleHotelcardClick = () => {
    navigate(`/hotels/${name}/${address}-${state}/${_id}/reserve`);
  };

  const handleWishlistClick = () => {
    if (accessToken) {
      if (!isHotelInWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: hotel,
        });
        navigate("/wishlist");
      } else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
           payload: _id,
        });
      }
    }else{
      authDispatch({
        type:"SHOW_AUTH_MODAL"
      })
    }
  };

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
            <span className="price">Rs.{price} </span>
            <span>Night</span>
          </p>
        </div>
      </div>
      <button
        className="button btn-wishlist absolute d-flex align center cursor"
        onClick={handleWishlistClick}
      >
        <span
          className={`material-symbols-outlined ${
            isHotelInWishlist ? "fav-selected" : ""
          }`}
        >
          favorite
        </span>
      </button>
    </div>
  );
};
