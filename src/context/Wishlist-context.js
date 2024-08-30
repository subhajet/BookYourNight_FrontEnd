import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialValue = {
  wishlist: [],
};
const WihslistContext = createContext(initialValue);

const WishlistProvider = ({ children }) => {
  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialValue
  );

  return (
    <WihslistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WihslistContext.Provider>
  );
};

const useWishlist = () => useContext(WihslistContext);
export { useWishlist, WishlistProvider };
