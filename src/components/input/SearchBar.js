import React from 'react'; // React 기본 import

function SearchBar() {
  return (
    <div>
      <input
        type="text"
        className="form-control"
        placeholder="검색어를 입력하세요..."
      />
    </div>
  );
}

export default SearchBar;
