// React Router 관련 import
import { useLocation } from 'react-router-dom';

// 컴포넌트 import
import NavItem from './NavItem';

function Navbar() {
  const location = useLocation();

  const categories = [
    { name: '메인', path: '/' },
    { name: '정치', path: '/politics' },
    { name: '경제', path: '/economy' },
    { name: '사회', path: '/society' },
    { name: '생활/문화', path: '/life' },
    { name: 'IT/과학', path: '/it' },
    { name: '세계', path: '/world' },
  ];

  return (
    <nav className="navbar-tab-wrapper">
      <ul className="navbar-tab-list">
        {categories.map((cat) => (
          <NavItem
            key={cat.path}
            to={cat.path}
            label={cat.name}
            isActive={location.pathname === cat.path}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
