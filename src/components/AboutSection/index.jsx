import React from "react";
import Link from "next/link";
import * as S from './styled'

function AboutAlfa() {
  return (
    <S.AboutWrapper>
      <S.AboutContainer>
        <div></div>
        <S.AboutContent>
          <h2>Sobre a <span>Alfa</span></h2>
          <p>
            A Alfa Alumínio está no mercado há mais de 38 anos atendendo todo o
            território brasileiro. Somos distribuidores oficiais da Companhia
            Brasileira do Alumínio do Grupo Votorantim, que possui um dos
            parques fabris mais modernos do mundo para a fabricação de metal
            primário e para a transformação.
          </p>
          <Link href="/" passHref>
            <S.AboutBtn>Saiba mais</S.AboutBtn>
          </Link>
        </S.AboutContent>
      </S.AboutContainer>
    </S.AboutWrapper>
  )
}

export default AboutAlfa;
