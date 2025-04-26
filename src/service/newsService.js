import axios from 'axios';

/**
 * 전체 뉴스 목록 조회 (Raw)
 * GET /api/news/raw/all
 */
export const fetchAllRawNews = async () => {
  const response = await axios.get('/api/news/raw/all');
  return response.data;
};

/**
 * 페이지 단위 뉴스 목록 조회 (Raw)
 * GET /api/news/raw?page=&size=
 */
export const fetchRawNewsByPage = async (page = 1, size = 10) => {
  const response = await axios.get('/api/news/raw', {
    params: { page, size }
  });
  return response.data;
};

/**
 * 전체 뉴스 목록 조회 (Indexed)
 * GET /api/news/indexed/all
 */
export const fetchAllIndexedNews = async () => {
  const response = await axios.get('/api/news/indexed/all');
  return response.data;
};

/**
 * 페이지 단위 뉴스 목록 조회 (Indexed)
 * GET /api/news/indexed?page=&size=
 */
export const fetchIndexedNewsByPage = async (page = 1, size = 10) => {
  const response = await axios.get('/api/news/indexed', {
    params: { page, size }
  });
  return response.data;
};

/**
 * 전체 언론사 목록 조회
 * GET /api/press/all
 */
export const fetchAllPress = async () => {
  const response = await axios.get('/api/press/all');
  return response.data;
};

/**
 * 필터 및 검색 조건에 따라 뉴스 목록 조회
 * GET /api/news/indexed/search
 */
export const searchIndexedNews = async (filters) => {
  const {
    page = 1,
    size = 10,
    sortOption = '최신순',
    selectedCategory = '전체',
    selectedPress = [],
    query = '',
    queryMode = 'title_content'
  } = filters;

  const response = await axios.get('/api/news/indexed/search', {
    params: {
      page,
      size,
      sortOption,
      selectedCategory,
      selectedPress: selectedPress.join(","), // ✅ 배열을 쉼표로 연결해서 전달
      query,
      queryMode
    }
  });

  return response.data;
};  

/**
 * 전체 카테고리 목록 조회
 * GET /api/category/all
 */
export const fetchAllCategories = async () => {
  const response = await axios.get('/api/category/all');
  return response.data;
};