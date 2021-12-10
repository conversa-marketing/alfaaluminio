import React from 'react';
import { NextSeo } from 'next-seo';
import PFFSL from '../../../components/Produtos/Transporte/PisoFFSLeve'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPisoFurgaoQT() {

    return (
        <>
            <NextSeo
                title="Piso de Furgão Frigorífico 4 Trapézios Série Leve | Alfa Alumínio"
            />
            <PFFSL />
            <DownloadSection />
        </>
    )
}
