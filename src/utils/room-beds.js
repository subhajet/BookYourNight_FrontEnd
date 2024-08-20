export const getHotelsByRoomsAndBeds = (
  hotels,
  noOfBathrooms,
  noOfBedrooms,
  noOfBeds
) => {
    if(noOfBathrooms === "Any" || noOfBedrooms === "Any" || noOfBeds === "Any")
        return hotels;
  const filteredHotels = hotels.filter(
    ({ numberOfBathrooms, numberOFBedrooms, numberOfBeds }) =>
      numberOfBathrooms === noOfBathrooms ||
      numberOFBedrooms === noOfBedrooms ||
      numberOfBeds === noOfBeds);
      return filteredHotels
};
