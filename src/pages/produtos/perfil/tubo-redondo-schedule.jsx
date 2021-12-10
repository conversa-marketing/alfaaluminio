import React from 'react';
import { NextSeo } from 'next-seo';
import BTRS from '../../../components/Produtos/Perfil/TuboRedondoSchedule';
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraTuboRedondoS() {

    return (
        <>
            <NextSeo
                title="Tubo Redondo Schedule de Alumínio | Alfa Alumínio"
            />
            <BTRS />
            <DownloadSection />
        </>
    )
}
