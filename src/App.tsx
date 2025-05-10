import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './complex/ThemeContext';
import HomePage from './pages/Home';
import BlogPage from './pages/Blog';
import DockerPage from './pages/Blogs/Docker';
import AGIPage from './pages/Blogs/AGI';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="d-flex flex-column min-vh-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/docker" element={<DockerPage />} />
          <Route path="/blog/agi" element={<AGIPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;