import React from 'react';
import Image from  'next/image';
import cbaLogo from '../../assets/img/cba-logo.png'

import * as S from './styled'



function Clients () {
    
    
    return (
        <S.ClientsWrapper>
            <S.ClientsTitle>
                <h2>Nossos <span>Clientes</span></h2>
            </S.ClientsTitle>
            <S.LogosWrapper>
                <S.LogoClient>
                    <Image src={cbaLogo} alt='Logo CBA' />
                </S.LogoClient>
                <S.LogoClient>
                    <Image src={cbaLogo} alt='Logo CBA' />
                </S.LogoClient>
                <S.LogoClient>
                    <Image src={cbaLogo} alt='Logo CBA' />
                </S.LogoClient>
                <S.LogoClient>
                    <Image src={cbaLogo} alt='Logo CBA' />
                </S.LogoClient>
                <S.LogoClient>
                    <Image src={cbaLogo} alt='Logo CBA' />
                </S.LogoClient>
            </S.LogosWrapper>
        </S.ClientsWrapper>
    )
}

export default Clients;