import React from 'react';
import { NextSeo } from 'next-seo';
import BQA from '../../../components/Produtos/Perfil/BarraQuadrada'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraQuadrada() {

    return (
        <>
            <NextSeo
                title="Barras Quadradas de Alumínio | Alfa Alumínio"
            />
            <BQA />
            <DownloadSection />
        </>
    )
}
