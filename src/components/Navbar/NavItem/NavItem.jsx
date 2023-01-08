import { Link } from 'react-router-dom';

export default function NavItem({ title, path }) {
  return (
    <li className="nav-item">
      <Link to={path || '*'} className="nav-link">
        {title || 'default'}
      </Link>
    </li>
  );
}
