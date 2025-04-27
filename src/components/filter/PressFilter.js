// React 및 상태 관리 import 
import React, { useEffect, useState } from 'react'; // React 기본 훅 사용 (상태 관리 및 사이드)

// UI 컴포넌트 라이브러리 import
import { Form, Row, Col } from 'react-bootstrap'; // Bootstrap 폼 및 레이아웃 컴포넌트 사용
import { fetchAllPress } from '../../service/newsService'; // 전체 언론사 목록 조회 API

function PressFilter({ 
  selectedPress = [], // 현재 선택된 언론사 리스트
  onChange // 언론사 선택 또는 해제 시 호출되는 콜백 함수
}) {
  const [pressList, setPressList] = useState([]); // 언론사 목록 상태

  // 언론사 데이터 로딩
  useEffect(() => {
    // 데이터 요청 함수 선언
    const loadPressList = async () => {
      try {
        // 언론사 목록 API 호출
        const response = await fetchAllPress(); 

        // 가져온 언론사 데이터 상태에 저장
        setPressList(response.data); 
      } catch (error) {
        // 오류 발생 시 에러 출력
        console.error('언론사 목록을 불러오는 중 오류 발생:', error);
      }
    };

    loadPressList(); // 데이터 요청 함수 실행
  }, []);

  // 언론사 선택/해제 토글
  const handleToggle = (pressName) => {
    const updated = selectedPress.includes(pressName)
      ? selectedPress.filter(p => p !== pressName)  // 이미 선택된 경우 pressName 제거 
      : [...selectedPress, pressName]; // 선택되지 않은 경우 pressName 추가

    // 변경된 언론사 목록 상위 컴포넌트에 전달
    onChange(updated); 
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
              // 선택한 경우 'selected' 클래스 추가
              className={`press-box ${selectedPress.includes(press.name) ? 'selected' : ''}`}
              onClick={() => handleToggle(press.name)} // 언론사 클릭 시 토글
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
