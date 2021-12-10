import React from 'react';
import { NextSeo } from 'next-seo';
import BTRE from '../../../components/Produtos/Perfil/TuboRetangular';
import DownloadSection from '../../../components/DownloadSection'


export default function PagBarraTuboRetangular() {

    return (
        <>
            <NextSeo
                title="Tubo Retangular de Alumínio | Alfa Alumínio"
                description="Chapas Lavradas Xadrez de Alumínio de alta qualidade e procedência para uso em projetos de construção civil e industrial."
            />
            <BTRE />
            <DownloadSection />
        </>
    )
}
