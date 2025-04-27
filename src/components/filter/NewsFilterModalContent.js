// React 관련 import
import React from 'react'; // React 기본 라이브러리 

// UI 컴포넌트 import
import { Button } from 'react-bootstrap'; // Bootstrap 버튼 컴포넌트 import
import PressFilter from './PressFilter'; // 언론사 필터링 컴포넌트 import 

function NewsFilterModalContent({ 
  filters, // 현재 필터 상태 
  onChange, // 필터 변경 핸들러 
  onClose // 모달 닫기 함수
}) {
  return (
    <div>
      {/* 언론사 필터 컴포넌트 */}
      <PressFilter
        selectedPress={filters.selectedPress || []} // 현재 선택된 언론사 목록 전달
        onChange={(updatedPressList) => 
          onChange({ 
            ...filters, // 기본 필터 유지
            selectedPress: updatedPressList // 선택된 언론사만 업데이트
          })
        }
      />

      {/* 하단 닫기 버튼 영역 */}
      <div className="mt-4 text-end">
        <Button 
          variant="secondary" // Bootstrap 스타일 (회색 버튼)
          onClick={onClose} // 닫기 버튼 클릭 시 onClose 함수 호출
        >
          닫기
        </Button>
      </div>
    </div>
  );
}

export default NewsFilterModalContent;
