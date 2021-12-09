import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import BgImage from '../../assets/img/download-bg.jpg'


function DownloadSection() {
    return (
        <S.DownloadSection>
            <S.BackgroundWrapper>
                <Image
                    src={BgImage}
                    alt=""
                    quality={100}
                    placeholder="blur"
                    objectFit="cover"
                    layout="fill"
                />
            </S.BackgroundWrapper>
            <S.DownloadWrapper>
                <h2>Faça o download do nosso <span>catálogo</span></h2>
                <p>Cadastre-se a seguir faça o download do nosso catálogo completo</p>
                <form action="https://formsubmit.co/gabrielsyze@gmail.com" method="POST">
                    <input type="hidden" name="_next" value="http://localhost:3000/catalogo-perfil.pdf" />
                    <input type="hidden" name="_subject" value="Alguém se Cadastrou Pelo Catálogo!" />
                    <input type="text" name="_honey" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_captcha" value="false" />
                    <label htmlFor="Nome">Nome</label>
                    <input type="text" name="Nome" placeholder="Nome e Sobrenome" required />
                    <label htmlFor="Email">Email</label>
                    <input type="email" name="Email" placeholder="Email" required />
                    <input type="submit" value="Quero receber o Catálogo" />
                </form>
            </S.DownloadWrapper>
        </S.DownloadSection>
    )
}

export default DownloadSection
