import './App.css';

import Blog from './components/Blog';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import of BrowserRouter, Routes, and Route
import Home from './components/Home';
import BlogDetail from './components/BlogDetail';

function App() {
  return (
    <Router>
      <div className="App">
     
          <Routes>
            <Route path='/'  element= {<Home/>}/>
            <Route path="/blog" element={<Blog />} /> {/* Path corrected to lowercase */}
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
