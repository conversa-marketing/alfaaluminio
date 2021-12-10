import React from 'react';
import { NextSeo } from 'next-seo';
import PFFSP from '../../../components/Produtos/Transporte/PisoCentralFF'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPisoCentral() {

    return (
        <>
            <NextSeo
                title="Piso Central de Furgão Frigorífico 2 Trapézios Série Leve | Alfa Alumínio"
            />
            <PFFSP />
            <DownloadSection />
        </>
    )
}
