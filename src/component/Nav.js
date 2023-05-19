import { Link } from 'react-router-dom';

const Nav = () => (
  <header>
    <nav className="nav_bar">
      <div className="logo_head">
        <img src="/images/rocket.jpeg" alt="logo" className="logo" />
        <p>Space Travelers&apos; Hub</p>
      </div>
      <div className="navigation">
        <Link className="rocket" to="/">
          Rocket
        </Link>
        <Link className="mission" to="/Missions">
          Missions
        </Link>
        {' '}
        |
        <Link className="profile" to="/MyProfile">
          My Profile
        </Link>
      </div>
    </nav>
  </header>
);

export default Nav;
