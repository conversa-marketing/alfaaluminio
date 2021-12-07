import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ArremateDianteiro from '../../../../assets/img/perfil-arremate-dianteiro.jpg'


function PAT() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ArremateDianteiro}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Arremate Dianteiro</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PAT