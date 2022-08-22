import react from 'react'
import styles from "../Footer/Footer.module.scss";
import Image from "next/image";
import logo from "../../assets/logo/logo64.svg";

const Footer: react.FC = () => {
    return(
        <footer className={styles.Footer}>
            <div>
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