const Rides = ({ rides }) => {
  return (
    <div className="rides-container">
      <h1>Theme Park Rides</h1>
      <ul className="rides-list">
        {rides ? (
          rides.map((ride) => (
            <li className="ride-info" key={ride.id} id={ride.id}>
              <div className="ride-image" style={{backgroundImage: `url(placeholder-image-url-for-${ride.title})`}}></div>
              <div className="ride-details">
                <h3>{ride.title}</h3>
                <h5>Height Limit: {ride.heightLimit} meters</h5>
                <h5>Capacity: {ride.capacityLimit} riders</h5>
                <h5>Death Risk: {ride.deathRisk}</h5>
              </div>
            </li>
          ))
        ) : (
          <li>No rides available</li>
        )}
      </ul>
    </div>
  )
}

export default Rides