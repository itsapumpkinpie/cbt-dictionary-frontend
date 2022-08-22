import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function  MyApp ({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>КПТ дневник</title>
                <meta name="description" content="Бесплатный онлайн сервис с возможностью самостоятельного ведения когнитивно-повеченческого дневника" />
                <link rel="icon" href="./../public/logo/logo64.svg" />
            </Head>

            <Header/>
            <main className={styles.main}>
                <Component {...pageProps} />
            </main>
            <Footer/>
        </>
    )
}

export default MyApp
