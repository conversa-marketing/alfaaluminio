import React from 'react';
import { NextSeo } from 'next-seo';
import BTQ from '../../../components/Produtos/Perfil/TuboQuadrado'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraTuboQuadrado() {

    return (
        <>
            <NextSeo
                title="Tubo Quadrado de Alumínio | Alfa Alumínio"
            />
            <BTQ />
            <DownloadSection />
        </>
    )
}
