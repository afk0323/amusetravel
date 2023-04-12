/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ImageModal.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons';

interface ImageModalProps {
  onClose: () => void;
}

const onAfterOpen = () => {
  document.body.style.overflow = 'hidden';
};

const onRequestClose = () => {
  document.body.style.overflow = 'auto';
};

const ImageModal: React.FC<ImageModalProps> = ({ onClose }) => {
  // 이미지 목록
  const images = [
    'images/test1.jpeg',
    'images/test2.jpeg',
    'images/test3.jpeg',
    'images/test4.jpeg',
    'images/test5.jpeg',
    'images/test6.jpeg',
  ];

  // 현재 이미지의 인덱스
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 다음 이미지를 보여주는 함수
  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // 이전 이미지를 보여주는 함수
  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Modal
      isOpen
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          background: 'transparent',
        },
        overlay: {
          backgroundColor: 'rgba( 73, 80, 86, 95% )',
          width: '100%',
          height: '100%',
        },
      }}
    >
      <div className="image-modal">
        {/* 이미지 */}
        <img className="modal-img" src={images[currentImageIndex]} alt="test" />

        {/* 왼쪽 버튼 */}
        <button className="btn-left" onClick={showPreviousImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* 오른쪽 버튼 */}
        <button className="btn-right" onClick={showNextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

        {/* 닫기 버튼 */}
        <button className="btn-close" onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* 작은 이미지 슬라이더 */}
        <div className="small-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="small"
              className={index === currentImageIndex ? 'active' : ''}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
