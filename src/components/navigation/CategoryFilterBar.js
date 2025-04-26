// src/components/news/CategoryFilterBar.jsx

// React 관련 import
import React, { useEffect, useState } from 'react';

// API 호출 함수 import
import { fetchAllCategories } from '../../service/newsService';

// 컴포넌트 import
import CategoryFilterButton from './CategoryFilterButton';

function CategoryFilterBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchAllCategories();
        setCategories(data.data); // 서버에서 가져온 카테고리 리스트 저장
      } catch (error) {
        console.error('❌ 카테고리 목록을 불러오는 중 오류 발생:', error);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="category-filter-bar">
      <ul className="category-filter-list">
        {/* '전체' 버튼은 항상 가장 앞에 추가 */}
        <CategoryFilterButton label="메인" categoryValue="전체" />
        
        {categories.map((cat) => (
          <CategoryFilterButton
            key={cat.name}
            label={cat.name}
            categoryValue={cat.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default CategoryFilterBar;
