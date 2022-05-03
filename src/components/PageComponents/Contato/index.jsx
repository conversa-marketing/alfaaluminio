import React from 'react'
import ContatoBanner from '../../../assets/img/contato-banner.jpg'
import Image from 'next/image'
import * as S from './styled'

function ContactPage() {
    return (
        <S.ContactWrapper>
            <S.ContactBanner>
                <Image src={ContatoBanner} layout="fill" objectFit="cover" alt="" priority />
            </S.ContactBanner>
            <S.ContactContainer>
                <S.FiliaisHeading>
                    <h3>Unidades</h3>
                </S.FiliaisHeading>
                <S.FiliaisWrapper>
                    <S.FiliaisItem>
                        <h3>Alfa Alumínio - Matriz SP</h3>
                        <p>Rua Florianópolis, 252, Bairro: Jd. Leda (Fazendinha) Cidade: Santana da Parnaíba - SP - CEP: 06529-302</p>
                        <a href="tel:1141565577"><span>Fone:</span> (11) 4156-5577</a>
                    </S.FiliaisItem>

                    <S.FiliaisItem>
                        <h3>Alfa Alumínio - Contagem - MG</h3>
                        <p>Rua padre Joaquim de souza silva, 101 – letra A – Bairro: Industrial
                            Cidade: Contagem – MG – CEP: 32220-330</p>
                        <a href="tel:553133625313"><span>Fone:</span> (31) 3362-5313</a>
                    </S.FiliaisItem>

                    <S.FiliaisItem>
                        <h3>Alfa Alumínio - Joinville - SC</h3>
                        <p>Rua dos suíços, 4466 – galpão A – bairro: Vila Nova
                            Cidade: Joinville – SC – CEP: 89237-720</p>
                        <a href="tel:554734176464"><span>Fone:</span> (47) 3417-6464</a>
                    </S.FiliaisItem>

                    <S.FiliaisItem>
                        <h3>Alfa Alumínio - Caxias do Sul - RS</h3>
                        <p>Av. Ruben Bento Alves, 5546 – bairro: Marechal Floriano.
                            Cidade: Caxias do Sul – RS – CEP: 95013-004</p>
                        <a href="tel:555432110811"><span>Fone:</span> (54) 3211-0811</a>
                    </S.FiliaisItem>

                    <S.FiliaisItem>
                        <h3>Alfa Alumínio - Porto Alegre - RS</h3>
                        <p>Travessa Venezuela, 150 – Depósito 10 – bairro: Navegantes.
                            Cidade: Porto Alegre – RS – CEP: 90240-220</p>
                        <a href="tel:555130837090"><span>Fone:</span> (51) 3083-7090</a>
                    </S.FiliaisItem>
                </S.FiliaisWrapper>
                <S.ContactHeading>
                    <S.ContactInfo>
                        <h3>Email</h3>
                        <p>contato@alfaaluminio.com.br</p>
                    </S.ContactInfo>
                    <S.ContactInfo>
                        <h3>Horários</h3>
                        <p>Segunda à Sexta</p>
                        <p>8h às 18h</p>
                    </S.ContactInfo>
                </S.ContactHeading>

                <h1>Entre em contato</h1>
                <p>Precisa de um orçamento ou tem dúvidas sobre algum de nossos produtos? Preencha o formulário a baixo!</p>
                <S.FormInfo>
                    <form action="https://formsubmit.co/vendas@alfaaluminio.com.br" method="POST">
                        <input type="hidden" name="_next" value="http://localhost:3000/" />
                        <input type="hidden" name="_subject" value="Novo Contato do Site!" />
                        <input type="text" name="_honey" />
                        <label htmlFor="Nome">Nome</label>
                        <input type="text" name="Nome" required placeholder="Nome Completo" />
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="Email" required placeholder="Email" />
                        <label htmlFor="Telefone">Telefone</label>
                        <input type="text" name="Telefone" required placeholder="Telefone com DDD" />
                        <label htmlFor="Assunto">Assunto</label>
                        <input type="text" name="Assunto" placeholder="Assunto" />
                        <label htmlFor="Unidade">Escolha a unidade</label>
                        <select name="Unidade" id="Unidade" required>
                            <option value="">Selecione</option>
                            <option value="Unidade Matriz SP">Unidade Matriz SP</option>
                            <option value="Unidade Minas Gerais">Unidade Minas Gerais</option>
                            <option value="Unidade Santa Catarina">Unidade Santa Catarina</option>
                            <option value="Unidade Caxias do Sul RS">Unidade Caxias do Sul RS</option>
                            <option value="Unidade Porto Alegre RS">Unidade Porto Alegre RS</option>
                        </select>
                        <label htmlFor="Mensagem">Mensagem</label>
                        <textarea name="Mensagem" required placeholder="Mensagem (opcional)"></textarea>
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
