import React from 'react'
import { NextSeo } from 'next-seo';
import Empresa from '../components/PageComponents/Empresa'

export default function empresa() {
    return (
        <>
            <NextSeo
                title="A Empresa | Alfa Alumínio"
                description="Conheça a Alfa Alumínio e toda nossa experiência e competência de mercado!"
            />
            <Empresa />
        </>
    )
}
