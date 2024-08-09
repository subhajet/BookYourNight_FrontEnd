// import { Fragment, useEffect, useState } from "react";
// import { HotelCard, Navbar } from "../../components";
// import { useCategory, useDate } from "../../context";
// import axios from "axios";
// const { hotelCategory } = useCategory

// export const SearchResult = () => {
//   const { destination } = useDate();
//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     (async () => {
//       try {
//         const { data } = await axios.get(
//           `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}&destination=${destination}`
//         );
//         setHotels(data);
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, [destination]);

//   const filterSearchResults = hotels.filter(
//     ({ city, address, state }) =>
//       address.toLowerCase().includes(destination.toLowerCase()) ||
//       city.toLowerCase().includes(destination.toLowerCase()) ||
//       state.toLowerCase().includes(destination.toLowerCase())
//   );
//   console.log(filterSearchResults);
  
//   return (
//     <Fragment>
//       <Navbar />
//       <section className="d-flex align-center gap-larger">
//         {filterSearchResults ?
//           filterSearchResults.map((hotel) => (
//             <HotelCard key={hotel._id} hotel={hotel} />
//           )) : (<h3>Nothing found</h3>)} 
//       </section>
//     </Fragment>
//   );
// };

import { Fragment, useEffect, useState, useCallback } from "react";
import { HotelCard, Navbar } from "../../components";
import { useCategory, useDate } from "../../context";
import axios from "axios";

export const SearchResult = () => {
  const { destination } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);

  const fetchHotels = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}&destination=${destination}`
      );
      setHotels(data);
    } catch (err) {
      console.log(err);
    }
  }, [destination, hotelCategory]);

  useEffect(() => {
    fetchHotels();
  }, [fetchHotels]);


  const filterSearchResults = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase())
  );
  
  return (
    <Fragment>
      <Navbar />
      <section className="d-flex align-center gap-larger">
        {filterSearchResults.length > 0 ?
          filterSearchResults.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          )) : (<h3>No hotels found for the selected destination.</h3>)} 
      </section>
    </Fragment>
  );
};
