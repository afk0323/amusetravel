import React from 'react';
import './MainPicture.scss';

interface MainPictureProps {
    src: string;
    alt: string;
}

const MainPicture: React.FC<MainPictureProps> = ({ src, alt }) => (
  <div className="MainPicture">
    <img className="image" src={src} alt={alt} />
  </div>
);

export default MainPicture;
