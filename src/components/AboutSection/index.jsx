import React from "react";
import Link from "next/link";
import Image from "next/image";
import ImgEmpresa from '../../assets/img/empresa.jpg'
import * as S from './styled';

function AboutAlfa() {
  return (
    <S.AboutWrapper>
      <S.AboutContainer>
        <S.EmpresaImage>
          <Image
            src={ImgEmpresa}
            layout="fill"
            objectFit="contain"
            alt="Alfa Alumínio"
          />
        </S.EmpresaImage>
        <S.AboutContent>
          <h2>Sobre a <span>Alfa</span></h2>
          <p>
            A Alfa Alumínio está no mercado há mais de 38 anos atendendo todo o
            território brasileiro. Somos distribuidores oficiais da Companhia
            Brasileira do Alumínio do Grupo Votorantim, que possui um dos
            parques fabris mais modernos do mundo para a fabricação de metal
            primário e para a transformação.
          </p>
          <Link href="/empresa" passHref>
            <S.AboutBtn>Saiba mais</S.AboutBtn>
          </Link>
        </S.AboutContent>
      </S.AboutContainer>
    </S.AboutWrapper>
  )
}

export default AboutAlfa;
