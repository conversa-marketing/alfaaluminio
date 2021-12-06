import React from 'react';
import { NextSeo } from 'next-seo';
import TOA from '../../../components/Produtos/Laminados/TelhasOnduladas'

export default function PagTelhaOndulada() {

    return (
        <>
            <NextSeo
                title="Chapas PLanas de Alumínio | Alfa Alumínio"
                description="São chapas lisas de acabamento comum. Com ou sem aplicação de película em ambas as faces."
            />
            <TOA />
        </>
    )
}
