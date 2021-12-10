import React from 'react';
import { NextSeo } from 'next-seo';
import BTR from '../../../components/Produtos/Perfil/TuboRedondo';
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraTuboRedondo() {

    return (
        <>
            <NextSeo
                title="Tubo Redondo de Alumínio | Alfa Alumínio"
            />
            <BTR />
            <DownloadSection />
        </>
    )
}
