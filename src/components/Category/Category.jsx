import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory } from "../../context";

import "./Category.css";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const [numberofCategoryToshow, setNumberofCategoryToshow] = useState(0);
  const { hotelCategory, setHotelCategory} = useCategory();

  const handleShowMoreRightClick = () => {
    setNumberofCategoryToshow((pre) => pre + 10);
  };
  const handleShowMoreLeftClick = () => {
    setNumberofCategoryToshow((prev) => (prev - 10 >= 0 ? prev - 10 : 0));
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://bookyournightbacked.onrender.com/api/category"
        );
        const categoriesToshow = response.data.slice(
          numberofCategoryToshow,
          numberofCategoryToshow + 10
        );
        setCategories(categoriesToshow);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [numberofCategoryToshow]);

  const  handleCategoryClick = (category) => {
    setHotelCategory(category)
  };
  
  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
    {
      numberofCategoryToshow >= 10 && (
       <button className="button btn-category btn-left fiexed cursor-pointer" onClick={handleShowMoreLeftClick}>
       <span class="material-symbols-outlined">chevron_left</span>
     </button>
      )
   }
      {categories &&
        categories.map(({ category, _id }) => (
            <span className={`${category === hotelCategory ? "border-bottom" : ""}`} key={_id} onClick={() => handleCategoryClick(category)}>{category} </span>
        ))}
        {
          numberofCategoryToshow -10 <  categories.length && (
            <button className="button btn-category btn-right fiexed cursor-pointer" onClick={handleShowMoreRightClick}>
        <span class="material-symbols-outlined">chevron_right</span>
      </button>  
          )
        }
      
    </section>
  );
};

// categories.map(({ category, index }) => (
//   <span key={category.id || category.name || index}>{category} </span>
// ))}