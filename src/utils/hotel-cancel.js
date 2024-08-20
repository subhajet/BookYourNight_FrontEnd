export const getHoteByCancalation = (hotels, isCancalable) => {
    const filteredHotels = hotels.filter(hotel => hotel.isCancalable === isCancalable)
    return filteredHotels
}
