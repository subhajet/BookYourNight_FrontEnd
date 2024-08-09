import "./FinalPrice.css";
import { useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";

export const FinalPrice = ({ singleHotel }) => {
  const { price, rating } = singleHotel;
  const { guests, dateDispatch } = useDate();

  const handleGuestsChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };
  return (
    <div className="price-details-container d-flex direction-column gap shadow">
      <div className="prie-rating d-flex align-center justify-space-between">
        <p>
          <span className="fs-bold fs-large">Rs. {price}</span> night
        </p>
        <span className="rating d-flex align-center">
          <span class="material-symbols-outlined">star</span>{" "}
          <span>{rating}</span>
        </span>
      </div>
      <div className="d-flex direction-column">
        <div className="grid-container-two-col selected-dates">
          <div className="checkin loc-container">
            <label className="label"> Check in</label>
            <DateSelector checkInType="in" />
          </div>
          <div className="checkin loc-container">
            <label className="label"> Check Out</label>
            <DateSelector checkInType="out" />
          </div>
        </div>
        <div className="guests gutter-sm">
          <p>GUESTS</p>
          {guests <= 0 ? (
            <input
              className="guests-count-input"
              placeholder="Add Guests"
              value={guests}
              onChange={handleGuestsChange}
            ></input>
          ) : (
            <span>{guests} guests</span>
          )}
        </div>
      </div>
      <div>
        <button className="button btn-reserve btn-primary cursor">
          Reserve
        </button>
      </div>
      <div className="price-distribution d-flex direction-coloumn">
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Rs. {price} x 2 nights</span>
          <span className="span">Rs. {price * 2}</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Service fee</span>
          <span className="span">Rs. 200</span>
        </div>
        <div className="final-price d-flex align-center justify-space-between">
          <span className="span">Total</span>
          <span className="span">Rs. {price * 2 + 200}</span>
        </div>
      </div>
    </div>
  );
};
