import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-quadrada.jpeg'
import Link from 'next/link'


function ALPFF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Acabamento Lateral de Piso de Furgão Frigorífico (2 opções)</h1>
                </div>
            </S.ProductHeader>
            <div>
                componente de contato
            </div>
        </S.MainWrapper >
    )
}

export default ALPFF