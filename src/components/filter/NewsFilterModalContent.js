// src/components/news/NewsFilterModalContent.jsx

// React 관련 import
import React from 'react';
import { Button } from 'react-bootstrap'; // Bootstrap 버튼
import PressFilter from './PressFilter'; // ✅ PressFilter 컴포넌트 가져오기

function NewsFilterModalContent({ filters, onChange, onClose }) {
  return (
    <div>
      <PressFilter
        selectedPress={filters.selectedPress || []}
        onChange={(updatedPressList) => 
          onChange({ ...filters, selectedPress: updatedPressList })
        }
      />

      <div className="mt-4 text-end">
        <Button 
          variant="secondary" 
          onClick={onClose}
        >
          닫기
        </Button>
      </div>
    </div>
  );
}

export default NewsFilterModalContent;
