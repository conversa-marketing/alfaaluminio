import React from 'react';
import { NextSeo } from 'next-seo';
import CAI from '../../../components/Produtos/Perfil/CantoneirasIguais';
import DownloadSection from '../../../components/DownloadSection'


export default function PagCantoneirasIguais() {

    return (
        <>
            <NextSeo
                title="Cantoneiras Abas Iguais | Alfa Alumínio"
            />
            <CAI />
            <DownloadSection />
        </>
    )
}
