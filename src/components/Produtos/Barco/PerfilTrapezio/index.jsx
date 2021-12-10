import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import Link from 'next/link'
import ImgPerfil from '../../../../assets/img/perfil-trapezio.jpg'


function PTA() {

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
                    <h1>Perfil Trapézio</h1>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
        </S.MainWrapper >
    )
}

export default PTA