// React 관련 import
import React from 'react'; // React 컴포넌트 작성에 필요한 기본 라이브러리

function NewsKeywords({ 
  keywords // 뉴스에 연결된 키워드 목록
}) {
  // 키워드가 없으면 렌더링하지 않음
  if (!keywords || keywords.length === 0) return null;

  // 버튼 클릭 핸들러
  const handleKeywordClick = (keyword) => {
    // 클릭된 키워드를 콘솔에 출력
    console.log('버튼 클릭:', keyword);
  };

  return (
    // 키워드 버튼 전체 컨테이너
    <div className="news-keywords d-flex flex-wrap gap-2">
      {/* 키워드 리스트를 순회하며 버튼 생성 */}
      {keywords.map((kw, idx) => (
        <button
          key={idx} // 각 버튼에 고유 key 부여
          type="button" // 버튼 타입 지정
          className="btn btn-dark btn-sm rounded-pill" // Bootstrap 클래스 지정
          onClick={() => handleKeywordClick(kw)} // 버튼 클릭 시 해당 키워드 핸들러 호출
          style={{ backgroundColor: '#343a40', borderColor: '#343a40' }} // 살짝 밝은 검정 계열
        >
          #{kw} {/* 버튼 텍스트로 키워드 표시 */}
        </button>
      ))}
    </div>
  );
}

export default NewsKeywords;
