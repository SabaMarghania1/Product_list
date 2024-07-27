import React from 'react';
import { useCart } from '../contexts/CartContext';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import ModalProduct from './ModalProduct';

export default function Modal() {
  const { isModalOpen, closeModal,cart } = useCart();

  if (!isModalOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
      <header className={styles.header}>
        <img src="assets/images/icon-order-confirmed.svg" alt="icons" className={styles.confirmImage} />
        <h2 className={styles.title}>Order Confirmed</h2>
        <p className={styles.subtitle}>We hope you enjoy your food!</p>
         </header>

         <main className={styles.main}>

         <ul className={styles.modalList}>
          {cart.map(item=>
          <ModalProduct key={item.name} item={item}/>)}
        </ul>
          <p className={styles.total}>Order Total <span>${totalPrice}</span></p>
         </main>
         <footer>
          <button className={styles.newOrder}>Start New Order</button>
         </footer>
   
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}
