import React from 'react';
import { NextSeo } from 'next-seo';
import PTI from '../../../components/Produtos/Perfil/PerfilTIguais';
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilTIguais() {

    return (
        <>
            <NextSeo
                title="Perfil T Abas Iguais | Alfa Alumínio"
            />
            <PTI />
            <DownloadSection />
        </>
    )
}
