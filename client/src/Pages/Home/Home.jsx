import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <HomeBanner />
      <Footer />
    </div>
  );
};

export default Home;
