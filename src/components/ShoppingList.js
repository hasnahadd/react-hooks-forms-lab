import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [itemsList, setItemsList] = useState(items);
console.log(search);
function handelChange(product){
  setSearch(product);


}
function SubmitItem(newItem){
  setItemsList([...itemsList, newItem]);}

const itemsToDisplay = itemsList.filter(item => {
  const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
  const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
  return matchesCategory && matchesSearch;
});


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

 


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={SubmitItem}/>
      <Filter onCategoryChange={handleCategoryChange}  search={search} onSearchChange={handelChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
         

      </ul>
    </div>
  );
}

export default ShoppingList;
