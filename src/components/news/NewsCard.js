import React, { useState } from 'react';
import '../../styles/_newsCard.scss';
import NewsKeywords from './NewsKeywords'; // ✅ 추가

function NewsCard({ news }) {
  const paragraphs = ['', ...(news.content?.paragraphs || [])];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + paragraphs.length) % paragraphs.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % paragraphs.length);
  };

  return (
    <div className="news-card-wrapper">
      <div className="news-card-header">
        <div className="news-summary">
          {news.summary}
        </div>
      </div>

      {/* 텍스트 및 버튼 영역 */}
      <div className="news-card-content">
        <div
          className="news-card-image"
          style={{
            backgroundImage: `url(${news.thumbnail || '/img/default-thumbnail.png'})`,
            filter: currentIndex === 0 ? 'brightness(100%)' : 'brightness(50%)',
          }}
        ></div>
        {paragraphs.length > 0 && (
          <div className="paragraph-slide">
            {currentIndex !== 0 && (
              <button className="arrow left" onClick={handlePrev}>‹</button>
            )}
            <div className="paragraph-text">
              {paragraphs[currentIndex]}
            </div>
            <button className="arrow right" onClick={handleNext}>›</button>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="news-card-footer">
        <div className="press-info">
          <img className="press-logo" src={news.press?.logo} alt="언론사 로고" />
          <div className="press-name">{news.press?.name}</div>
        </div>
        <div className="news-title">{news.title}</div>
        <div className="news-date">{news.published_at || '발행일자'}</div>

        {/* ✅ 키워드 컴포넌트로 교체 */}
        <NewsKeywords keywords={news.keywords} />

      </div>
    </div>
  );
}

export default NewsCard;
