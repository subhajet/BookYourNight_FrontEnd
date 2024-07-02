import "./HotelCard.css";
export const HotelCard = ({hotel = {} }) => {

  const { _id, name, image, adress, state, rating, price } = hotel

  return (
    <div className="relative hotelcard-container shadow cursor-pointer">
      <div>
        <img
          className="img"
          src={image}  
          alt={name}
        />
        <div className="hotelcard-details">
          <div className="d-flex align-center">
            <span className="location"> {adress} {state}</span>
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
        <span class="material-symbols-outlined">favorite</span>
      </button>
    </div>
  );
};
