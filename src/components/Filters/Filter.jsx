import "./Filter.css";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Rating,
  FreeCancel,
} from "./Index";

import { useFilter } from "../../context";

export const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleFilterModalCloseClick = () => {
    filterDispatch({
      type: "SHOW_FILTER_MODAL",
    });
  };

  const handleClelarFilterClick = () => {
    filterDispatch({
      type:"CLEAR_ALL"

    })
  }
  return (
    <div className="filter-modal">
      <div className="filter-page shadow">
        <div className="d-flex align-center justify-space-between">
          <span className="filter-label">Filter</span>
          <div className="btn-close-wraper">
            <button
              className="button btn-close cursor-pointer d-flex align-center justify-center"
              onClick={handleFilterModalCloseClick}
            >
              <span class="material-symbols-outlined">close</span>
            </button>
          </div>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Rating />
        <FreeCancel />
        <div className=" btn d-flex align-center justify-space-between ">
          <button className="button cursor btn-link-primary" onClick={handleClelarFilterClick}>Clear All</button>
          <button className="button cursor btn-primary btn-apply" onClick={handleFilterModalCloseClick}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
