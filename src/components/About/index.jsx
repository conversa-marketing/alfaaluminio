import React from "react";
import Link from "next/link";
import * as S from './styled'

function AboutAlfa() {
  return (
    <S.AboutWrapper>
      <S.AboutContent>
        <h2>Sobre a Alfa</h2>
        <p>
          A Alfa Alumínio está no mercado há mais de 38 anos atendendo todo o
          território brasileiro. Somos uma distribuidora da Companhia Brasileira
          do Alumínio do Grupo Votorantim, uma empresa que ostenta um dos mais
          modernos parques fabris do mundo para a fabricação de metal primário e
          para a transformação, com alta tecnologia e qualidade, desde metal em
          laminados, extrudados e folhas.
        </p>
        <Link href="/">
          <a>Saiba mais</a>
        </Link>
      </S.AboutContent>
    </S.AboutWrapper>
  )
}

export default AboutAlfa;
