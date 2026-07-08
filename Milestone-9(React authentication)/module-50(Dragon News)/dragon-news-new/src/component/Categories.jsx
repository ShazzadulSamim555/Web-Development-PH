import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);

  console.log(category);
  return (
    <div>
      <h2 className=" text-xl font-bold">All Categories ({category.length})</h2>

      <div className="grid grid-cols-1 gap-3 my-2">
        {category.map((categoryy) => (
          <NavLink
          key={categoryy.id}
          to={`category/${categoryy.id}`}
            className={({ isActive }) =>
          isActive 
            ? "btn font-bold bg-base-300" 
            : "btn bg-white hover:bg-base-200"
        }
          >
            {categoryy.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
