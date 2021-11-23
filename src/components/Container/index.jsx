import React from 'react';
import * as S from './styled';

function Container({ children }) {
    return (
        <S.ContainerWrapper>
            {children}
        </S.ContainerWrapper>
    )
}

export default Container