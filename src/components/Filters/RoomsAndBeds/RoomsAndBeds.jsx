  import { useFilter } from "../../../context";

  const numberOfAmenities = ["any", "1", "2", "3", "4", "5+"];

  export const RoomsAndBeds = () => {
    const { filterDispatch, noOfBathrooms, noOfBedrooms, noOfBeds } = useFilter();

    console.log({ noOfBathrooms, noOfBedrooms, noOfBeds });

    const handleBedroomClick = (number) => {
      filterDispatch({
        type: "BEDROOMS",
        payload: number,
      });
    };
    const handleBathroomClick = (number) => {
      filterDispatch({
        type: "BATHROOMS",
        payload: number,
      });
    };
    const handleBedsroomClick = (number) => {
      filterDispatch({
        type: "BEDS",
        payload: number,
      });
    };

    return (
      <div className="filter-container">
        <span className="filter-label">Room And Beds</span>
        <div className="d-flex align-center gap-large">
          <div className="d-flex direction-column gap">
            <span className="span-label">Bedroom</span>
            <span className="span-label">Beds</span>
            <span className="span-label">Bathroom</span>
          </div>
          <div className="d-flex direction-column gap">
            <div className="amenity-bedroom">
              {numberOfAmenities.map((number) => (
                <span
                  className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                    noOfBedrooms.toString() === number ? "selected" : ""
                  }`}
                  key={`bedroom-${number}`}
                  onClick={() => handleBedroomClick(number)}
                >
                  {number}
                </span>
              ))}
            </div>
            <div className="amenity-beds">
              {numberOfAmenities.map((number) => (
                <span
                  className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                    noOfBathrooms.toString() === number ? "selected" : ""
                  }`}
                  key={`beds-${number}`}
                  onClick={() => handleBathroomClick(number)}
                >
                  {number}
                </span>
              ))}
            </div>
            <div className="amenity-bathroom">
              {numberOfAmenities.map((number) => (
                <span
                  className={`span-label aminity-count align-center justify-center cursor-pointer on-hover ${
                    noOfBeds.toString() === number ? "selected" : ""
                  }`}
                  key={`bathroom-${number}`}
                  onClick={() => handleBedsroomClick(number)}
                >
                  {number}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

