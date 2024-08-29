import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  Navbar,
  HotelCard,
  Category,
  SearchStayWithDate,
  Filter,
  AuthModal
} from "../../components";
import "./Home.css";
import { useCategory, useDate, useFilter, useAuth} from "../../context";
import {
  getHotelsByPrice,
  getHotelsByRoomsAndBeds,
  getHotelsByPropertyType,
  getHotelsByRatings,
  getHoteByCancalation
} from "../../utils";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const {
    isFilterModalOpen,
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    propertyType,
    travelRating,
    isCancalable,
  } = useFilter();

  const {isAuthModalOpen} = useAuth()

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://bookyournightbacked.onrender.com/api/hotels?category=${hotelCategory}`
        );
        setTestData(data);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const filterHotelByPrice = getHotelsByPrice(testData, priceRange);
  const filterHotelByBedsAndRooms = getHotelsByRoomsAndBeds(
    filterHotelByPrice,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds
  );
  const filterHotelsByPropertyType = getHotelsByPropertyType(
    filterHotelByBedsAndRooms,
    propertyType
  );

  const filerHotelsByRatings = getHotelsByRatings(filterHotelsByPropertyType, travelRating)

  const filterHotelsByCancalation = getHoteByCancalation(filerHotelsByRatings, isCancalable)

  return (
    <div className="relative">
      <Navbar />
      <Category />
      {filterHotelByPrice.length > 0 ? (
        <InfiniteScroll
          dataLength={filterHotelByPrice.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={<h3 className="alert-text">Loading...</h3>}
          endMessage={<p className="alert-text">You have seen it all</p>}
        >
          <main className="main d-flex align-center wrap gap-larger">
            {filterHotelsByCancalation.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </main>
        </InfiniteScroll>
      ) : (
        <p>No hotels found within the selected price range.</p>
      )}
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
      {isAuthModalOpen && <AuthModal/>}
    </div>
  );
};