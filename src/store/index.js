// Redux store 관련 import
import { configureStore } from '@reduxjs/toolkit'; // Redux의 store를 설정하는 함수
 
// Reducer 관련 import
import diseasesReducer from './diseaseSlice'; // 질병 관련 데이터를 관리하는 리듀서

// store 설정
const store = configureStore({
  reducer: {
    diseases: diseasesReducer, // 질병 관련 데이터를 관리하는 리듀서

  },
});

export { store };
