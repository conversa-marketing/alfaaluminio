import React from 'react';
import { NextSeo } from 'next-seo';
import PTA from '../../../components/Produtos/Barco/PerfilTrapezio'
import DownloadSection from '../../../components/DownloadSection'

export default function PagTrapezio() {

    return (
        <>
            <NextSeo
                title="Perfil Trapézio | Alfa Alumínio"
            />
            <PTA />
            <DownloadSection />
        </>
    )
}
