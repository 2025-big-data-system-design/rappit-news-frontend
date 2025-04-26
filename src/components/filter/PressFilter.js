// src/components/news/PressFilter.jsx

// React 관련 import
import React, { useEffect, useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap'; // Bootstrap 구성 요소
import { fetchAllPress } from '../../service/newsService'; // ✅ 언론사 목록 가져오기

function PressFilter({ 
  selectedPress = [], // 현재 선택된 언론사 리스트
  onChange // 언론사 선택 또는 해제 시 호출되는 콜백 함수
}) {
  const [pressList, setPressList] = useState([]); // 언론사 목록 상태

  // 언론사 데이터 로딩
  useEffect(() => {
    const loadPressList = async () => {
      try {
        const response = await fetchAllPress(); // ✅ API 호출
        setPressList(response.data); // [{ name, logo }] 형태로 저장
      } catch (error) {
        console.error('언론사 목록을 불러오는 중 오류 발생:', error);
      }
    };

    loadPressList();
  }, []);

  // 언론사 토글 함수
  const handleToggle = (pressName) => {
    const updated = selectedPress.includes(pressName)
      ? selectedPress.filter(p => p !== pressName) // 선택 해제
      : [...selectedPress, pressName]; // 선택 추가

    onChange(updated); // 변경된 언론사 리스트 전달
  };

  return (
    <Form.Group className="press-filter mb-4">
      {/* 언론사 섹션 제목 */}
      <Form.Label>언론사 선택</Form.Label>

      {/* 2열 그리드 형태로 언론사 표시 */}
      <Row className="no-gap">
        {pressList.map((press, idx) => (
          <Col xs={6} key={idx} className="no-gap">
            <div
              className={`press-box ${selectedPress.includes(press.name) ? 'selected' : ''}`}
              onClick={() => handleToggle(press.name)}
            >
              {press.name} {/* 언론사 이름 출력 */}
            </div>
          </Col>
        ))}
      </Row>
    </Form.Group>
  );
}

export default PressFilter;
