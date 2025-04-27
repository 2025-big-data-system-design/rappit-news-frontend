// React 및 상태 관리 import
import React, { useEffect, useState } from 'react'; // React 기본 훅 사용
import { useSelector } from 'react-redux'; // Redux 전역 상태 조회

// 컴포넌트 import  
import Header from '../components/header/Header'; // 상단 헤더 컴포넌트 
import NewsFilter from '../components/filter/NewsFilter'; // 뉴스 필터 컴포넌트
import NewsCard from '../components/news/NewsCard'; // 뉴스 카드 컴포넌트

// 서비스 함수 import
import { searchIndexedNews } from '../service/newsService'; // 뉴스 검색 API 함수

function Home() {
  const [newsList, setNewsList] = useState([]); // 뉴스 목록 상태 (검색 결과 저장)
  const [loading, setLoading] = useState(false); // 로딩 상태

  // 전역 필터 상태 가져오기
  const filterState = useSelector((state) => state.newsFilter);

  // 전역 필터 상태 중 필요한 값만 구조 분해
  const { 
    sortOption, // 정렬 옵션
    selectedCategory, // 선택된 카테고리
    selectedPress // 선택된 언론사 목록
  } = filterState;

  // 필터(정렬, 카테고리, 언론사) 변경 시 뉴스 검색 실행
  useEffect(() => {
    // 비동기 데이터 요청 함수 정의
    const fetchData = async () => {
      try {
        setLoading(true); // 로딩 상태 시작
        
        // 필터 기준으로 뉴스 검색
        const data = await searchIndexedNews(filterState);
        setNewsList(data.data); // 검색 결과 저장
      } catch (error) {
        // 오류 로그 출력
        console.error('❌ 필터 적용 중 오류:', error);
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData(); // 데이터 요청 함수 호출
  }, [sortOption, selectedCategory, selectedPress]);

  // 검색어 입력 후 엔터를 눌렀을 때 실행
  // 검색은 자동 요청이 아니라 엔터를 눌렀을 때 요청하도록 하기 위함
  const handleSearchSubmit = async () => {
    // 현재 필터 상태 출력
    console.log('📡 쿼리 + 엔터로 요청 (React → Flask):', filterState);

    try {
      setLoading(true); // 로딩 상태 시작
      const data = await searchIndexedNews(filterState); // 필터 기준으로 뉴스 검색
      setNewsList(data.data); // 검색 결과 저장
    } catch (error) {
      console.error('❌ 검색 중 오류 발생:', error); // 오류 로그 출력
    } finally { 
      setLoading(false); // 로딩 상태 종료
    }
  };

  return (
    <>
      {/* 헤더 영역 (검색창 포함) */}
      <Header 
        // 검색창에서 엔터를 눌렀을 때 검색 실행
        onSearchSubmit={handleSearchSubmit}
      />

      <div className="home-wrapper">
        {/* 필터 버튼 */}
        <div className="filter-button-wrapper">
          <NewsFilter 
            // 필터 창에서 상태 업데이트 시 검색 실행
            onSearchSubmit={handleSearchSubmit} 
          />
        </div>

        {/* 현재 필터 상태 출력 */}
        <div className="filter-state-box">
          {/* 현재 필터 상태를 2칸 들여쓰기한 JSON 문자열로 변환하여 출력 */}
          {JSON.stringify(filterState, null, 2)}
        </div>

        {/* 뉴스 카드 리스트 */}
        <div className="news-list-wrapper">
          {loading ? (
            <p>뉴스 로딩 중...</p>
          ) : newsList.length === 0 ? (
            <p>검색 결과가 없습니다.</p>
          ) : (
            // 뉴스 카드들을 렌더링
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
