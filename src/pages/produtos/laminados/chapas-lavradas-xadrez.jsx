import React from 'react';
import { NextSeo } from 'next-seo';
import CLX from '../../../components/Produtos/Laminados/ChapasLavradasXadrez'
import DownloadSection from '../../../components/DownloadSection'


export default function PagChapaLavrada() {

    return (
        <>
            <NextSeo
                title="Chapas Lavradas Xadrez de Alumínio | Alfa Alumínio"
            />
            <CLX />
            <DownloadSection />
        </>
    )
}
