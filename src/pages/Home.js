import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewsCard from '../components/news/NewsCard';
import { searchIndexedNews } from '../service/newsService';
import NewsFilter from '../components/filter/NewsFilter';
import Header from '../components/header/Header'; // ✅ Header 추가

function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const filterState = useSelector((state) => state.newsFilter);
  const { sortOption, selectedCategory, selectedPress } = filterState;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await searchIndexedNews(filterState);
        setNewsList(data.data);
      } catch (error) {
        console.error('❌ 필터 적용 중 오류:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [sortOption, selectedCategory, selectedPress]);

  const handleSearchSubmit = async () => {
    console.log('📡 쿼리 + 엔터로 요청 (React → Flask):', filterState);

    try {
      setLoading(true);
      const data = await searchIndexedNews(filterState);
      setNewsList(data.data);
    } catch (error) {
      console.error('❌ 검색 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ✅ 헤더를 Home 안으로 옮겨서 onSearchSubmit 넘긴다 */}
      <Header onSearchSubmit={handleSearchSubmit} />

      <div
        style={{
          width: '100%',
          paddingLeft: '148px',
          paddingRight: '148px',
          paddingTop: '40px',
        }}
      >
        {/* 필터 버튼 */}
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
          <NewsFilter onSearchSubmit={handleSearchSubmit} />
        </div>

        {/* 현재 필터 상태 출력 */}
        <div
          style={{
            background: '#f8f9fa',
            padding: '16px',
            borderRadius: '8px',
            marginBottom: '32px',
            fontFamily: 'monospace',
            fontSize: '14px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {JSON.stringify(filterState, null, 2)}
        </div>

        {/* 뉴스 카드 리스트 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {loading ? (
            <p>뉴스 로딩 중...</p>
          ) : newsList.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            newsList.map((news, index) => (
              <div key={news._id || index}>
                <NewsCard news={news} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
