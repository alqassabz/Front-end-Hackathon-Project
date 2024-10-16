import Ghosts from "./Ghosts";

const Rides = ({ rides }) => {
  return (
    <>
    <div className="halloween-theme">
      <h1 className="spooky-title">Haunted Rollercoasters</h1>
      <ul className="rides-container">
        {rides ? (
          rides.map((ride) => (
            <div className="ride-box spooky-box" key={ride.id}>
              {/* Adding Blood Drops */}
              {[...Array(20)].map((_, index) => (
                <div className={`blood-drop drop-${index + 1}`} key={index}></div>
              ))}
              
              <div className="ride-content spooky-content">
                <h3>{ride.title}</h3>
                <img src="https://www.parksavers.com/wp-content/uploads/2021/12/Incredicoaster-scaled.jpg" alt="Poster" />
                <h5>Height Limit: {ride.heightLimit} meters</h5>
                <h5>Capacity: {ride.capacityLimit}</h5>
                <h5>Death Risk: {ride.deathRisk}%</h5>
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
  );
};

export default Rides;
