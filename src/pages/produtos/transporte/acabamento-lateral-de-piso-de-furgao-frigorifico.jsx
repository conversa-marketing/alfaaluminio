import React from 'react';
import { NextSeo } from 'next-seo';
import ALPFF from '../../../components/Produtos/Transporte/AcabamentoLateralFF'
import DownloadSection from '../../../components/DownloadSection'


export default function PagAcabamentoLateral() {

    return (
        <>
            <NextSeo
                title="Acabamento Lateral de Piso de Furgão Frigorífico| Alfa Alumínio"
            />
            <ALPFF />
            <DownloadSection />
        </>
    )
}
