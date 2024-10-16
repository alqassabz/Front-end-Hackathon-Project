import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      await axios.delete(`http://localhost:3001/${itemCategory}/${itemId}`)
      setItems(items.filter(item => item._id !== itemId));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>Shop</h1>
      <div>
        <button className='clothes' onClick={() => handleClick('clothes')}>Clothes</button>
        <button className='gifts' onClick={() => handleClick('gifts')}>Gifts</button>
      </div>
      <h2>{itemCategory.charAt(0).toUpperCase() + itemCategory.slice(1)}</h2>
      <ul>
        {items.map(item => (
          <li key={item._id}>
            {itemCategory === 'clothes' ? (
              <>
                <p>Name: {item.name}</p>
                <img className="Clothing_items" src={item.image} alt={item.name} />
                <p>Size: {item.size}</p>
                <p>Price: ${item.price}</p>
                
              </>
            ) : (
              <>
                <p>Name: {item.name}</p>
                <img className="Gift_items" src={item.image} alt={item.name} />
                <p>Price: ${item.price}</p>
                
              </>
            )}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;