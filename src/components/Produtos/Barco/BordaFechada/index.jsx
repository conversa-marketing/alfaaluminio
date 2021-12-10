import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgPerfil from '../../../../assets/img/perfil-borda-fechada.jpg'
import Link from 'next/link'


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
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
        </S.MainWrapper >
    )
}

export default PBF