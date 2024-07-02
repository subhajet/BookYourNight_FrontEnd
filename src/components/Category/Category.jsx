import axios from "axios";
import { useEffect, useState } from "react";

import "./Category.css";

export const Category = () => {
  const [categories, setCategories] = useState([]);
  const [numberofCategoryToshow, setNumberofCategoryToshow] = useState(0);

  const handleShowMoreRightClick = () => {
    setNumberofCategoryToshow((pre) => pre + 10);
  };
  const handleShowMoreLeftClick = () => {
    handleShowMoreLeftClick((pre) => pre - 10);
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
  return (
    <section className="categories d-flex align-center gap-large cursor-pointer">
      <button onClick={handleShowMoreLeftClick}>
        <span class="material-symbols-outlined">chevron_left</span>
      </button>
      {categories &&
        categories.map(({ category, index }) => (
            <span key={category.id || category.name || index}>{category} </span>
        ))}
      <button onClick={handleShowMoreRightClick}>
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </section>
  );
};

