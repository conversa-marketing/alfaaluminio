import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }

    }

    // render() {
    //     const GA_MEASUREMENT_ID = 'G-TV7Q7X7T59'; // Paste your GTAG here
    //     return (
    //         <Html lang="pt_BR">
    //             <Head>
    //                 <link
    //                     href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap"
    //                     rel="stylesheet"
    //                 />
    //                 <script
    //                     async
    //                     src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
    //                 />
    //                 <script
    //                     // eslint-disable-next-line react/no-danger
    //                     dangerouslySetInnerHTML={{
    //                         __html: `
    //                 window.dataLayer = window.dataLayer || [];
    //                 function gtag(){dataLayer.push(arguments);}
    //                 gtag('js', new Date());
    //                 gtag('config', '${GA_MEASUREMENT_ID}', {
    //                   page_path: window.location.pathname,
    //                 });
    //               `,
    //                     }}
    //                 />
    //             </Head>
    //             <body>
    //                 <Main />
    //                 <NextScript />
    //             </body>
    //         </Html>
    //     );
    // }
}