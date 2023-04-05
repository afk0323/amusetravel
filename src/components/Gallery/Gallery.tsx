import React from 'react';
import MainPicture from './MainPicture/MainPicture';
import SubPicture from './SubPicture/SubPicture';
import './Gallery.scss';

function Gallery() {
  return (
    <div className="Gallery">
      <MainPicture src="images/main.jpeg" alt="test1" />
      <div className="subpicture">
        <SubPicture src="images/day2-3.png" alt="test1" />
        <SubPicture src="images/day3-3.png" alt="test1" />
        <SubPicture src="images/picturetest.png" alt="test1" />
      </div>
    </div>
  );
}

export default Gallery;
