import { Fragment, useEffect, useState } from "react";
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component";


import { Navbar, HotelCard, Category } from "../../components";

import "./Home.css"
import { useCategory } from "../../context";

// export const Home = () => {

//   const [hasMore, setHasMore] = useState(true);
//   const [testData, setTestData] = useState([]); 
//   const[currentIndex, setCurrentIndex] = useState(16);  
//   const [hotels, setHotels] = useState([]);
//   const {hotelCategory} =  useCategory();

//   useEffect(() => {
//     (async () => {
//       try {
//         const {data} = await axios.get(
//           `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}`
//         );
//         setTestData(data); 
//         setHotels(data ? data.slice(0,16): []);     
//       } catch (err) {
//         console.log(err);
//       }
//     })();
//   }, [hotelCategory]);

//   const fetchMoreData = () => {
//     if(hotels.length >= testData.length){
//       setHasMore(false)
//       return
//     }
//     setTimeout(() => {
//       if(hotels && hotels.length > 0 ){
//         setHotels(hotels.concat(testData.slice(currentIndex, currentIndex + 16)))
//         setCurrentIndex(prev => prev + 16);
//       }else{
//         setHotels([])
//       }
//     },1000)
//   }

//   return (
//     <Fragment>
//     <Navbar/>
//     <Category/>
//     {
//       hotels && hotels.length > 0 ? (
//         <InfiniteScroll
//             dataLength = {hotels.length}
//             next={fetchMoreData}
//             hasMore = {hasMore}
//             loader = {hotels.length > 0 && <h3 className="alert-text"> Loading...</h3>}
//             endMessage= {<p className="alert-text" >You have seen it all</p>}
//           >
//           <main className="main d-flex align-center wrap gap-larger">
//            {
//               hotels && hotels.map((hotel) => <HotelCard key={hotel._id} hotel = {hotel} />)
//            }
//           </main>
//         </InfiniteScroll>
//       ) : (<></>)
//     }
//   </Fragment>
//   );
// };



export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [testData, setTestData] = useState([]); 
  const [currentIndex, setCurrentIndex] = useState(16);  
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory(); // Ensure correct destructuring

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}`
        );
        console.log("Fetched Category:", hotelCategory); // Log to verify
        setTestData(data); 
        setHotels(data ? data.slice(0, 16) : []);     
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]); // Ensure effect runs when hotelCategory changes

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(hotels.concat(testData.slice(currentIndex, currentIndex + 16)));
        setCurrentIndex(prev => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  return (
    <Fragment>
      <Navbar/>
      <Category/>
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={hotels.length > 0 && <h3 className="alert-text"> Loading...</h3>}
          endMessage={<p className="alert-text">You have seen it all</p>}
        >
          <main className="main d-flex align-center wrap gap-larger">
            {hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
          </main>
        </InfiniteScroll>
      ) : null}
    </Fragment>
  );
};
