import searchIcon from '../../assets/icons/search.png';
import userIcon from '../../assets/icons/user.png';
import logoIcon from '../../assets/icons/logo.svg';
import CartIcon from '../CartIcon/CartIcon';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <img src={logoIcon} alt="" className={styles.logoImage} />
        <span className={styles.logoText}>DigitalStore</span>
      </div>

      <nav className={styles.nav} aria-label="Действия">
        <button className={styles.iconButton} type="button" aria-label="Поиск">
          <img src={searchIcon} alt="" className={styles.icon} />
        </button>

        <CartIcon />

        <button className={styles.iconButton} type="button" aria-label="Профиль">
          <img src={userIcon} alt="" className={styles.icon} />
        </button>
      </nav>
    </header>
  );
}

export default Header;
