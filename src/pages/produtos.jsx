import React from 'react'
import Head from 'next/head'
import ProdutosPage from '../components/PageComponents/Produtos'

export default function produtos() {
    return (
        <>
            <NextSeo
                title="Produtos | Alfa Alumínio"
                description="Veja toda nossa linha de produtos e suas informações e entre em contato!"
            />
            <ProdutosPage />
        </>
    )
}
