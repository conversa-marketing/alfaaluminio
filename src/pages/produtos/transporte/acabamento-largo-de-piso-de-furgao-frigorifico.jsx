import React from 'react';
import { NextSeo } from 'next-seo';
import ALFF from '../../../components/Produtos/Transporte/AcabamentoLargoFF'
import DownloadSection from '../../../components/DownloadSection'


export default function PagAcabamentoLargo() {

    return (
        <>
            <NextSeo
                title="Acabamento Largo de Piso de Furgão Frigorífico | Alfa Alumínio"
            />
            <ALFF />
            <DownloadSection />
        </>
    )
}
