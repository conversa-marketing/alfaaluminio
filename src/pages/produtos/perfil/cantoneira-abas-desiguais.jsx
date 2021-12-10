import React from 'react';
import { NextSeo } from 'next-seo';
import CAD from '../../../components/Produtos/Perfil/CantoneirasDesiguais';
import DownloadSection from '../../../components/DownloadSection'


export default function PagCantoneirasDesiguais() {

    return (
        <>
            <NextSeo
                title="Cantoneiras Abas Desiguais | Alfa Alumínio"
            />
            <CAD />
            <DownloadSection />
        </>
    )
}
