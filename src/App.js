import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProviderWrapper } from './context/ThemeContext';

// Components
import Header from './Components/Header';
import Hero from './Components/Hero';
import Menu from './Components/Menu';
import Orders from './Components/Orders';
import RestaurantList from './Components/RestaurantList';
import Profile from './Components/Profile';
import SignUp from './Components/SignUp';
import BookTable from './Components/BookTable';
import RestaurantDetails from './Components/RestaurantDetails';

function App() {
  return (
    <ThemeProviderWrapper>
      <Router>
        <div className="App">
          <Header />
          <main style={{ paddingTop: '64px' }}>
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <RestaurantList />
                </>
              } />
              <Route path="/menu" element={<Menu />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/favorites" element={<RestaurantList />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/book-table" element={<BookTable />} />
              <Route path="/restaurant/:id" element={<RestaurantDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProviderWrapper>
  );
}

export default App;