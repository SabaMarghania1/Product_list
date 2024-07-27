import React from 'react';
import { useCart } from '../contexts/CartContext';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

export default function Modal() {
  const { isModalOpen, closeModal,cart } = useCart();

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  console.log(cart)


  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
      <header className={styles.header}>
        <img src="assets/images/icon-order-confirmed.svg" alt="icons" className={styles.confirmImage} />
        <h2 className={styles.title}>Order Confirmed</h2>
        <p className={styles.subtitle}>We hope you enjoy your food!</p>
      </header>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}
