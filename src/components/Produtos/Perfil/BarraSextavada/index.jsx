import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-sextavada.jpg'
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
                    <h1>Barra Sextavada de Alumínio</h1>
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
                            <td rowSpan="2">PERFIL</td>
                            <td>Dimensões (mm)</td>
                            <td rowSpan="2">PESO (kg/m)</td>
                        </tr>
                        <tr>
                            <td>A</td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>S-001</td>
                            <td>3/8 (9,52MM)</td>
                            <td>0,212</td>
                        </tr>
                        <tr>
                            <td>S-002</td>
                            <td>7/16 (11,11MM)</td>
                            <td>0,289</td>
                        </tr>
                        <tr>
                            <td>S-003</td>
                            <td>1/2 (12,70MM)</td>
                            <td>0,377</td>
                        </tr>
                        <tr>
                            <td>S-013</td>
                            <td>9/16 (14,28mm)</td>
                            <td>0,433</td>
                        </tr>
                        <tr>
                            <td>S-005</td>
                            <td>5/8 (15,87MM)</td>
                            <td>0,589</td>
                        </tr>
                        <tr>
                            <td>S-007</td>
                            <td>3/4 (19,05MM)</td>
                            <td>0,849</td>
                        </tr>
                        <tr>
                            <td>S-008</td>
                            <td> 7/8 (22,22MM)</td>
                            <td>1,154</td>
                        </tr>
                        <tr>
                            <td>S-009</td>
                            <td>1 (25,40MM)</td>
                            <td>1,508</td>
                        </tr>
                        <tr>
                            <td>S-012</td>
                            <td>1.1/8 (28,57mm)</td>
                            <td>1,911</td>
                        </tr>
                        <tr>
                            <td>S-016</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>2,363</td>
                        </tr>
                        <tr>
                            <td>S-015</td>
                            <td>1.3/8 (34,92MM)</td>
                            <td>2,851</td>
                        </tr>
                        <tr>
                            <td>S-011</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3,394</td>
                        </tr>
                        <tr>
                            <td>S-018</td>
                            <td>1.5/8 (41,27mm)</td>
                            <td>4,061</td>
                        </tr>
                        <tr>
                            <td>S-020</td>
                            <td>1.3/4 (44,45MM) </td>
                            <td>5,275</td>
                        </tr>
                        <tr>
                            <td>S-019</td>
                            <td>2 (50,80MM)</td>
                            <td>6,029</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BRA