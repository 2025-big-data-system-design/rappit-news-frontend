// React 관련 import
import React from 'react'; // React 라이브러리 기본 import

// React Route 관련 import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router 라이브러리 (라우팅 기능 제공)

// 공통 컴포넌트 import
import Header from './components/header/Header'; // 상단 헤더 컴포넌트 import

// 페이지 컴포넌트 import
import Home from './pages/Home'; // 홈(Home) 페이지 컴포넌트 import

function App() {
  return (
    <Router>
      {/* 본문 영역 */}
      <div>
        <Routes>
          {/* 홈 페이지 */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
