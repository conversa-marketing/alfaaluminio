import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import laminados from './Content/laminados'
import perfis from './Content/perfis'
import transportes from './Content/transportes'
import Link from 'next/link'
import ProdutosBanner from '../../../assets/img/produtos-banner.jpg'

export default function ProdutosPage() {
    return (
        <S.ProductsWrapper>
            <S.ProdutosBanner>
                <Image src={ProdutosBanner} draggable="false" layout="fill" objectFit="cover" alt="" priority />
                <h1>Nossos Produtos</h1>
            </S.ProdutosBanner>
            <S.ProductsContainer>
                <h2>Laminados de Alumínio</h2>
                <p>Nossas telhas e laminados (chapas, bobinas e lâminas) são fabricados com alumínio durável e com a qualidade que o seu projeto necessita. Confira a seguir os produtos disponíveis em nosso estoque</p>
                <S.CategoryWrapper>
                    {laminados.map((laminado, index) => (
                        <Link key={index} href={laminado.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={laminado.image} alt={laminado.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{laminado.title}</h3>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
                <h2>Perfis</h2>
                <p>Realizamos todos os processos industriais com o cuidado necessário para entregar extrudados de qualidade única para diferentes formas e aplicações. Confira a seguir os produtos disponíveis em nosso estoque</p>
                <S.CategoryWrapper>
                    {perfis.map((perfis, index) => (
                        <Link key={index} href={perfis.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={perfis.image} alt={perfis.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{perfis.title}</h3>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
                <h2>Perfis de Transporte</h2>
                <p>Soluções em alumínio para todos os tipos de veículos. Confira a seguir os produtos disponíveis em nosso estoque</p>
                <S.CategoryWrapper>
                    {transportes.map((transporte, index) => (
                        <Link key={index} href={transporte.url} passHref>
                            <S.CategoryItem>
                                <S.CategoryImageWrapper>
                                    <Image src={transporte.image} alt={transporte.title} layout="fill" />
                                </S.CategoryImageWrapper>
                                <S.CategoryContent>
                                    <h3>{transporte.title}</h3>
                                </S.CategoryContent>
                            </S.CategoryItem>
                        </Link>
                    ))}
                </S.CategoryWrapper>
            </S.ProductsContainer>
        </S.ProductsWrapper>
    )
}

