import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import { addToCart } from '../../store/cartSlice';
import starIcon from '../../assets/icons/star.svg';
import starOutlineIcon from '../../assets/icons/star-outline.svg';
import styles from './ProductCard.module.css';

function ProductCard({ id, title, description, price, image, rating = 5 }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
        quantity,
      }),
    );
  };

  const handleBuyNow = () => {
    dispatch(
      addToCart({
        id,
        title,
        price,
        image,
        quantity,
      }),
    );
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  return (
    <article className={styles.card}>
      {image ? (
        <img src={image} alt={title} className={styles.image} />
      ) : (
        <div className={styles.imagePlaceholder} aria-hidden="true" />
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <div className={styles.rating} aria-label={`Рейтинг ${rating} из 5`}>
          {Array.from({ length: 5 }, (_, index) => (
            <img
              key={index}
              src={index < rating ? starIcon : starOutlineIcon}
              alt=""
              className={styles.star}
            />
          ))}
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{price}$</span>
          <QuantitySelector onChange={handleQuantityChange} />
        </div>

        <div className={styles.actions}>
          <Button variant="outline" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Button variant="primary" onClick={handleBuyNow}>
            Buy Now
          </Button>
        </div>
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};

export default ProductCard;
