import React from 'react';
import { NextSeo } from 'next-seo';
import MJAPL from '../../../components/Produtos/Transporte/MataJuntaPortaLateral'
import DownloadSection from '../../../components/DownloadSection'


export default function PagMataJunta() {

    return (
        <>
            <NextSeo
                title="Mata Junta e Acabamento Porta Lateral | Alfa Alumínio"
            />
            <MJAPL />
            <DownloadSection />
        </>
    )
}
