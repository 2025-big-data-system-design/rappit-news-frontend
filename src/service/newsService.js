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
 * 언론사 이름 기준 성능 비교
 * GET /api/news/perf/press?name=언론사명
 */
export const comparePressPerformance = async (pressName) => {
  const response = await axios.get('/api/news/perf/press', {
    params: { name: pressName }
  });
  return response.data;
};
