import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav>
      <div className="logo">
        <h1>logo</h1>
        <p>SPACE TRAVELLERS HUB</p>
      </div>
      <div className="navigation">
        <Link className="rocket" to="/">
          Rocket
        </Link>
        <Link className="mission" to="/Missions">
          Missions
        </Link>
        <Link className="profile" to="/MyProfile">
          My Profile
        </Link>
      </div>
    </nav>
  </header>
);
export default Nav;
