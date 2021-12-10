import React from 'react';
import { NextSeo } from 'next-seo';
import ACFF from '../../../components/Produtos/Transporte/AcabamentoCurtoFF';
import DownloadSection from '../../../components/DownloadSection'


export default function PagAcabamentoCurto() {

    return (
        <>
            <NextSeo
                title="Acabamento Curto de Piso de Furgão Frigorífico | Alfa Alumínio"
            />
            <ACFF />
            <DownloadSection />
        </>
    )
}
