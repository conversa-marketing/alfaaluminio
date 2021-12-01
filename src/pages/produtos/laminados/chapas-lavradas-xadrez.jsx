import React from 'react';
import { NextSeo } from 'next-seo';
import CLX from '../../../components/Produtos/Laminados/ChapasLavradasXadrez'

export default function PagChapaLavrada() {

    return (
        <>
            <NextSeo
                title="Chapas Lavradas Xadrez de Alumínio | Alfa Alumínio"
                description="Chapas Lavradas Xadrez de Alumínio de alta qualidade e procedência para uso em projetos de construção civil e industrial."
                openGraph={{
                    type: 'website',
                    locale: 'pt_BR',
                    url: 'localhost:3000',
                    site_name: 'Alfa Alumínio',
                    title: 'Alfa Alumínio',
                    images: [
                        {
                            url: 'https://willianjusten.com.br/assets/img/blog-cover.png',
                            width: 1200,
                            height: 630,
                            alt: 'Contato Alfa Alumínio'
                        }
                    ]
                }}
            />
            <CLX />
        </>
    )
}
