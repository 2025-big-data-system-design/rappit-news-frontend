import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setQuery, setQueryMode } from '../../store/newsFilterSlice';

import { FaCog } from 'react-icons/fa';

import CategoryFilterBar from '../navigation/CategoryFilterBar';
import SearchBar from '../input/SearchBar';

function Header({ onSearchSubmit }) { // ✅ onSearchSubmit prop 받기
  const location = useLocation();
  const isExcluded = location.pathname.startsWith('/perf');

  const dispatch = useDispatch();
  const { query, queryMode } = useSelector((state) => state.newsFilter);

  const getPlaceholder = (mode) => {
    switch (mode) {
      case 'title':
        return '제목에서 검색하세요...';
      case 'content':
        return '내용에서 검색하세요...';
      case 'title_content':
      default:
        return '제목+내용에서 검색하세요...';
    }
  };

  return (
    <>
      <header className="header-wrapper">
        {/* 로고 */}
        <Link className="logo" to="/">
          RAPPIT NEWS
        </Link>

        {/* 검색창 */}
        <div className="search-container">
          <SearchBar
            value={query}
            onChange={(newQuery) => dispatch(setQuery(newQuery))}
            placeholder={getPlaceholder(queryMode)}
            showModeSelector={true}
            modes={[
              { label: "제목+내용", value: "title_content" },
              { label: "제목만", value: "title" },
              { label: "내용만", value: "content" }
            ]}
            selectedMode={queryMode}
            onModeChange={(newMode) => dispatch(setQueryMode(newMode))}
            onSubmit={onSearchSubmit}
          />
        </div>

        {/* 설정 아이콘 */}
        <div className="setting-icon">
          <FaCog />
        </div>
      </header>

      {!isExcluded && <CategoryFilterBar />}
    </>
  );
}

export default Header;
