import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgPerfil from '../../../../assets/img/perfil-quilha.jpg'


function PQN() {

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
                    <h1>Perfil Quilha</h1>
                </div>
            </S.ProductHeader>
        </S.MainWrapper >
    )
}

export default PQN