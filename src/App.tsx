import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ExamList } from './pages/ExamList';
import { ExamDetail } from './pages/ExamDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<ExamList />} />
            <Route path="/exam/:examId" element={<ExamDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;