import react from 'react'
import Image from 'next/image'

import logo from '../../assets/logo/logo64.svg'
import styles from "./Header.module.scss"

const Header: react.FC = () => {
    return(
        <header className={styles.Header}>
            <div className={styles.logo}>
                <Image
                    alt="Логотип"
                    src={logo}
                    width={37}
                    height={37}
                />
                <h1>
                    КПТ
                </h1>
            </div>
            <div className={styles.navigationBar}>
                <p>Инструкция</p>
                <p>Сообщество</p>
                <p>Поддержка</p>
            </div>
            <div className={styles.AuthBar}>
                <button>
                    Войти
                </button>
                <button>
                    Регистрация
                </button>
            </div>
        </header>
    )
}

export default Header