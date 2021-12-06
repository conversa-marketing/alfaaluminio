import React from 'react';
import { NextSeo } from 'next-seo';
import BQA from '../../../components/Produtos/Perfil/BarraQuadrada'

export default function PagBarraQuadrada() {

    return (
        <>
            <NextSeo
                title="Chapas Lavradas Estucco de Alumínio | Alfa Alumínio"
                description="Chapas Lavradas Xadrez de Alumínio de alta qualidade e procedência para uso em projetos de construção civil e industrial."
            />
            <BQA />
        </>
    )
}
