import React from 'react';
import { NextSeo } from 'next-seo';
import BREA from '../../../components/Produtos/Perfil/BarraRedonda'
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraRedonda() {

    return (
        <>
            <NextSeo
                title="Barra Redonda de Alumínio | Alfa Alumínio"
            />
            <BREA />
            <DownloadSection />
        </>
    )
}
