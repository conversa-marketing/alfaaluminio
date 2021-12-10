import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoFurgaoFrigorifico from '../../../../assets/img/piso-furgao.jpg'
import Link from 'next/link'


function PFF() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoFurgaoFrigorifico}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso de Furgão Frigorífico</h1>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PFF