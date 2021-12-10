import React from 'react';
import { NextSeo } from 'next-seo';
import PUI from '../../../components/Produtos/Perfil/PerfilUIguais'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilUIguais() {

    return (
        <>
            <NextSeo
                title="Perfil U Abas Iguais | Alfa Alumínio"
            />
            <PUI />
            <DownloadSection />
        </>
    )
}
