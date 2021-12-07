import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import LongarinaInferior from '../../../../assets/img/longarina-inferior.jpg'


function LI() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={LongarinaInferior}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Longarina Inferior (Barranqueira)</h1>
                </div>
            </S.ProductHeader>
            <div>

            </div>
        </S.MainWrapper >
    )
}

export default LI