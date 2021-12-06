import React from 'react';
import { NextSeo } from 'next-seo';
import PUD from '../../../components/Produtos/Perfil/PerfilUDesiguais';

export default function PagPerfilUDesiguais() {

    return (
        <>
            <NextSeo
                title="Chapas Lavradas Estucco de Alumínio | Alfa Alumínio"
                description="Chapas Lavradas Xadrez de Alumínio de alta qualidade e procedência para uso em projetos de construção civil e industrial."
            />
            <PUD />
        </>
    )
}
