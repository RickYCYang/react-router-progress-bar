import React, { useEffect, useState } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import TopBarProgress from 'react-topbar-progress-indicator';

TopBarProgress.config({
  barColors: {
    0: '#FF0000',
    '1.0': '#4c0000',
  },
  shadowBlur: 5,
});

export default function CustomRoutes({ children }) {
  const location = useLocation();
  const [showProgressbar, setShowProgress] = useState(true);
  /** prevLocation is for tracking whether the route path has been changed or not */
  const [prevLocation, setPrevLocation] = useState(location.pathname);

  // console.log('prevLocation', prevLocation);
  // console.log('location.pathname', location.pathname);

  useEffect(() => {
    setPrevLocation(location.pathname);
    setShowProgress(true);
  }, [location]);

  useEffect(() => {
    setShowProgress(false);
  }, [prevLocation]);

  return (
    <>
      {/** the progress bar would be visible when route path changed */}
      {showProgressbar && <TopBarProgress co />}
      <Routes>{children}</Routes>
    </>
  );
}
