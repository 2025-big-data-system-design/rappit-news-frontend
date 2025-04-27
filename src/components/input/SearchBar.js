// React 관련 improt
import React from 'react'; // React 기본 import
// 아이콘 import
import { FaSearch } from 'react-icons/fa'; // 돋보기 아이콘 import

function SearchBar({
  value, // 검색창 입력값
  onChange, // 검색어 입력 변경 핸들러
  placeholder = "검색어를 입력하세요...", // 입력창 안내 문구 (기본값 설정)
  showModeSelector = false, // 모드 선택 드롭다운 표시 여부
  modes = [], // 선택 가능한 검색 모드 목록 
  selectedMode, // 현재 선택된 검색 모드
  onModeChange, // 검색 모드 변경 핸들러
  onSubmit, // 검색 제출 핸들러
}) {
  // 키보드 입력 핸들러
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') { // Enter 키를 눌렀을 경우
      // 기본 Enter 동작(폼 제출 등) 방지
      e.preventDefault();
      if (onSubmit) { // onSubmit 핸들러가 존재하는 
        onSubmit(); // 검색 요청 실행
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
        value={value} // 입력창의 현재 값
        onChange={(e) => onChange(e.target.value)} // 입력값이 변경될 때마다 외부 onChange 호출 
        placeholder={placeholder} // 입력창 placeholder 텍스트
        onKeyDown={handleKeyDown} // 키보드 이벤트 핸들러 (enter 감지)
      />

      {/* 모드 선택 드롭다운 */}
      {showModeSelector && (
        <select
          className="mode-selector"
          value={selectedMode}
          onChange={(e) => onModeChange(e.target.value)} // 모드 변경 시 호출되는 핸들러
        >
          {/* 모드 목록 렌더링 */}
          {modes.map((mode) => (
            <option 
              key={mode.value} // 각 모드의 고유 식별자
              value={mode.value} // 옵션의 실제 값
            >
              {/* 사용자에게 보여지는 라벨 */}
              {mode.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default SearchBar;
