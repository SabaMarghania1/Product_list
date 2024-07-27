import styles from './ModalProduct.module.css'



export default function ModalProduct({item}) {
    console.log(item)
    
  return (
    <li className={styles.modalItem}>
      <div className= {styles.info}>
      <img src={item.image} alt="" />

        <h5 className={styles.name}>
            {item.name}
        </h5>
      </div>
    </li>
  )
}
