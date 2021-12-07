import React from 'react'
import * as S from '../../styled'
import Image from 'next/image'
import ImgAcabamentoLargo from '../../../../assets/img/acabamento-largo.jpg'


function ALFF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgAcabamentoLargo}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Acabamento Largo de Piso de Furão Frigorífico</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default ALFF