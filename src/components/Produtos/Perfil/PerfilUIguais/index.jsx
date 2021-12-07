import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/perfil-u-igual.jpg'
import Link from 'next/link'


function PUI() {

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
                    <h1>Perfil U Abas Iguais</h1>
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
                            <th>Coluna1</th>
                            <th rowSpan="2">PESO (kg/m)</th>
                        </tr>
                        <tr>
                            <th>A</th>
                            <th>S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>U-023</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1,00mm</td>
                            <td>0,072</td>
                        </tr>
                        <tr>
                            <td>U-001</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,108</td>
                        </tr>
                        <tr>
                            <td>U-002</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,149</td>
                        </tr>
                        <tr>
                            <td>U-037</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,191</td>
                        </tr>
                        <tr>
                            <td>U-029</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,231</td>
                        </tr>
                        <tr>
                            <td>U-010</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,438</td>
                        </tr>
                        <tr>
                            <td>U-031</td>
                            <td>1 (25,40mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,602</td>
                        </tr>
                        <tr>
                            <td>U-019</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,766</td>
                        </tr>
                        <tr>
                            <td>U-021</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,924</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default PUI