import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../../context";

const minDifference = 500;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {
  const { priceRange , filterDispatch } = useFilter();

console.log({priceRange});
  

  const handlePricechange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    if (activeThumb === 0) {
      filterDispatch({
        type: "MINIMUM_PRICE",
        payload: {
          newValue: [newValue[0], priceRange[1]], 
          priceRange,
          minDifference,
        },
      });
    } else {
      filterDispatch({
        type: "MAXIMUM_PRICE",
        payload: {
          newValue: [priceRange[0], newValue[1]],
          priceRange,
          minDifference,
        },
      });
    }
  };

  return (
    <div className="filter-conatainer">
      <span className="filter-label">Price Range</span>
      <Box>
        <Slider
          sx={{ color: "#ff6525" }}
          getAriaLabel={() => "Minimum Difference"}
          value={priceRange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          onChange={handlePricechange}
          min={100}
          max={25000}
          disableSwap
        />
      </Box>
    </div>
  );
};
