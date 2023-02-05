import React, { ReactElement } from "react";
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext
    ): Promise<DocumentInitialProps> {
            const initialProps = await Document.getInitialProps(ctx);

            return initialProps
    }

    render(): ReactElement {
        return(
            <Html lang="en">
                <Head>
                    {/* eslint-disable-next-line @next/next/no-css-tags */}
                    <link rel="stylesheet" href="/fonts/fonts.css" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument