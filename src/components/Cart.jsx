import { useCart } from '../contexts/CartContext'
import styles from './Cart.module.css'
import CartList from './CartList'
import Modal from './Modal'


export default function Cart() {
  const {cart,openModal} = useCart()

  const totalItems = cart.reduce((total,item)=>total+item.quantity,0)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);


  return (
    <div className={styles.cart}>
        <header className={styles.header}>
          <h2>Your Cart ({totalItems})</h2>
        </header>
        {cart.length === 0 ?  
        <div className={styles.emptyContent}>
          <img src="/assets/images/illustration-empty-cart.svg" alt="empty cart" />
          <p className={styles.paragraph}>Your added items will appear here</p>
        </div>
        :
        <>
          <CartList/>
          <div className={styles.totalPrice}>
            <p className={styles.pricing}>Order Total</p>
            <p className={styles.total}>${totalPrice}</p>
          </div>
          <p className={styles.rule}>
           <img src="assets/images/icon-carbon-neutral.svg" alt="icon" /> This is a <strong>carbon-neutral</strong> delivery
          </p>
          <button className={styles.confirmButton} onClick ={openModal}> <a href = "#header">Confirm Order</a></button>
          <Modal/>
        </>
          }
       
        
    </div>
  )
}
