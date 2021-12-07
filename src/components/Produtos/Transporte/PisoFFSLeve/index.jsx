import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoQuatroTrapezios from '../../../../assets/img/piso-furgao-leve-1.jpg'


function PFFSL() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoQuatroTrapezios}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso de Furgão Frigorífico 04 Trapézios Série Leve</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PFFSL