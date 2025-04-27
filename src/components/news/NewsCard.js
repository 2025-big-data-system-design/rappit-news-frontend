// React 관련 import
import React, { useState } from 'react'; // React 및 useState 훅 import

// 컴포넌트 관련 import
import NewsKeywords from './NewsKeywords'; // 뉴스 키워드 뱃지 컴포넌트 improt

function NewsCard({ 
  news // 단일 뉴스 데이터
}) {
  // 문단 리스트 준비 (첫 번째 비어있는 문자열로 시작)
  const paragraphs = ['', ...(news.content?.paragraphs || [])];

  // 현재 보여줄 문단 인덱스 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 이전 문단으로 이동하는 핸들러
  const handlePrev = () => {
    // 인덱스를 감소시키고, 총 문단 수로 나눈 나머지로 순환 처리
    setCurrentIndex((prev) => (prev - 1 + paragraphs.length) % paragraphs.length);
  };

  // 다음 문단으로 이동하는 핸들러
  const handleNext = () => {
    // 인덱스를 증가시키고, 총 문단 수로 나눈 나머지로 순환 처리
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
  };

  return (
    // 뉴스 카드 전체 컨테이너
    <div className="news-card-wrapper">
      {/* 뉴스 요약문을 표시하는 헤더 영역 */}
      <div className="news-card-header">
        {/* 뉴스 요약 텍스트 */}
        <div className="news-summary">
          {news.summary}
        </div>
      </div>

      {/* 뉴스 썸네일 + 카드뉴스 */}
      <div className="news-card-content">
        {/* 뉴스 썸네일 이미지 (배경으로 설정) */}
        <div
          className="news-card-image"
          style={{
            backgroundImage: `url(${news.thumbnail || '/img/default-thumbnail.png'})`,
            filter: currentIndex === 0 ? 'brightness(100%)' : 'brightness(50%)',
          }}
        ></div>
        {/* 문단(paragraph)가 하나 이상 있을 떄만 표시 */}
        {paragraphs.length > 0 && (
          <div className="paragraph-slide">
            {/* 현재 인덱스가 0이 아닐 때만 왼쪽(이전) 화살표 버튼 표시 */}
            {currentIndex !== 0 && (
              <button className="arrow left" onClick={handlePrev}>‹</button>
            )}

            {/* 현재 선택된 문단 텍스트 표시 */}
            <div className="paragraph-text">
              {paragraphs[currentIndex]}
            </div>

            {/* 항상 오른쪽(다음) 화살표 버튼 표시 */}
            <button className="arrow right" onClick={handleNext}>›</button>
          </div>
        )}
      </div>
        
      {/* 카드 하단 영역 */}
      <div className="news-card-footer">
        {/* 언론사 정보 (로고 + 이름) */}
        <div className="press-info">
          {/* 언론사 이미지 */}
          <img className="press-logo" src={news.press?.logo} alt="언론사 로고" />
          {/* 언론사 이름 텍스트 */}
          <div className="press-name">{news.press?.name}</div>
        </div>

        {/* 뉴스 제목 */}
        <div className="news-title">{news.title}</div>

        {/* 뉴스 발행일자 */}
        <div className="news-date">{news.published_at || '발행일자'}</div>

        {/* 뉴스 키워드 목록 컴포넌트 */}
        <NewsKeywords 
          keywords={news.keywords} // 뉴스에 연결된 키워드 목록
        />
      </div>
    </div>
  );
}

export default NewsCard;
