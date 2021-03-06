import React from 'react';
import { NextSeo } from 'next-seo';
import BSA from '../../../components/Produtos/Perfil/BarraSextavada'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraSextavada() {

    return (
        <>
            <NextSeo
                title="Barra Sextavada de Alumínio | Alfa Alumínio"
            />
            <BSA />
            <DownloadSection />
        </>
    )
}
