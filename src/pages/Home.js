// React 관련 import
import React, { useEffect, useState } from 'react';

// 컴포넌트 import
import Header from '../components/common/header/Header';
import NewsCard from '../components/news/NewsCard';

// API 호출 함수 import
import { fetchAllIndexedNews } from '../service/newsService';

function Home() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const requestUrl = `/api/news/indexed/all`;
      console.log('📡 실제 요청 URL (React → Flask 프록시):', requestUrl);

      try {
        const data = await fetchAllIndexedNews();
        setNewsList(data.data);
      } catch (error) {
        console.error('❌ 뉴스 데이터를 불러오는 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      style={{
        width: '100%',
        paddingLeft: '148px',
        paddingRight: '148px',
        paddingTop: '40px',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',             // ✅ 여기서 gap 설정
        justifyContent: 'flex-start' // ✅ 카드 왼쪽 정렬
      }}
    >
      {loading ? (
        <p>뉴스 로딩 중...</p>
      ) : (
        newsList.map((news, index) => (
          <div
            key={news._id || index}
            
          >
            <NewsCard news={news} />
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
