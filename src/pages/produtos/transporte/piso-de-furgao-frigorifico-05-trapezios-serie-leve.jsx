import React from 'react';
import { NextSeo } from 'next-seo';
import PFFSM from '../../../components/Produtos/Transporte/PisoFFSMedia'
import DownloadSection from '../../../components/DownloadSection'


export default function PagPisoFurgaoCT() {

    return (
        <>
            <NextSeo
                title="Piso de Furgão Frigorífico 5 Trapézios Série Leve | Alfa Alumínio"
            />
            <PFFSM />
            <DownloadSection />
        </>
    )
}
