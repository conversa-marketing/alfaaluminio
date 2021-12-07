import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgMataJunta from '../../../../assets/img/mata-junta.jpg'


function MJAPL() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgMataJunta}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Mata Junta e Acabamento Porta Lateral</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default MJAPL