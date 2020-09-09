import React from 'react';
import HomeLayout from '../Components/HomeLayout';

const Home = () => {
  const handleButtonClick = (event) => {
    event.preventDefault();
    alert('아직은 이용하실 수 없습니다!');
  };
  return <HomeLayout handleButtonClick={handleButtonClick} />;
};

export default Home;
