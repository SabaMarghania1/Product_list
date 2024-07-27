
import { useCart } from '../contexts/CartContext';
import styles from './Product.module.css';

export default function QuantityButton({ product }) {
  const { cart, increment, decrement } = useCart();
  
  const cartItem = cart.find(item => item.name === product.name);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
        <button className={styles.quantity}>
            <span className={styles.action} onClick={() => decrement(product)}><img src="assets/images/icon-decrement-quantity.svg" alt="svg" className={styles.actionImage} /></span>
            <span >{quantity}</span>
            <span className={styles.action} onClick = {()=> increment(product)}>+</span>
        </button>

  );
}