import React from 'react';
import { NextSeo } from 'next-seo';
import PFF from '../../../components/Produtos/Transporte/PisoFurgaoFrigorifico'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPisoFurgao() {

    return (
        <>
            <NextSeo
                title="Piso de Furgão Frigorífico | Alfa Alumínio"
            />
            <PFF />
            <DownloadSection />
        </>
    )
}
