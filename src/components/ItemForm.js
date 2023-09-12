import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Produce',
  });

  function handelinput(event) {
    const name = event.target.name;
    let value = event.target.value;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: uuid(),
      name: formData.name,
      category: formData.category,
    };

    onItemFormSubmit(newItem);

    setFormData({
      name: "",
      category: "Produce", 
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handelinput} />
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handelinput}> 
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
