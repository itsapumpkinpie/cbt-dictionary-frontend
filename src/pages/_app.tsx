import type { AppProps } from 'next/app'
import Head from "next/head";

import '../styles/globals.scss'
import {WrapperLayout} from "../layouts/Wrapper";

function MyApp ({ Component, pageProps }: AppProps) {
    return(
        <>
            <Head>
                <title>КПТ дневник</title>
                <meta name="description" content="Бесплатный онлайн сервис с возможностью самостоятельного ведения когнитивно-повеченческого дневника" />
                <link
                    rel="icon"
                    type="image/svg"
                    href="/logo/logo32.png"
                />
            </Head>

            <WrapperLayout>
                    <Component {...pageProps} />
            </WrapperLayout>
        </>
    )
}
export default MyApp