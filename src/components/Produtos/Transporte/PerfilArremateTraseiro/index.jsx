import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ArremateTraseiro from '../../../../assets/img/perfil-arremate-traseiro.jpg'


function PAD() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ArremateTraseiro}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Arremate Traseiro</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PAD