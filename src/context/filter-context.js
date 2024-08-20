import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initalValue = {
  isFilterModalOpen: false,
  priceRange: [300, 20000],
  noOfBathrooms: "Any",
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  propertyType: "Any",
  travelRating: 1,
  isCancelable: true
};

const Filtercontext = createContext(initalValue);

const FilterProvider = ({ children }) => {
  const [
    {
      isFilterModalOpen,
      priceRange,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds,
      propertyType,
      travelRating,
      isCancelable
    },
    filterDispatch,
  ] = useReducer(filterReducer, initalValue);

  return (
    <Filtercontext.Provider
      value={{
        isFilterModalOpen,
        priceRange,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds,
        propertyType,
        travelRating,
        isCancelable,
        filterDispatch,
      }}
    >
      {children}
    </Filtercontext.Provider>
  );
};

const useFilter = () => useContext(Filtercontext);

export { useFilter, FilterProvider };
