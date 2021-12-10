import React from 'react';
import { NextSeo } from 'next-seo';
import TTA from '../../../components/Produtos/Laminados/TelhasTrapezoides'
import DownloadSection from '../../../components/DownloadSection'


export default function PagTelhaTrapezoide() {

    return (
        <>
            <NextSeo
                title="Telhas Trapezoides de Alumínio | Alfa Alumínio"
            />
            <TTA />
            <DownloadSection />
        </>
    )
}
