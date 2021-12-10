import React from 'react';
import { NextSeo } from 'next-seo';
import BDA from '../../../components/Produtos/Laminados/BobinasAluminio'
import DownloadSection from '../../../components/DownloadSection'


export default function PagChapaEstucco() {

    return (
        <>
            <NextSeo
                title="Bobinas de Alumínio | Alfa Alumínio"
            />
            <BDA />
            <DownloadSection />
        </>
    )
}
