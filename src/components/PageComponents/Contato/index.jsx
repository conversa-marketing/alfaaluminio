import React from 'react'
import * as S from './styled'

function ContactPage() {
    return (
        <S.ContactWrapper>
            <S.ContactContainer>
                <S.ContactHeading>
                    <h1>Entre em contato</h1>
                    <p>Precisa de um orçamento ou tem dúvidas sobre algum de nossos produtos? Preencha o formulário a baixo!</p>
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
        </S.ContactWrapper>
    )
}

export default ContactPage
