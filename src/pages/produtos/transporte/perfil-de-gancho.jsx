import React from 'react';
import { NextSeo } from 'next-seo';
import PG from '../../../components/Produtos/Transporte/PerfilGancho'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPerfilGancho() {

    return (
        <>
            <NextSeo
                title="Perfil de Gancho | Alfa Alumínio"
            />
            <PG />
            <DownloadSection />
        </>
    )
}
