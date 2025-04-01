import React, { useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
    
    </>
  
    
  );
};

export default Hero; 