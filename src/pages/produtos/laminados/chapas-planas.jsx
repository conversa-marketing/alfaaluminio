import React from 'react';
import { NextSeo } from 'next-seo';
import CPA from '../../../components/Produtos/Laminados/ChapasPlanas'

export default function PagChapaPlana() {

    return (
        <>
            <NextSeo
                title="Chapas PLanas de Alumínio | Alfa Alumínio"
                description="São chapas lisas de acabamento comum. Com ou sem aplicação de película em ambas as faces."
            />
            <CPA />
        </>
    )
}
