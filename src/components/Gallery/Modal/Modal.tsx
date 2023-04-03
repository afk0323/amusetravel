/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';

interface ModalProps {
  image: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, onClose }) => (
  <div className="Modal">
    <div className="content">
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <img src={image} alt="modal-img" />
    </div>
  </div>
);

export default Modal;
