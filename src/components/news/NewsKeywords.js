// NewsKeywords.jsx
import React from 'react';

// 뉴스 키워드 리스트를 렌더링하는 컴포넌트
function NewsKeywords({ keywords }) {
  if (!keywords || keywords.length === 0) return null;

  // 버튼 클릭 핸들러
  const handleKeywordClick = (keyword) => {
    console.log('버튼 클릭:', keyword);
  };

  return (
    <div className="news-keywords d-flex flex-wrap gap-2">
      {keywords.map((kw, idx) => (
        <button
          key={idx}
          type="button"
          className="btn btn-dark btn-sm rounded-pill"
          onClick={() => handleKeywordClick(kw)}
          style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} // 살짝 밝은 검정 계열
        >
          #{kw}
        </button>
      ))}
    </div>
  );
}

export default NewsKeywords;
