import type { AppProps } from 'next/app'
import Head from "next/head";

import '../styles/globals.scss'

function  MyApp ({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>КПТ дневник</title>
                <meta name="description" content="Бесплатный онлайн сервис с возможностью самостоятельного ведения когнитивно-повеченческого дневника" />
                <link
                    rel="icon"
                    type="image/svg"
                    href="/logo32.png"
                />
                <link rel="stylesheet" href="/fonts/fonts.css" />
            </Head>

            <div className={'wrapper'}>
                    <Component {...pageProps} />
            </div>
        </>
    )
}

export default MyApp
