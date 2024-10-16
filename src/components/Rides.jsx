import Ghosts from "./Ghosts";

const Rides = ({ rides }) => {
  return (
    <>
    <div className="rides-container">
      <h1 className="spooky-title">Haunted Rollercoasters</h1>
      <ul className="rides-list">
        {rides ? (
          rides.map((ride) => (
            <div className="ride-box spooky-box ride-info" key={ride.id}>
              {/* Adding Blood Drops */}
              {[...Array(20)].map((_, index) => (
                <div className={`blood-drop drop-${index + 1}`} key={index}></div>
              ))}
              <div className="ride-image"><img src={ride.img} alt="" /></div>
              
              <div className="ride-details spooky-content">
                <h3>{ride.title}</h3>
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
