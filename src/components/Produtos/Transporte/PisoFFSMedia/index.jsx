import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoCincoTrapezios from '../../../../assets/img/piso-furgao-leve-2.jpg'
import Link from 'next/link'


function PFFSM() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoCincoTrapezios}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso de Furgão Frigorífico 05 Trapézios Série Média</h1>
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

export default PFFSM