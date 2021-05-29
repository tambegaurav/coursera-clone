import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';
// eslint-disable-next-line max-len
import CommunityReviewSection from '../../Shared-Components/Home/CommunityReviewSection/CommunityReviewSection';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <HomeBanner />
      <CommunityReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
