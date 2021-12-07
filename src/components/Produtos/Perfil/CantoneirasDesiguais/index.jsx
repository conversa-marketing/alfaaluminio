import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/cantoneira-desigual.jpg'
import Link from 'next/link'


function CAD() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Barra Sextavada de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Cantoneiras Abas Desiguais</h1>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
            <S.TableWrapper>
                <S.TableCustom>
                    <thead>
                        <tr>
                            <th rowSpan="2">PERFIL</th>
                            <th>Dimensões (mm)</th>
                            <th>Coluna 1</th>
                            <th>Coluna 2</th>
                            <th rowSpan="2">PESO (kg/m)</th>
                        </tr>
                        <tr>
                            <th>A</th>
                            <th>B</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>L-102</td>
                            <td>1 (25,40mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,299</td>
                        </tr>

                        <tr>
                            <td>L-113</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,518</td>
                        </tr>

                        <tr>
                            <td>L-111</td>
                            <td>2 (50,80mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,62</td>
                        </tr>

                        <tr>
                            <td>L-112</td>
                            <td>2 (50,80mm)</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,751</td>
                        </tr>

                        <tr>
                            <td>L-144</td>
                            <td>100,00mm</td>
                            <td>60,00mm</td>
                            <td>2,50mm</td>
                            <td>1,083</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default CAD