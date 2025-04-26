// src/components/filter/NewsFilter.jsx

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterButton from '../button/FilterButton'; // 필터 버튼
import NewsFilterModalContent from './NewsFilterModalContent'; // 모달 안 컨텐츠
import { 
  setSortOption, 
  setSelectedCategory, 
  setKeyword,
  setSelectedPress // ✅ 나중에 추가된 언론사 선택 액션
} from '../../store/newsFilterSlice'; // 필터 관련 액션

function NewsFilter() {
  const dispatch = useDispatch();
  const { sortOption, selectedCategory, keyword, selectedPress } = useSelector(
    (state) => state.newsFilter
  );

  const handleFilterChange = (updatedFilters) => {
    // 들어온 updatedFilters 객체를 기준으로 각각 dispatch
    if (updatedFilters.sortOption !== undefined) {
      dispatch(setSortOption(updatedFilters.sortOption));
    }
    if (updatedFilters.selectedCategory !== undefined) {
      dispatch(setSelectedCategory(updatedFilters.selectedCategory));
    }
    if (updatedFilters.keyword !== undefined) {
      dispatch(setKeyword(updatedFilters.keyword));
    }
    if (updatedFilters.selectedPress !== undefined) {
      dispatch(setSelectedPress(updatedFilters.selectedPress));
    }
  };

  return (
    <FilterButton
      buttonLabel="필터"
      modalTitle="뉴스 필터 설정"
      modalHeight="500px"
    >
      <NewsFilterModalContent
        filters={{ sortOption, selectedCategory, keyword, selectedPress }}
        onChange={handleFilterChange}
      />
    </FilterButton>
  );
}

export default NewsFilter;
