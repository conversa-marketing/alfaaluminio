import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgPerfil from '../../../../assets/img/perfil-borda-fechada.jpg'


function PBF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgPerfil}
                        alt="Bobina de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Borda Fechada</h1>
                </div>
            </S.ProductHeader>
        </S.MainWrapper >
    )
}

export default PBF