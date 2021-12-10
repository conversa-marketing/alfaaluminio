import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import Link from 'next/link'
import ImgPerfil from '../../../../assets/img/perfil-borda-aberta.jpg'


function PBA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgPerfil}
                        alt=""
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Borda Aberta</h1>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
        </S.MainWrapper >
    )
}

export default PBA