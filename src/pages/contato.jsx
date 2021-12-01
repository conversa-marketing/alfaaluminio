import { NextSeo } from 'next-seo';
import ContactPage from '../components/PageComponents/Contato';
const Contato = () => (
    <>
        <NextSeo
            title="Contato | Alfa Alumínio"
            description="Entre em contato com a Alfa para cotações, dúvidas ou assuntos diversos."
            openGraph={{
                type: 'website',
                locale: 'pt_BR',
                url: 'localhost:3000',
                site_name: 'Alfa Alumínio',
                title: 'Alfa Alumínio',
                images: [
                    {
                        url: 'https://willianjusten.com.br/assets/img/blog-cover.png',
                        width: 1200,
                        height: 630,
                        alt: 'Contato Alfa Alumínio'
                    }
                ]
            }}
        />
        <ContactPage />
    </>
)

export default Contato