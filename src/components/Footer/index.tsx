import React from 'react'
import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../../public/logo/logo64.svg";

const Footer: React.FC = () => {
    return(
        <footer>
            <div className={styles.Footer}>
                <Image
                    alt="Логотип"
                    src={logo}
                    width={37}
                    height={37}
                />
                <h2>
                    КПТ
                </h2>
            </div>
        </footer>
    )
}
export default Footer