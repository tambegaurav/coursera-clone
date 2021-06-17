import React from 'react';
import Footer from '../../Shared-Components/Footer';
import Navbar from '../../Shared-Components/Navbar';
import { HomeBanner } from '../../Shared-Components/Home/HomeBanner/HomeBanner';
// eslint-disable-next-line max-len
import CommunityReviewSection from '../../Shared-Components/Home/CommunityReviewSection/CommunityReviewSection';
import {
  HomeCont1,
  HomeCont2,
  HomeCont3,
} from '../../Shared-Components/Home/HomeContainers';
import useDocumentTitle from '../../CustomHooks/useDocumentTitle';

const Home = () => {
  useDocumentTitle(`Coursera`);

  return (
    <div>
      <Navbar />
      <HomeBanner />
      <HomeCont1 />
      <HomeCont2 />
      <HomeCont3 />
      <CommunityReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
