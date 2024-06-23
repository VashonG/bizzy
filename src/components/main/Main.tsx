// src/components/Main.tsx
import React from 'react';
import SplineScene from '../spline/SplineScene.js';
import PepperdineBadge from '../trustBadges/PepperdineBadge.js';
import './Main.scss'; // Ensure this file contains your CSS styles
import Spline from '@splinetool/react-spline';
import NeoPopTiltedButton from '../shimmerButton/TiltedButton.js';

const Main = () => {
  const sceneUrl = 'https://prod.spline.design/Ibxvmkm4KiUhkEdX/scene.splinecode';

  return (
    <div className='main-section-wrapper'>
      <div className='spline-scene-wrapper'>
      
      </div>
      <div className='main-content'>
        <div className='flex flex-col items-center'>
          <PepperdineBadge />
          <div className='main-heading'>
            rewards for paying your business expenses.
          </div>
          <div className='main-subheading'>
            treat your business to the finer side of being responsible
          </div>
          <NeoPopTiltedButton 
          text={'download parliamint'} 
          url={''} 
          backgroundColor={'black'} 
          textColor={'white'} />
        </div>
      </div>
    </div>
  );
};

export default Main;
