import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css"
import { useDate } from "../../context";

export const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    if (checkInType === "in") {
      if (checkOutDate && date > checkOutDate) {
        dateDispatch({
          type: "CHECK_OUT",
          payload: date,
        });
      }
      dateDispatch({
        type: "CHECK_IN",
        payload: date,
      });
    } else {
      if (checkInDate && date < checkInDate) {
        dateDispatch({
          type: "CHECK_IN",
          payload: date,
        });
      }
      dateDispatch({
        type: "CHECK_OUT",
        payload: date,
      });
    }
  };

  const handleDateFocus = () => {
    dateDispatch({
      type : "DATE_FOCUS",
    })
  }

  return (
    <DatePicker
      className="search-dest input"
      selected={checkInType === "in" ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      onFocus={handleDateFocus}
      dateFormat="dd/MM/yyyy"
      placeholderText= "Add Dates"
      closeOnScroll={true}
    />
  );
};
