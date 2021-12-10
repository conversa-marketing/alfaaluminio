import React from 'react';
import { NextSeo } from 'next-seo';
import PAD from '../../../components/Produtos/Transporte/PerfilArremateDianteiro'
import DownloadSection from '../../../components/DownloadSection'


export default function PagArremateDianteiro() {

    return (
        <>
            <NextSeo
                title="Perfil Arremate Dianteiro | Alfa Alumínio"
            />
            <PAD />
            <DownloadSection />
        </>
    )
}
