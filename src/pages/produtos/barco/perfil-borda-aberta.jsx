import React from 'react';
import { NextSeo } from 'next-seo';
import PBA from '../../../components/Produtos/Barco/BordaAberta'
import DownloadSection from '../../../components/DownloadSection'

export default function PagBordaAberta() {

    return (
        <>
            <NextSeo
                title="Perfil Borda Aberta | Alfa Alumínio"
            />
            <PBA />
            <DownloadSection />
        </>
    )
}
