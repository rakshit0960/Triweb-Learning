import { Link } from "react-router-dom"
import styles from './NavBar..module.css';

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link to='/'>Home</Link></li>
        <li className={styles.li}><Link to='/contact'>Contact</Link></li>
        <li className={styles.li}><Link to='/about'>About</Link></li>
        <li className={styles.li}><Link to='/products'>Products</Link></li>
      </ul>
    </nav>
  )
}
