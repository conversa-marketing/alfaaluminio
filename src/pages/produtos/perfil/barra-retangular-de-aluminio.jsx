import React from 'react';
import { NextSeo } from 'next-seo';
import BRA from '../../../components/Produtos/Perfil/BarraRetangular'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraRetangular() {

    return (
        <>
            <NextSeo
                title="Barra Retangular de Alumínio | Alfa Alumínio"
            />
            <BRA />
            <DownloadSection />
        </>
    )
}
