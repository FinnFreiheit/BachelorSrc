import '../styles/globals.css'
import Layout from "../components/Layouts/layout";


function MyApp({Component, pageProps}) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
