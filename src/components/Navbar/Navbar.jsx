import { useDate } from "../../context";
import "./Navbar.css";
export const Navbar = () => {
  const { destination, dateDispatch, checkInDate, checkOutDate, guests } = useDate();
  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  return (
    <header className="heading d-flex align-center">
      <h1 className="heading-1">
        <a className="link" href="/">
          TraveIO
        </a>
      </h1>
      <div
        className="form-container d-flex align-center cursor-pointer shadow"
        onClick={handleSearchClick}
      >
        <span className="form-option">{destination || "Any Where"}</span>
        <span className="border-right-1px"></span>
        <span className="form-option">
          {checkInDate && checkOutDate
            ? `${checkInDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })}- ${checkOutDate.toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
              })} `
            : "Any Week"}
        </span>
        <span className="border-right-1px"></span>
        <span className="form-option">{guests > 0 ? `${guests} guests` :"Any Guests"}</span>
        <span className="search material-symbols-outlined">search</span>
      </div>
      <nav class="d-flex align-center gap-large">
        <div className="nav d-flex align-center cursor-pointer">
          <span className="material-symbols-outlined profile-option menu">
            menu
          </span>
          <span className="material-symbols-outlined profile-option person ">
            person_2
          </span>
        </div>
      </nav>
    </header>
  );
};
