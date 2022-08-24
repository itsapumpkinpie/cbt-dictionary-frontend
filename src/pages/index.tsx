import type { NextPage } from 'next'
import Image from "next/image";

import styles from '../styles/Home.module.scss'
import logo from "../assets/img/titleGirl.svg";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Image
                alt="Логотип"
                src={logo}

            />
        </div>
    )
}

export default Home
