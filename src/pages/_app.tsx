
import type { AppProps } from 'next/app'
import Head from "next/head";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/globals.scss'
import styles from "../styles/Home.module.scss";

function  MyApp ({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>КПТ дневник</title>
                <meta name="description" content="Бесплатный онлайн сервис с возможностью самостоятельного ведения когнитивно-повеченческого дневника" />
                <link
                    rel="icon"
                    type="image/svg"
                    href="./logo32.png"
                />
                <link rel="stylesheet" href="./fonts/fonts.css" />
            </Head>
            <div className={styles.wrapper}>
                <div className={styles.pageLayout}>
                    <Header/>
                    <main>
                        <Component {...pageProps} />
                    </main>
                    <Footer/>
                </div>
            </div>
        </>
    )
}

export default MyApp
