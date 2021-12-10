import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoCentral from '../../../../assets/img/piso-central-furgao-frigorifico.jpg'
import Link from 'next/link'


function PFFSP() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoCentral}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso Central de Furgão Frigorífico 02 Trapézios Série Pesada</h1>
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

export default PFFSP