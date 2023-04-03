import React from 'react';
import './Detail.scss';
import Title from '../../components/Title/Title';
import IconInfo from '../../components/IconInfo/IconInfo';
import Gallery from '../../components/Gallery/Gallery';

function Detail() {
  return (
    <div className="Detail">
      <Title />
      <IconInfo />
      <Gallery />
    </div>
  );
}

export default Detail;
