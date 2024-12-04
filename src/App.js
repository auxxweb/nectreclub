import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correct import of BrowserRouter, Routes, and Route
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogsDetails';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/'  element= {<Home/>}/>
            <Route path="/blog" element={<Blogs />} />
            <Route path="/blogdetails" element={<BlogDetails />} />

             {/* Path corrected to lowercase */}
            {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
          </Routes>
      </div>
    </Router>
  );
}

export default App;
