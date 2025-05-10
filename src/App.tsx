import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider } from 'components/themes/theme-provider';
import Blog from 'pages/Blog';
import DockerPage from 'pages/blog/Docker';
import AGIPage from 'pages/blog/AGI';
import HomePage from 'pages/Home';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/docker" element={<DockerPage />} />
          <Route path="/blog/agi" element={<AGIPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;