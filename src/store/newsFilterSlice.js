import { createSlice } from '@reduxjs/toolkit'; // Redux Toolkit import

// 뉴스 정렬 및 필터 상태 초기값
const initialState = {
  sortOption: '최신순',          // 기본 정렬 옵션
  selectedCategory: '전체',      // 기본 카테고리
  keyword: '',                  // 키워드 검색어 (예: 주제, 카테고리용)
  selectedPress: [],            // 선택된 언론사 리스트
  query: '',                    // ✅ 사용자가 입력한 실제 검색어
  queryMode: 'title_content',    // ✅ 검색 모드 (title, content, title_content)
};

const newsFilterSlice = createSlice({
  name: 'newsFilter',
  initialState,
  reducers: {
    // 정렬 옵션 설정
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
    // 카테고리 설정
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    // 키워드 검색어 설정
    setKeyword(state, action) {
      state.keyword = action.payload;
    },
    // 선택된 언론사 설정
    setSelectedPress(state, action) {
      state.selectedPress = action.payload;
    },
    // ✅ 쿼리 입력값 설정
    setQuery(state, action) {
      state.query = action.payload;
    },
    // ✅ 쿼리 모드 설정
    setQueryMode(state, action) {
      state.queryMode = action.payload;
    },
    // 필터 전체 초기화
    resetNewsFilters(state) {
      state.sortOption = initialState.sortOption;
      state.selectedCategory = initialState.selectedCategory;
      state.keyword = initialState.keyword;
      state.selectedPress = initialState.selectedPress;
      state.query = initialState.query;
      state.queryMode = initialState.queryMode;
    },
  },
});

// 액션과 리듀서 export
export const {
  setSortOption,
  setSelectedCategory,
  setKeyword,
  setSelectedPress,
  setQuery,        // ✅ export 추가
  setQueryMode,    // ✅ export 추가
  resetNewsFilters,
} = newsFilterSlice.actions;

export default newsFilterSlice.reducer;
