// src/components/news/CategoryFilterButton.jsx

import { useDispatch, useSelector } from 'react-redux';
import { setSelectedCategory } from '../../store/newsFilterSlice';

function CategoryFilterButton({ label, categoryValue }) {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.newsFilter.selectedCategory);

  const isActive = selectedCategory === categoryValue; // ✅ 전역 상태와 비교해서 active 결정

  const handleClick = () => {
    dispatch(setSelectedCategory(categoryValue)); // ✅ 클릭 시 필터 변경
  };

  return (
    <li
      className={`category-filter-item${isActive ? ' active' : ''}`} // ✅ 활성화 클래스 동적 부여
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <span>{label}</span> {/* a 태그 안 쓰고 span으로 */}
    </li>
  );
}

export default CategoryFilterButton;
