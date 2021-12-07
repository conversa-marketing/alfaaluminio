import React from 'react'
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/perfil-t-igual.jpg'
import Link from 'next/link'


function PTI() {

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
                    <h1>Perfil T Abas Iguais</h1>
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
                            <td>T-007</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,301</td>
                        </tr>
                        <tr>
                            <td>T-030</td>
                            <td>1 (25,40mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,211</td>
                        </tr>
                        <tr>
                            <td>T-015</td>
                            <td>1 (25,40mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,411</td>
                        </tr>
                        <tr>
                            <td>T-020</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,521</td>
                        </tr>
                        <tr>
                            <td>T-024</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,629</td>
                        </tr>
                        <tr>
                            <td>T-027</td>
                            <td>2 (50,80mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,828</td>
                        </tr>
                        <tr>
                            <td>T-029</td>
                            <td>2 (50,80mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>1,639</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper>
    )
}

export default PTI