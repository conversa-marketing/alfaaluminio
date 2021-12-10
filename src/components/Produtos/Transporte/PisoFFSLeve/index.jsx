import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoQuatroTrapezios from '../../../../assets/img/piso-furgao-leve-1.jpg'
import Link from 'next/link'


function PFFSL() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoQuatroTrapezios}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso de Furgão Frigorífico 04 Trapézios Série Leve</h1>
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

export default PFFSL