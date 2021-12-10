import React from 'react';
import { NextSeo } from 'next-seo';
import TOA from '../../../components/Produtos/Laminados/TelhasOnduladas'
import DownloadSection from '../../../components/DownloadSection'


export default function PagTelhaOndulada() {

    return (
        <>
            <NextSeo
                title="Telhas Onduladas de Alumínio | Alfa Alumínio"
            />
            <TOA />
            <DownloadSection />
        </>
    )
}
