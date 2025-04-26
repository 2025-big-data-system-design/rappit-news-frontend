// React 관련 import
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// 아이콘 import
import { FaCog, FaSearch } from 'react-icons/fa';

// 컴포넌트 import
import Navbar from '../navigation/Navbar';

function Header() {
  const location = useLocation();
  const isExcluded = location.pathname.startsWith('/perf'); // perf로 시작하는 경로는 제외

  return (
    <>
      <header className="header-wrapper">
        {/* 로고 */}
        <Link className="logo" to="/">
          RAPPIT NEWS
        </Link>

        {/* 검색창 */}
        <div className="search-container">
          <div className="search-bar-wrapper">
            <FaSearch className="search-icon" />
            <input type="text" placeholder="검색어를 입력하세요..." />
          </div>
        </div>

        {/* 설정 아이콘 */}
        <div className="setting-icon">
          <FaCog />
        </div>
      </header>

      {/* perf 페이지가 아닐 경우에만 Navbar 표시 */}
      {!isExcluded && <Navbar />}
    </>
  );
}

export default Header;
