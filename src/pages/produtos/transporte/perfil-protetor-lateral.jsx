import React from 'react';
import { NextSeo } from 'next-seo';
import PPL from '../../../components/Produtos/Transporte/PerfilProtetorLateral'
import DownloadSection from '../../../components/DownloadSection'


export default function PagProtetorLateral() {

    return (
        <>
            <NextSeo
                title="Perfil Protetor Lateral | Alfa Alumínio"
            />
            <PPL />
            <DownloadSection />
        </>
    )
}
