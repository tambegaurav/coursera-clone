import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';
import { HomeCont1 } from '../../Shared-Components/Home/HomeContainers/HomeCont1/HomeCont1';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <HomeBanner />
      <HomeCont1 />
      <Footer />
    </div>
  );
};

export default Home;
