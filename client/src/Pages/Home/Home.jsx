import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';
import { HomeCont1 } from '../../Shared-Components/Home/HomeContainers/HomeCont1/HomeCont1';
import { HomeCont2 } from '../../Shared-Components/Home/HomeContainers/HomeCont2/HomeCont2';
import { HomeCont3 } from '../../Shared-Components/Home/HomeContainers/HomeCont3/HomeCont3';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeCont1 />
      <HomeCont2 />
      <HomeCont3 />
      <Footer />
    </div>
  );
};

export default Home;
