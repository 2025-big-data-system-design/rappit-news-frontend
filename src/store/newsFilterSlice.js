// Redux Toolkit 관련 import
import { createSlice } from '@reduxjs/toolkit'; // slice(리듀서 + 엑션 생성)를 만들기 위한 함수

// 뉴스 필터 상태 초기값 설정
const initialState = {
  sortOption: '최신순', // 정렬 옵션   
  selectedCategory: '전체', // 선택된 카테고리 (예: 정치, 경제, 사회 등)
  keyword: '', // 설정 키워드
  selectedPress: [], // 선택된 언론사 목록
  query: '', // 뉴스 본문/제목 검색어
  queryMode: 'title_content', // 검색 모드 (제목+내용, 제목만, 내용만)
};

// 뉴스 필터 관련 slice(리듀서 + 액션) 생성
const newsFilterSlice = createSlice({
  name: 'newsFilter', // slice 이름
  initialState, // 초기 상태값

  reducers: {
    // 정렬 옵션 변경  
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
    
    // 선택된 카테고리 변경
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    
    // 키워드 설정
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    
    // 선택된 언론사 목록 설정
    setSelectedPress(state, action) {
      state.selectedPress = action.payload;
    },
    
    // 검색 쿼리 문자열 설정
    setQuery(state, action) {
      state.query = action.payload;
    },
    
    // 검색 모드 설정 (제목+내용, 제목만, 내용만)
    setQueryMode(state, action) {
      state.queryMode = action.payload;
    },
    
    // 모든 필터 상태 초기화 (초기값을 되돌림)
    resetNewsFilters(state) {
      state.sortOption = initialState.sortOption; // 정렬 옵션 초기화
      state.selectedCategory = initialState.selectedCategory; // 선택된 카테고리 초기화
      state.keyword = initialState.keyword; // 키워드 초기화
      state.selectedPress = initialState.selectedPress; // 선택된 언론사 목록 초기화
      state.query = initialState.query; // 검색 쿼리 초기화
      state.queryMode = initialState.queryMode; // 검색 모드 초기화
    },
  },
});

export const {
  setSortOption,
  setSelectedCategory,
  setKeyword,
  setSelectedPress,
  setQuery,        
  setQueryMode,    
  resetNewsFilters,
} = newsFilterSlice.actions;

export default newsFilterSlice.reducer;
