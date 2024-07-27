
import { useCart } from '../contexts/CartContext'
import styles from './CartItem.module.css'

export default function CartItem({item}) {
  const {remove} = useCart()
  
  return (
    <li className={styles.cartItem}>
      <div className={styles.left}>
        <p className={styles.name}>{item.name}</p>
       <div className={styles.pricing}>
        <span className={styles.quantity}>{item.quantity}x</span>
        <div className={styles.prices}>
          <span className={styles.price}>@ ${item.price.toFixed(2)}</span>
          <span className={styles.totalPrice}>${(item.price*item.quantity).toFixed(2)}</span>
        </div>
       </div>
      </div>
      <div className={styles.right}>
        <img src="/assets/images/icon-remove-item.svg" onClick = {()=> remove(item)} alt="" />
      </div>
    </li>
  )
}
