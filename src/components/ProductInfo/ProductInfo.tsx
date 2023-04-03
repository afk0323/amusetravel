import React from 'react';
import './ProductInfo.scss';

function ProductInfo() {
  return (
    <div className="product-information">
      <p className="information-title">상품 정보</p>
      <div className="include-info">
        <h3>포함 사항</h3>
        <p>차량지원, 기사/가이드, 추천 코스</p>
      </div>
      <div className="notinclude-info">
        <h3>불포함 사항</h3>
        <p>음료, 점심 , 입장료(가고 싶은 곳에 따라 다름)</p>
      </div>
    </div>
  );
}

export default ProductInfo;
