import React from 'react'
import { Whatsapp } from '@styled-icons/boxicons-logos/Whatsapp';

import * as S from './styled'

function WhatsAppBtn() {
    return (
        <S.WhatsWrapper>
            <a href="https://wa.me/5511998208688?text=Olá,%20tenho%20interesse%20em%20um%20produto%20do%20site%20Alfa%20Aluminio" target="_blank" rel="noopener noreferrer">
                <Whatsapp size={30} />
            </a>
        </S.WhatsWrapper>
    )
}

export default WhatsAppBtn
