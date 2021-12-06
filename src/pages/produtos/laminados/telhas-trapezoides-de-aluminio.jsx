import React from 'react';
import { NextSeo } from 'next-seo';
import TTA from '../../../components/Produtos/Laminados/TelhasTrapezoides'

export default function PagTelhaTrapezoide() {

    return (
        <>
            <NextSeo
                title="Chapas PLanas de Alumínio | Alfa Alumínio"
                description="São chapas lisas de acabamento comum. Com ou sem aplicação de película em ambas as faces."
            />
            <TTA />
        </>
    )
}
