import Ghosts from "./Ghosts"

const Food = ({ foods }) => {
  return (
    <>
    <div className="rides-container">
      <h1 className="spooky-title">Food Vendors</h1>
      <ul className="rides-list">
        {foods ? (
          foods.map((food) => (
            <div className="ride-box spooky-box ride-info" key={food.id}>
              {/* Adding Blood Drops */}
              {[...Array(20)].map((_, index) => (
                <div className={`blood-drop drop-${index + 1}`} key={index}></div>
              ))}
              <div className="ride-image" ><img src={food.img} alt="" /></div>
              <div className="ride-details spooky-content">
                <h3>{food.name}</h3>
                <h5>Food Category: {food.type}</h5>
                <h5>Average Prices: {food.averagePrices}</h5>
                <h5>Vendor Name: {food.vendor}</h5>
                <h5>Location: {food.location}</h5>
              </div>
              </div>
           
          ))
        ) : (
          <h1>👻 No Rides Available!</h1>
        )}
      </ul>
    </div>
    <Ghosts />
    </>
  )
}

export default Food