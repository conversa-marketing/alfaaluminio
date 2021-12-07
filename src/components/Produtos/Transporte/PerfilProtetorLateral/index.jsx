import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ProtetorLateral from '../../../../assets/img/perfil-protetor-lateral.jpg'


function PPL() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ProtetorLateral}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Protetor Lateral (ciclista)</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PPL