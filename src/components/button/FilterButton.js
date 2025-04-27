// React 및 상태 관리 import
import React, { useState } from 'react'; // React 기본 라이브러리 (useState 훅 사용)
import { Button, Modal } from 'react-bootstrap'; // BootStrap 버튼과 모달 컴포넌트

// 컴포넌트 관련 import
import { FaFilter } from 'react-icons/fa'; // 필터 아이콘
import { FaMapMarkerAlt } from 'react-icons/fa'; // 지도 핀(위치) 아이콘

function FilterButton({
  buttonLabel = '필터', // 버튼에 표시할 텍스트 
  modalTitle = '필터 설정', // 모달 상단 제목
  children, // 모달 안에 표시할 내용
  modalHeight = '560px' // 모달 높이 설정
}) {
  // 모달 표시 여부를 관리하는 상태
  const [show, setShow] = useState(false);

  // 버튼 레이블에 따라 아이콘을 선택
  const renderIcon = () => {
    if (buttonLabel === '위치 설정') {
      return <FaMapMarkerAlt className="me-2" />; // 위치 설정일 경우 마커 아이콘
    }
    return <FaFilter className="me-2" />; // 기본 필터 아이콘
  };

  return (
    <>
      {/* 필터 버튼 */}
      <Button
        variant="primary"
        onClick={() => setShow(true)}
      >
        {/* 아이콘 선택 후 표시 */}
        {renderIcon()}
        {buttonLabel} {/* 매개변수로 받은 텍스트 표시 */}
      </Button>

      {/* 필터 설정 모달 */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            maxHeight: typeof modalHeight === 'number' ? `${modalHeight}px` : modalHeight,
            overflowY: 'auto',
          }}
        >
          {/* 자식 컴포넌트에 모달 닫기 기능 전달 */}
          {React.cloneElement(children, {
            onClose: () => setShow(false),
          })}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FilterButton;
