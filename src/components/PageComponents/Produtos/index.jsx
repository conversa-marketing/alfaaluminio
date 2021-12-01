import React from 'react'
import * as S from './styled'
import laminados from './laminados'

function ProdutosPage() {
    return (
        <S.ProductWrapper>
            <S.ProductsContainer>
                <S.LaminadosWrapper>
                    {laminados.map((laminado, index) => (
                        <S.LaminadosItem key={index}>
                            <h3>{laminado.label}</h3>
                            <a href={laminado.url}>Saiba mais</a>
                        </S.LaminadosItem>
                    ))}
                </S.LaminadosWrapper>
            </S.ProductsContainer>
        </S.ProductWrapper >
    )
}

export default ProdutosPage
