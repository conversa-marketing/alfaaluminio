import React from 'react'
import * as S from './styled'
import Image from 'next/image'
import EmpresaBanner from '../../../assets/img/empresa-banner.jpg'
import Link from 'next/link'

function EmpresaPage() {
    return (
        <S.EmpresaWrapper>
            <S.EmpresaBanner>
                <Image
                    src={EmpresaBanner}
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    alt=""
                />
                <h1>Sobre a Alfa Alumínio</h1>
            </S.EmpresaBanner>
            <S.EmpresaContent>
                <h1>Uma empresa especializada em alumínio e atendimento ao cliente</h1>
                <p>A Alfa Alumínio está no mercado há mais de 38 anos atendendo todo o território brasileiro. Somos uma distribuidora da Companhia Brasileira do Alumínio do Grupo Votorantim, uma empresa que ostenta um dos mais modernos parques fabris do mundo para a fabricação de metal primário e para a transformação, com alta tecnologia e qualidade, desde metal em laminados, extrudados e folhas.</p>

                <p>Prezamos pelo aprimoramento dos nossos serviços e produtos em busca de uma eficiência cada vez maior em nossa entrega e atendimento. Afinal, somos grandes especialistas em alumínio e construímos a nossa empresa baseada em três princípios fundamentais: qualidade de produto, credibilidade e disponibilidade de estoque.</p>

                <p>Por isso, fazemos parte de um seleto grupo de empresas escolhidas para distribuir produtos do único fabricante brasileiro de alumínio. Este é um dos pontos que nos permite manter um estoque diversificado de extrudados (vergalhões, tubos e perfis), de telhas e de laminados (chapas, bobinas e lâminas), em diversas ligas, espessuras e tamanhos que permitem o atendimento das mais diversas necessidades de nossos clientes.</p>
                <Link href="/contato" passHref>
                    <S.EmpresaContato>Peça já seu orçamento</S.EmpresaContato>
                </Link>
            </S.EmpresaContent>
        </S.EmpresaWrapper>
    )
}

export default EmpresaPage
