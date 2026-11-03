import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../store/cartSlice';
import cartIcon from '../../assets/icons/cart.png';
import styles from './CartIcon.module.css';

function CartIcon() {
  const itemsCount = useSelector(selectCartItemsCount);

  return (
    <button className={styles.button} type="button" aria-label="Корзина">
      <img src={cartIcon} alt="" className={styles.icon} />
      {itemsCount > 0 && (
        <span className={styles.badge} aria-live="polite">
          {itemsCount}
        </span>
      )}
    </button>
  );
}

export default CartIcon;
