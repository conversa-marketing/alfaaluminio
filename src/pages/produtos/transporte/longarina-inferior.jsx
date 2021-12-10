import React from 'react';
import { NextSeo } from 'next-seo';
import LI from '../../../components/Produtos/Transporte/LongarinaInferior'
import DownloadSection from '../../../components/DownloadSection'


export default function PagLongarinaInferior() {

    return (
        <>
            <NextSeo
                title="Longarina Inferior | Alfa Alumínio"
            />
            <LI />
            <DownloadSection />
        </>
    )
}
