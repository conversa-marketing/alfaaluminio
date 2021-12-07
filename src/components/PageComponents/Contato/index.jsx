import React from 'react'
import ContatoBanner from '../../../assets/img/contato-banner.jpg'
import Image from 'next/image'
import * as S from './styled'

function ContactPage() {
    return (
        <S.ContactWrapper>
            <S.ContactBanner>
                <Image src={ContatoBanner} layout="fill" objectFit="cover" alt="" priority />
                <h1>Entre em contato</h1>
                <p>Precisa de um orçamento ou tem dúvidas sobre algum de nossos produtos? Preencha o formulário a baixo!</p>
            </S.ContactBanner>
            <S.ContactContainer>
                <S.ContactHeading>

                </S.ContactHeading>
                <S.FormInfo>
                    <form action="https://formsubmit.co/your@email.com" method="POST">
                        <input type="text" name="nome" required placeholder="Nome" />
                        <input type="email" name="email" required placeholder="Email" />
                        <input type="text" name="telefone" required placeholder="Telefone" />
                        <input type="text" name="assunto" placeholder="Assunto" />
                        <textarea name="mensagem" required placeholder="Mensagem"></textarea>
                        <button type="submit">Quero uma cotação</button>
                    </form>
                </S.FormInfo>
            </S.ContactContainer>
            <S.IframeWrapper>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14646.581705225271!2d-46.8795244!3d-23.4010411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfd64bd1df430c46a!2sAlfa%20Alum%C3%ADnio!5e0!3m2!1spt-BR!2sbr!4v1638821768997!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            </S.IframeWrapper>
        </S.ContactWrapper>
    )
}

export default ContactPage
