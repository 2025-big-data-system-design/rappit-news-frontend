// src/components/common/input/SearchBar.jsx

import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar({
  value,
  onChange,
  placeholder = "검색어를 입력하세요...",
  showModeSelector = false,
  modes = [],
  selectedMode,
  onModeChange,
  onSubmit, // ✅ 엔터 키 눌렀을 때 호출할 함수
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (onSubmit) {
        onSubmit(); // ✅ 엔터 누르면 onSubmit 호출
      }
    }
  };

  return (
    <div className="search-bar-wrapper">
      {/* 돋보기 아이콘 */}
      <FaSearch className="search-icon" />

      {/* 검색어 입력창 */}
      <input
        type="text"
        className="search-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown} // ✅ 엔터 키 이벤트 연결
      />

      {/* 모드 선택 드롭다운 */}
      {showModeSelector && (
        <select
          className="mode-selector"
          value={selectedMode}
          onChange={(e) => onModeChange(e.target.value)}
        >
          {modes.map((mode) => (
            <option key={mode.value} value={mode.value}>
              {mode.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SearchBar;
