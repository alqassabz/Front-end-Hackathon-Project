
const Rides = ({ rides }) => {
  return (
    <div className="rides-container">
      <h1>Rollercoasters</h1>
      <ul>
        {rides? (rides.map((ride) => (
          <li className="rides" key={ride.id} id={ride.id}>
            <div className="ride-info">
              <h3>RollerCoaster Name: {ride.title}</h3>
              <h5>Height Limit: {ride.heightLimit}</h5>
              <h5>Capacity: {ride.capacityLimit}</h5>
              <h5>Death Risk: {ride.deathRisk}</h5>
            </div>
          </li>))) : <h1>hi</h1>}
        
      </ul>
    </div>
  )
}

export default Rides
