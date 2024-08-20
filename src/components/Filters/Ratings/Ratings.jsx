// import {useFilter} from "../../../context";

// const ratings = ["1", "2", "3", "4", "5"];

// export const Rating = () => {
//   const {travelRating, filterDispatch} = useFilter();
  
// const handleRatingsClick = (ratings) => {
//   filterDispatch({
//     type:"RATINGS",
//     payload: ratings
//   })
// }
//   return (
//     <div className="filter-container">
//       <span className="filter-label">Ratings</span>
//       <div className="d-flex align-center gap">
//         {ratings.map((ratings) => (
//           <span
//             className="span-label aminity-count star d-flex align-center 
//             justfiy-center cursor-pointer on-hover"
//             key={ratings}
//             onClick={() => handleRatingsClick(ratings)}
//           >
//             {ratings} &Up
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };
import { useFilter } from "../../../context";

const ratings = ["1", "2", "3", "4", "5"];

export const Rating = () => {
  const { filterDispatch } = useFilter();

  const handleRatingsClick = (rating) => {
    filterDispatch({
      type: "RATINGS",
      payload: rating
    });
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Ratings</span>
      <div className="d-flex align-center gap">
        {ratings.map((rating) => (
          <span
            className="span-label aminity-count star d-flex align-center justify-center cursor-pointer on-hover"
            key={rating}
            onClick={() => handleRatingsClick(rating)}
          >
            {rating} &Up
          </span>
        ))}
      </div>
    </div>
  );
};
