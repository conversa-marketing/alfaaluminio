import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-quadrada.jpeg'


function PFFSP() {

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
                    <h1>Piso Central de Furgão Frigorífico 02 Trapézios Série Pesada</h1>
                </div>
            </S.ProductHeader>
            <div>
                componente de contato
            </div>
        </S.MainWrapper >
    )
}

export default PFFSP