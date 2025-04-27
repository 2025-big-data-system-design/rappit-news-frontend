// React 및 라우터 관련 import
import React from 'react'; // React 기본 라이브러리
import { Link, useLocation } from 'react-router-dom'; // React Router에서 링크 이동 및 현재 경로 확인

// Redux 관련 import
import { useSelector, useDispatch } from 'react-redux'; // Redux 전역 상태 조회 및 액션 디스패치
import { setQuery, setQueryMode } from '../../store/newsFilterSlice'; // 뉴스 필터 상태 수정 액션

// 아이콘 import
import { FaCog } from 'react-icons/fa'; // 설정 아이콘 (톱니바퀴)

// 컴포넌트 import
import CategoryFilterBar from '../navigation/CategoryFilterBar'; // 카테고리 필터 바 컴포넌트
import SearchBar from '../input/SearchBar'; // 검색창 컴포넌트

function Header({ 
  onSearchSubmit // 검색 실행 함수
}) {
  const location = useLocation(); // 현재 경로 정보 가져오기
  // 특정 경로에서는 NavBar 제외할지 판단
  const isExcluded = location.pathname.startsWith('/perf');

  // Redux 액션 디스패치 함수
  const dispatch = useDispatch();

  // 전역 상태에서 검색어(query)와 검색 모드(queyMode) 가져오기
  const { query, queryMode } = useSelector((state) => state.newsFilter);

  // 검색 모드에 따라 placeholder 문구 반환
  const getPlaceholder = (mode) => {
    switch (mode) {
      case 'title':
        return '제목에서 검색하세요'; // 제목만 검색
      case 'content':
        return '내용에서 검색하세요'; // 내용만 검색
      case 'title_content':
      default:
        return '제목+내용에서 검색하세요'; // 제목+내용 검색
    }
  };

  return (
    <>
      <header className="header-wrapper">
        {/* 로고 */}
        <Link className="logo" to="/">
          RAPPIT NEWS
        </Link>

        {/* 검색창 */}
        <div className="search-container">
          <SearchBar
            value={query} // 현재 입력된 검색어 값
            
            // 검색어 입력 시 전역 상태 업데이트
            onChange={(newQuery) => dispatch(setQuery(newQuery))}
            
            // 현재 모드에 맞는 placeholder 설정
            placeholder={getPlaceholder(queryMode)}
            
            // 검색 모드 선택 드롭다운 표시 여부
            showModeSelector={true}

            // 선택 가능한 검색 모드 리스트
            modes={[
              { label: "제목+내용", value: "title_content" },
              { label: "제목만", value: "title" },
              { label: "내용만", value: "content" }
            ]}

            // 현재 선택된 검색 모드
            selectedMode={queryMode}

            // 검색 모드 변경 시 전역 상태 업데이트
            onModeChange={(newMode) => dispatch(setQueryMode(newMode))}

            // 엔터 입력 시 검색 실행 함수 호출
            onSubmit={onSearchSubmit}
          />
        </div>

        {/* 설정 아이콘 */}
        <div className="setting-icon">
          <FaCog />
        </div>
      </header>
        
      {/* 성능 측정 페이지가 아닌 경우에만 카테고리 필터 바 표시 */}
      {!isExcluded && <CategoryFilterBar />}
    </>
  );
}

export default Header;
