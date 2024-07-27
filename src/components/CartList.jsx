
import styles from './CartList.module.css'
import {useCart} from "../contexts/CartContext"
import CartItem from './CartItem'


export default function CartList() {
  const {cart}= useCart()
  
  return (
    <ul className={styles.cartList}>
      {cart.map(item=><CartItem key={item.name} item={item}/>)}
    </ul>
  )
}
