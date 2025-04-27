// src/components/filter/NewsFilter.jsx

// React 및 상태 관리 import
import React from 'react'; // React 기본 라이브러리 
import { useDispatch, useSelector } from 'react-redux'; // Redux 전역 상태 관리 훅

// 컴포넌트 관련 import
import FilterButton from '../button/FilterButton'; // 필터 버튼 컴포넌트
import NewsFilterModalContent from './NewsFilterModalContent'; // 뉴스 필터 모달 컨텐츠 컴포넌트

// 액션 함수 import
import { 
  setSortOption, // 정렬 옵션 설정 액션
  setSelectedCategory, // 선택된 카테고리 설정 액션
  setKeyword, // 키워드 설정 액션
  setSelectedPress // 선택된 언론사 설정 액션
} from '../../store/newsFilterSlice'; 

function NewsFilter() {
  // Redux 디스패치 훅
  const dispatch = useDispatch();

  // Redux 상태 조회 (뉴스 필터 관련 상태 가져오기)
  const { 
    sortOption, // 현재 선택된 정렬 옵션
    selectedCategory, // 현재 선택된 카테고리
    keyword, // 키워드
    selectedPress // 선택된 언론사 목록 
  } = useSelector((state) => state.newsFilter);


  // 필터 변경 시 전역 상태를 업데이트
  const handleFilterChange = (updatedFilters) => {
    // 정렬 옵션(sortOption)이 변경된 경우 업데이트
    if (updatedFilters.sortOption !== undefined) {
      dispatch(setSortOption(updatedFilters.sortOption));
    }
    // 선택된 카테고리(selectedCategory)가 변경된 경우 업데이트
    if (updatedFilters.selectedCategory !== undefined) {
      dispatch(setSelectedCategory(updatedFilters.selectedCategory));
    }
    // 키워드(keyword)가 변경된 경우 업데이트
    if (updatedFilters.keyword !== undefined) {
      dispatch(setKeyword(updatedFilters.keyword));
    }

    // 선택된 언론사 목록(selectedPress)이 변경된 경우 업데이트
    if (updatedFilters.selectedPress !== undefined) {
      dispatch(setSelectedPress(updatedFilters.selectedPress));
    }
  };

  return (
    <FilterButton
      buttonLabel="필터" // 버튼에 표시될 텍스트
      modalTitle="뉴스 필터 설정" // 모달 제목
      modalHeight="500px" // 모달 높이 설정
    >
      <NewsFilterModalContent
        filters={{ 
          sortOption, // 현재 선택된 정렬 옵션
          selectedCategory, // 현재 선택된 카테고리
          keyword, // 키워드
          selectedPress // 현재 선택된 언론사 리스트
        }}
        onChange={handleFilterChange} // 필터 변경 시 호출할 함수
      />
    </FilterButton>
  );
}

export default NewsFilter;
