import React, { useState } from 'react';
import '../../styles/_newsCard.scss';

function NewsCard({ news }) {
  // ✅ 빈 문자열 ''을 맨 앞에 추가
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

      {/* 썸네일 전용 배경 */}
      <div
        className="news-card-image"
        style={{
          backgroundImage: `url(${news.thumbnail || '/img/default-thumbnail.png'})`,
          filter: currentIndex === 0 ? 'brightness(100%)' : 'brightness(50%)',
        }}
      ></div>

      {/* 텍스트 및 버튼 영역 */}
      <div className="news-card-content">
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
          <img className="press-logo" src={news.press?.logo} />
          <div className="press-name">{news.press?.name}</div>
        </div>
        <div className="news-title">{news.title}</div>
        <div className="news-date">{news.published_at || '발행일자'}</div>
        <div className="news-keywords">
          {news.keywords?.map((kw, idx) => (
            <span key={idx} className="keyword">#{kw}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
