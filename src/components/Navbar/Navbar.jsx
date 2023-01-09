import { Link } from 'react-router-dom';
import { internalPaths } from '../../utils/constants';
import NavItem from './NavItem/NavItem';

export default function Navbar() {
  const { contact, home } = internalPaths;
  const buttonBurger = () => (
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  );
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to={home} className="navbar-brand">
          RickAndMortyGraphQl
        </Link>
        {buttonBurger()}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <NavItem title={'home'} path={home} />
            <NavItem title={'contact'} path={contact} disabled={true} />
          </ul>
        </div>
      </div>
    </nav>
  );
}
