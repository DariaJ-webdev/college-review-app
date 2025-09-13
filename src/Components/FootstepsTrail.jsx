import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';
import '../styles/footsteps.css';

function FootstepsTrail() {
 return (
    <div className="footsteps-container">
      {[...Array(7)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faShoePrints}
          className={`footsteps step-${i}`}
        />
      ))}
    </div>
  );
}


export default FootstepsTrail;
