import React from 'react';
import './Detail.scss';
import Title from '../../components/Title/Title';
import IconInfo from '../../components/IconInfo/IconInfo';
import Gallery from '../../components/Gallery/Gallery';
import ProductIntro from '../../components/ProductIntro/ProductIntro';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import CourseIntro from '../../components/CourseIntro/CourseIntro';
import UseInfo from '../../components/UseInfo/UseInfo';
import CancelRefund from '../../components/CancelRefund/CancelRefund';

function Detail() {
  return (
    <div className="Detail">
      <Title />
      <IconInfo />
      <Gallery />
      <ProductIntro />
      <ProductInfo />
      <CourseIntro />
      <UseInfo />
      <CancelRefund />
    </div>
  );
}

export default Detail;
