import React from 'react'
import Image from 'next/image'

import Registration from "../popups/Registration";

import logo from '../../../public/logo/logo64.svg'
import styles from "./Header.module.scss"
import Login from "../popups/Login";

const Header: React.FC = () => {
    return(
        <header>
            <div id={'Header'} className={styles.Header}>
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
                    <Login/>
                    <Registration/>
                </div>
            </div>
        </header>
    )
}

export default Header