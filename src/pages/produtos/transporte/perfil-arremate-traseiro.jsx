import React from 'react';
import { NextSeo } from 'next-seo';
import PAT from '../../../components/Produtos/Transporte/PerfilArremateTraseiro'
import DownloadSection from '../../../components/DownloadSection'


export default function PagArremateTraseiro() {

    return (
        <>
            <NextSeo
                title="Perfil Arremate Traseiro | Alfa Alumínio"
            />
            <PAT />
            <DownloadSection />
        </>
    )
}
