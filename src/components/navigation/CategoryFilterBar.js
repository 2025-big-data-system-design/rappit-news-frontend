// React 관련 import
import React, { useEffect, useState } from 'react'; // React 기본 훅 사용

// API 호출 함수 import
import { fetchAllCategories } from '../../service/newsService'; // 카테고리 목록 조회 API

// 컴포넌트 import
import CategoryFilterButton from './CategoryFilterButton'; // 카테고리 필터 버튼 컴포넌트

function CategoryFilterBar() {
  const [categories, setCategories] = useState([]); // 카테고리 목록

  // 컴포넌트 마운트 시 실행
  useEffect(() => {
    // 카테고리 목록을 서버로부터 가져오기
    const loadCategories = async () => {
      try {
        // 카테고리 목록 API 호출
        const data = await fetchAllCategories();

        // 받아온 카테고리 리스트 저장
        setCategories(data.data); 
      } catch (error) {
        // 오류 발생 시 에러 출력
        console.error('❌ 카테고리 목록을 불러오는 중 오류 발생:', error);
      }
    };

    loadCategories();
  }, []); 

  return (
    <div className="category-filter-bar">
      {/* 카테고리 리스트 */}
      <ul className="category-filter-list">
        {/* 기본 '메인 카테고리 버튼 */}
        <CategoryFilterButton 
          label="메인" // 버튼에 표시할 텍스트
          categoryValue="전체" // 선택했을 때 적용할 카테고리 값
        />
        
        {/* 서버에서 불러온 카테고리 목록 렌더링 */}
        {categories.map((cat) => (
          <CategoryFilterButton
            key={cat.name} // 고유 key
            label={cat.name} // 버튼에 표시할 텍스트
            categoryValue={cat.name} // 선택했을 때 적용할 카테고리 값
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilterBar;
