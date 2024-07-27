

import styles from './ProductsList.module.css'

export default function ProductsList({children}) {
  return (
    <ul className={styles.products}>
      {children}
    </ul>
  )
}
