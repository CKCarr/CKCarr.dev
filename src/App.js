import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './components/CustomNavbar';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import ResumePage from './pages/ResumePage'
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App() {
  return (
      // <div className="min-h-screen bg-midnightblue text-white">
        <div className="min-h-screen bg-v3-paper text-v3-text-primary">

        <Router>
        <ScrollToTop />
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
        <Footer />
      </Router>

    </div>


  );
}

export default App;

