import styles from './ModalProduct.module.css'



export default function ModalProduct({item}) {
    console.log(item)
    
  return (
    <li className={styles.modalItem}>
      <div className= {styles.info}>
      <img src={item.image} alt="" />
      <div className={styles.textInfo}>
        <h5 className={styles.name}>
            {item.name}
        </h5>
        <div className={styles.baseInfo}>
            <span className={styles.quantity}>{item.quantity}x</span>
            <p className={styles.basePrice}>@ ${item.price.toFixed(2)}</p>
        </div>
      </div>
      </div>

      <p className={styles.totalPrice}>${(item.price * item.quantity).toFixed(2)}</p>
    </li>
  )
}
