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
import Manager from '../../components/ Manager/Manager';
import ReviewPicture from '../../components/ReviewPicture/ReviewPicture';
import Review from '../../components/Review/Review';
import Reservation from '../../components/Reservation/Reservation';
import TicketSelect from '../../components/TicketSelect/TicketSelect';

function Detail() {
  return (
    <div className="Detail">
      <Reservation />
      <Title />
      <IconInfo />
      <Gallery />
      <TicketSelect />
      <ProductIntro />
      <CourseIntro />
      <ProductInfo />
      <UseInfo />
      <CancelRefund />
      <Manager />
      <ReviewPicture />
      <Review />
    </div>
  );
}

export default Detail;
