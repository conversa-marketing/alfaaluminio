import React from 'react'
import * as S from '../../styled'
import Image from 'next/image'
import AcabamentoCurto from '../../../../assets/img/acabamento-curto.jpg'


function ACFF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={AcabamentoCurto}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Acabamento Curto de Piso de Furgão Frigorífico N-3846</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default ACFF