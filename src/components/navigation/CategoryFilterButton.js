// Redux 관련 import
import { useDispatch, useSelector } from 'react-redux'; // Redux 상태 조회 및 액션 디스패치 훅

// 액션 import
import { setSelectedCategory } from '../../store/newsFilterSlice'; // 선택한 카테고리 설정 액션

function CategoryFilterButton({ 
  label, // 버튼에 표시할 라벨 텍스트 
  categoryValue // 선택 시 설정할 카테고리 값
}) {
  const dispatch = useDispatch(); // React 디스패치를 위한 훅

  // 현재 선택된 카테고리 상태 조회
  const selectedCategory = useSelector((state) => state.newsFilter.selectedCategory);

  // 현재 버튼이 선택된 상태인지 여부 (true/false)
  const isActive = selectedCategory === categoryValue; 

  // 클릭 시 선택된 카테고리를 변경
  const handleClick = () => {
    // 클릭한 카테고리 값을 전역 상태로 설정
    dispatch(setSelectedCategory(categoryValue));
  };

  return (
    <li
      // 현재 선택된 카테고리에 따라 active 클래스 부여
      className={`category-filter-item${isActive ? ' active' : ''}`} 
      onClick={handleClick} // 클릭 시 카테고리 변경 함수 실행
      // 커서 스타일을 포인터로 변경
      style={{ cursor: 'pointer' }}
    >
      {/* 버튼에 표시할 카테고리 라벨 */}
      <span>{label}</span>
    </li>
  );
}

export default CategoryFilterButton;
