import React from 'react';
import { NextSeo } from 'next-seo';
import CPA from '../../../components/Produtos/Laminados/ChapasPlanas'
import DownloadSection from '../../../components/DownloadSection'


export default function PagChapaPlana() {

    return (
        <>
            <NextSeo
                title="Chapas PLanas de Alumínio | Alfa Alumínio"
            />
            <CPA />
            <DownloadSection />
        </>
    )
}
