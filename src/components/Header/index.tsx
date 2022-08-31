import React from 'react'
import Image from 'next/image'

import logo from '../../assets/logo/logo64.svg'

import styles from "./Header.module.scss"

const Header: React.FC = () => {
    return(
        <header>
            <div className={styles.Header}>
                <div className={styles.leftMenu}>
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
                    <span className={styles.Toolbar}>
                        <p>Инструкция</p>
                        <p>Сообщество</p>
                        <p>Поддержка</p>
                    </span>
                </div>
                <div className={styles.AuthBar}>
                    <button className={ styles.ButtonFirst }>
                        Войти
                    </button>
                    <button className={ styles.ButtonSecond }>
                        Регистрация
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header