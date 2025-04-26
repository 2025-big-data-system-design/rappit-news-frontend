import { Link } from 'react-router-dom';

function NavItem({ to, label, isActive }) {
  return (
    <li className={`nav-tab-item${isActive ? ' active' : ''}`}>
      <Link to={to} className={isActive ? 'active' : ''}>
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
