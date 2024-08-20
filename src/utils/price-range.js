export const getHotelsByPrice = (testData, priceRange) => {
   const filteredHotels =  testData.filter(
        (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
      );
    return filteredHotels;
}