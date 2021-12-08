import { NextSeo } from 'next-seo';
import ContactPage from '../components/PageComponents/Contato';
const Contato = () => (
    <>
        <NextSeo
            title="Contato | Alfa Alumínio"
            description="Entre em contato com a Alfa para cotações, dúvidas ou assuntos diversos."
        />
        <ContactPage />
    </>
)

export default Contato