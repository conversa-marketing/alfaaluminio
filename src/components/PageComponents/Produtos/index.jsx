import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import laminados from './laminados'
import perfis from './perfis'
import Link from 'next/link'
import transporte from './transporte'
import ProdutosBanner from '../../../assets/img/produtos-banner.jpg'

function ProdutosPage() {
    return (
        <S.ProductsWrapper>
            <S.ProdutosBanner>
                <Image src={ProdutosBanner} draggable="false" layout="fill" objectFit="cover" />
                <h1>Nossos Produtos</h1>
            </S.ProdutosBanner>
            <S.ProductsContainer>
                <h1>Laminados de Alumínio</h1>
                <S.CategoryWrapper>
                    {laminados.map((laminado, index) => (
                        <Link key={index} href={laminado.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={laminado.image} alt={laminado.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{laminado.title}</h3>
                                    <p>{laminado.text}</p>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
                <h1>Perfis</h1>
                <S.CategoryWrapper>
                    {perfis.map((perfis, index) => (
                        <Link key={index} href={perfis.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={perfis.image} alt={perfis.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{perfis.title}</h3>
                                    <p>{perfis.text}</p>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
                <h1>Perfis de Transporte</h1>
                <S.CategoryWrapper>
                    {transporte.map((transporte, index) => (
                        <Link key={index} href={transporte.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={transporte.image} alt={transporte.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{transporte.title}</h3>
                                    <p>{transporte.text}</p>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
            </S.ProductsContainer>
        </S.ProductsWrapper >
    )
}

export default ProdutosPage
