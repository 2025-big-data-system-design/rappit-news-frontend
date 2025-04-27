// Axios 관련 import
import axios from 'axios'; // 서버 API 통신을 위한 HTTP 클라이언트


// 전체 뉴스 목록 조회 (Raw 컬렉션)
export const fetchAllRawNews = async () => {
  // GET /api/news/raw/all
  const response = await axios.get('/api/news/raw/all');
  return response.data;
};

// 페이지 단위 뉴스 목록 조회 (Raw 컬렉션)
export const fetchRawNewsByPage = async (page = 1, size = 10) => {
  // GET /api/news/raw?page=&size=
  const response = await axios.get('/api/news/raw', {
    params: { 
      page, // 요청할 페이지 번호
      size // 한 페이지당 가져올 뉴스 개수
    }
  });
  return response.data;
};

// 전체 뉴스 목록 조회 (Indexed 컬렉션)
export const fetchAllIndexedNews = async () => {
  // GET /api/news/indexed/all
  const response = await axios.get('/api/news/indexed/all');
  return response.data;
};

// 페이지 단위 뉴스 목록 조회 (Indexed 컬렉션)
export const fetchIndexedNewsByPage = async (page = 1, size = 10) => {
  // GET /api/news/indexed?page=&size=
  const response = await axios.get('/api/news/indexed', {
    params: { 
      page, // 요청할 페이지 번호
      size // 한 페이지당 가져올 뉴스 개수
    }
  });
  return response.data;
};

// 필터 및 검색 조건에 따라 뉴스 목록 조회
export const searchIndexedNews = async (filters) => {
  // filters 객체에서 필요한 값 추출
  const {
    page = 1, // 요청할 페이지 번호
    size = 10, // 한 페이지당 가져올 뉴스 개수
    sortOption = '최신순', // 정렬 기준
    selectedCategory = '전체', // 선택된 뉴스 카테고리 (예: 정치, 경제 등)
    selectedPress = [], // 선택된 언론사 배열
    query = '', // 검색어
    queryMode = 'title_content' // 검색 모드 (제목+내용, 제목만, 내용만)
  } = filters;

  // GET /api/news/indxed/search
  const response = await axios.get('/api/news/indexed/search', {
    params: {
      page, // 요청할 페이지 번호
      size, // 페이지당 뉴스 개수
      sortOption, // 정렬 기준
      selectedCategory, // 선택된 카테고리
      selectedPress: selectedPress.join(","), // 언론사 배열을 문자열로 변환
      query, // 검색어
      queryMode // 검색 모드
    }
  });

  return response.data;
};  

// 전체 언론사 목록 조회
export const fetchAllPress = async () => {
  // GET /api/press/all
  const response = await axios.get('/api/press/all');
  return response.data;
};

// 전체 카테고리 목록 조회
export const fetchAllCategories = async () => {
  // GET /api/category/all
  const response = await axios.get('/api/category/all');
  return response.data;
};