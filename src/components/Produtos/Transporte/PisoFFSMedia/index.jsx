import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import PisoCincoTrapezios from '../../../../assets/img/piso-furgao-leve-2.jpg'


function PFFSM() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={PisoCincoTrapezios}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Piso de Furgão Frigorífico 05 Trapézios Série Média</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default PFFSM