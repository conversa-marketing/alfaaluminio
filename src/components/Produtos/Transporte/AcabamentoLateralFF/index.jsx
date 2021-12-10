import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgAcabamentoLateral from '../../../../assets/img/acabamento-lateral-opcoes.jpg'
import Link from 'next/link'


function ALPFF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgAcabamentoLateral}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Acabamento Lateral de Piso de Furgão Frigorífico (2 opções)</h1>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default ALPFF