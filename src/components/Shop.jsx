import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Ghosts from "./Ghosts"

const Shop = () => {
  const [items, setItems] = useState([]);
  const [itemCategory, setItemCategory] = useState('clothes'); // Default to 'clothes'

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/${itemCategory}`);
        setItems(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    getItems();
  }, [itemCategory]);

  const handleClick = (category) => {
    setItemCategory(category);
  };

  const handleDelete = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3001/${itemCategory}/${itemId}`);
      setItems(items.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <>
    <div className="shop-container">
      <h1 className="shop-title">🕷️ Spooky Shop 🕷️</h1>
      <div className="category-buttons">
        <button className='category-button clothes' onClick={() => handleClick('clothes')}>Clothes</button>
        <button className='category-button gifts' onClick={() => handleClick('gifts')}>Gifts</button>
      </div>
      <h2 className="item-category-title">{itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}</h2>
      <ul className="item-list">
        {items.map(item => (
          <li key={item._id} className="item-card spooky-box">
            <div className="item-details">
              <h3>Name: {item.name}</h3>
              <img className="item-image" src={item.image} alt={item.name} />
              {itemCategory === 'clothes' && <p>Size: {item.size}</p>}
              <p>Price: ${item.price}</p>
            </div>
            <button className="delete-button" onClick={() => handleDelete(item._id)}>🗑️ Delete</button>
          </li>
        ))}
      </ul>
    </div><Ghosts />
    </>
  );
};

export default Shop;
