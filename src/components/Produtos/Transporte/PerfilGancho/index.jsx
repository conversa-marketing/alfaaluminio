import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PerfilGancho from '../../../../assets/img/perfil-gancho.jpg'


function PG() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PerfilGancho}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil Gancho</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PG