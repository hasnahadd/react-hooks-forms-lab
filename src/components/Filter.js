import React from "react";
import { useState } from "react";

function Filter({ onCategoryChange,onSearchChange , search  }) {
 const [product ,setProducts]= useState('');
function handelProducts(e){
const NewItem=e.target.value;

setProducts(NewItem);
onSearchChange(NewItem);
 
}

  return (
    <div className="Filter">
      <input type="text" name="search" onChange={handelProducts} value={search}  placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option> 
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
