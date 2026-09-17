import { Link } from 'react-router-dom'
import { APP_NAME } from '@/constants/app'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {APP_NAME}
        </Link>
      </div>
    </header>
  )
}
