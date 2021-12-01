import React from 'react'
import Head from 'next/head'
import ProdutosPage from '../components/PageComponents/Produtos'

export default function produtos() {
    return (
        <>
            <Head>
                <title>Produtos</title>
            </Head>
            <ProdutosPage />
        </>
    )
}
