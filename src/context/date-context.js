import { createContext, useContext, useReducer } from "react";
import { dateReducer } from "../reducer/date-reducer";

const initialValue = {
  destination: "", 
  guests: 0,
  checkInDate: null,
  checkOutDate: null,
  isSearchModalOpen: false,
  isSearchResultOpen: true,
};

const DateContext = createContext(initialValue);

const DateProvider = ({ children }) => {
  const [{ destination, guests, checkInDate, checkOutDate, isSearchModalOpen, isSearchResultOpen }, dateDispatch] =
    useReducer(dateReducer, initialValue);

  return (
    <DateContext.Provider
      value={{ destination, guests, checkInDate, checkOutDate, isSearchModalOpen,isSearchResultOpen, dateDispatch ,}}
    >
      {children}
    </DateContext.Provider>
  );
};

const useDate = () => useContext(DateContext);
export { useDate, DateProvider };
