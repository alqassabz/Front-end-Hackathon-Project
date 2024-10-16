import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGhost } from '@fortawesome/free-solid-svg-icons'; // Change this to the desired icon


const Ghosts = () => {
  const numberOfGhosts = 10;

  return (
    <div className="ghost-container">
      {Array.from({ length: numberOfGhosts }).map((_, index) => (
        <span
          key={index}
          className="ghost"
          style={{ left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 2}s` }}
        >
          <FontAwesomeIcon icon={faGhost} className="ghost-icon" />
        </span>
      ))}
    </div>
  );
};

export default Ghosts;
