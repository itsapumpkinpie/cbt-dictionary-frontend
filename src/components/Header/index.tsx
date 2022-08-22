import react from 'react'
import Image from 'next/image'

import logo from './../../public/logo/logo64.svg'
import styles from "./Header.module.scss"

const Header: react.FC = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image
                    alt="Логотип"
                    src={logo}
                    width={64}
                    height={64}
                />
                <h1>
                    КПТ
                </h1>
            </div>
        </header>
    )
}

export default Header