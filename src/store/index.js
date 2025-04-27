// Redux store 관련 import
import { configureStore } from '@reduxjs/toolkit'; // Redux의 store를 설정하는 함수

// Reducer 관련 import
import newsFilterReducer from './newsFilterSlice'; // 뉴스 필터 상태 리듀서

// store 설정
const store = configureStore({
  reducer: {
    newsFilter: newsFilterReducer, // 뉴스 필터 상태를 관리하는 리듀서 등록
  },
});

export { store };
