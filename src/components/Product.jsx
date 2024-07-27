import React from 'react';
import styles from './Product.module.css';
import ProductImage from './ProductImage';
import AddButton from './AddButton';
import QuantityButton from './QuantityButton';
import { useCart } from '../contexts/CartContext';

export default function Product({ product }) {
  const { handleAddToCart, cart } = useCart();

  const isInCart = cart.some(item => item.name === product.name);

  return (
    <li className={styles.product}>
      <div className={`${styles.imageContainer} ${isInCart && styles.inCart}`}>
        <ProductImage image={product.image} />
        {!isInCart ? (
          <AddButton onClick={() => handleAddToCart(product)} />
        ) : (
          <QuantityButton product={product} />
        )}
      </div>
      <div className={styles.description}>
        <span className={styles.category}>{product.category}</span>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>${product.price.toFixed(2)}</p>
      </div>
    </li>
  );
}