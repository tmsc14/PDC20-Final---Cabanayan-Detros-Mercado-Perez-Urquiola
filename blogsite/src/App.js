// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Components/Home';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import { useAuth } from './AuthContext';

const App = () => {
  const auth = useAuth();
  const { user } = auth || {};

  return (
    <Router>
      <div>
        {/* Conditionally render Header based on user login status */}
        {user && <Header />}
        
        <Routes>
          <Route path="/login" element={<Login />} />
          {/* Conditionally render other components based on user login status */}
          {user ? (
            <>
              <Route path="/blog" element={<Blog />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Home />} />
            </>
          ) : (
            <Route path="*" element={<Login />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
