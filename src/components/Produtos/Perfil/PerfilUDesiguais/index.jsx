import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/perfil-u-desigual.jpg'
import Link from 'next/link'


function BRA() {

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
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Perfil `"U"` Abas Desiguais</h1>
                    <p>O vergalhão sextavado de alumínio é uma peça amplamente aplicada na estruturação dos mais variados segmentos, sendo também eficiente na utilização da manutenção de máquinas e equipamentos industriais.</p>
                    <Link href="/" passHref>
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
                            <th>Coluna1</th>
                            <th>Coluna2</th>
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
                            <td>U-125</td>
                            <td>1 (25,40MM)</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,382</td>
                        </tr>
                        <tr>
                            <td>U-132</td>
                            <td>2 (50,80MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,815</td>
                        </tr>
                        <tr>
                            <td>U-140</td>
                            <td>3 (76,20MM)</td>
                            <td> 1 (25,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,026</td>
                        </tr>
                        <tr>
                            <td>U-144</td>
                            <td>4 (101,60MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,681</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BRA