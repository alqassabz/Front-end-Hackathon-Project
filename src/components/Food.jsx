const Food = ({ foods }) => {
  return (
    <div className="food-container">
      <h1>Food Vendors</h1>
      <ul>
        {foods ? (
          foods.map((food) => (
            <li className="foods" key={food.id} id={food.id}>
              <div className="food-image" style={{backgroundImage: `url(placeholder-image-url-for-${food.name})`}}></div>
              <div className="food-info">
                <h3>{food.name}</h3>
                <h5>Food Category: {food.type}</h5>
                <h5>Average Prices: {food.averagePrices}</h5>
                <h5>Vendor Name: {food.vendor}</h5>
                <h5>Location: {food.location}</h5>
              </div>
            </li>
          ))
        ) : (
          <li>No foods available</li>
        )}
      </ul>
    </div>
  )
}

export default Food