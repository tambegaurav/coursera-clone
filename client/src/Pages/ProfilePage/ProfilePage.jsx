import React from 'react';
import { ProfileBanner } from '../../Shared-Components/Profile/ProfileBanner/ProfileBanner';
import Navbar from '../../Shared-Components/Navbar';

export const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <ProfileBanner />
    </div>
  );
};
