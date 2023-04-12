/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';
import ImageModal from '../ImageModal/ImageModal';
import './MainPicture.scss';

interface MainPictureProps {
  src: string;
  alt: string;
}

const MainPicture: React.FC<MainPictureProps> = ({ src, alt }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="MainPicture">
      <img className="image" src={src} alt={alt} onClick={openModal} />
      {isModalOpen && (
        <ImageModal onClose={closeModal} />
      )}
    </div>
  );
};

export default MainPicture;
