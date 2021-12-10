import React from 'react';
import { NextSeo } from 'next-seo';
import PUD from '../../../components/Produtos/Perfil/PerfilUDesiguais';
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilUDesiguais() {

    return (
        <>
            <NextSeo
                title="Perfil U Abas Desiguais | Alfa Alumínio"
            />
            <PUD />
            <DownloadSection />
        </>
    )
}
