import React from 'react';
import { NextSeo } from 'next-seo';
import PBF from '../../../components/Produtos/Barco/BordaFechada'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBordaFechada() {

    return (
        <>
            <NextSeo
                title="Perfil Borda Fechada | Alfa Alumínio"
            />
            <PBF />
            <DownloadSection />
        </>
    )
}
