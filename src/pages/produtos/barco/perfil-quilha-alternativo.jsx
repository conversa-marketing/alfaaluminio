import React from 'react';
import { NextSeo } from 'next-seo';
import PQA from '../../../components/Produtos/Barco/PerfilQuilhaAlt'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilQuilhaAlt() {

    return (
        <>
            <NextSeo
                title="Perfil Quilha | Alfa Alumínio"
            />
            <PQA />
            <DownloadSection />
        </>
    )
}
