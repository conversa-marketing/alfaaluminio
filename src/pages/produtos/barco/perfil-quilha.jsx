import React from 'react';
import { NextSeo } from 'next-seo';
import PQN from '../../../components/Produtos/Barco/PerfilQuilha'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilQuilha() {

    return (
        <>
            <NextSeo
                title="Perfil Quilha | Alfa Alumínio"
            />
            <PQN />
            <DownloadSection />
        </>
    )
}
