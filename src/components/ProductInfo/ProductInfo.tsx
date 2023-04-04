import React from 'react';
import './ProductInfo.scss';

function ProductInfo() {
  return (
    <div className="product-information">
      <p className="information-title">상품 정보</p>
      <div className="include-info">
        <h3>포함 사항</h3>
        <p>현지 인솔, 아이돌봄 서비스, 입장 및 체험비, 식사/숙소, 여행자보험, 픽업서비스</p>
      </div>
      <div className="notinclude-info">
        <h3>불포함 사항</h3>
        <p>제주도 왕복 항공, 기타 개인 경비</p>
      </div>
    </div>
  );
}

export default ProductInfo;
