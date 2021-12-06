import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-quadrada.jpeg'
import Link from 'next/link'


function BQA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Barras Quadradas de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Barras Quadradas de Alumínio</h1>
                    <p>A barra retangular de alumínio é uma solução muito versátil e que está presente em diversos processos industriais, podendo ser aplicada com segurança em formas diferentes.</p>
                    <p>Também fornecidas em larguras e espessuras conforme sua necessidade,
                        com quantidade mínima exigida pelo fabricante.</p>
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
                            <td>Q-001</td>
                            <td>1/4 (6,35MM)</td>
                            <td>0,109</td>
                        </tr>
                        <tr>
                            <td>Q-003</td>
                            <td>5/16 (7,93MM)</td>
                            <td>0,171</td>
                        </tr>
                        <tr>
                            <td>Q-004</td>
                            <td>3/8 (9,52MM)</td>
                            <td>0,245</td>
                        </tr>
                        <tr>
                            <td>Q-007</td>
                            <td>1/2 (12,70MM)</td>
                            <td>0,441</td>
                        </tr>
                        <tr>
                            <td>Q-009</td>
                            <td>5/8 (15,87MM)</td>
                            <td>0,682</td>
                        </tr>
                        <tr>
                            <td>Q-010</td>
                            <td>3/4 (19,05MM)</td>
                            <td>0,983</td>
                        </tr>
                        <tr>
                            <td>Q-012</td>
                            <td>7/8 (22,22MM) </td>
                            <td>1,338</td>
                        </tr>
                        <tr>
                            <td>Q-014</td>
                            <td>1 (25,40MM)</td>
                            <td>1,748</td>
                        </tr>
                        <tr>
                            <td>Q-028</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>2,731</td>
                        </tr>
                        <tr>
                            <td>Q-017</td>
                            <td>1.3/8 (34,92MM)</td>
                            <td>3,304</td>
                        </tr>
                        <tr>
                            <td>Q-026</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3,933</td>
                        </tr>
                        <tr>
                            <td>Q-018</td>
                            <td>40,00MM </td>
                            <td>4,336</td>
                        </tr>
                        <tr>
                            <td>Q-019</td>
                            <td>1.3/4 (44,45MM)</td>
                            <td>5,354</td>
                        </tr>
                        <tr>
                            <td>Q-021</td>
                            <td>2 (50,80MM)</td>
                            <td>6,993</td>
                        </tr>
                        <tr>
                            <td>Q-032</td>
                            <td>2.1/4 (57,15MM)</td>
                            <td>8,851</td>
                        </tr>
                        <tr>
                            <td>Q-029</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>10,927</td>
                        </tr>
                        <tr>
                            <td>Q-037</td>
                            <td>2.3/4 (69,85MM)</td>
                            <td>13,222</td>
                        </tr>
                        <tr>
                            <td>Q-027</td>
                            <td>3 (76,20MM)</td>
                            <td>15,735</td>
                        </tr>
                        <tr>
                            <td>Q-030</td>
                            <td>3.1/2 (88,90MM)</td>
                            <td>21,417</td>
                        </tr>
                        <tr>
                            <td>Q-031</td>
                            <td>4 (101,60MM)</td>
                            <td>27,974</td>
                        </tr>
                        <tr>
                            <td>Q-033</td>
                            <td>4.1/2 (114,30MM)</td>
                            <td>35,404</td>
                        </tr>
                        <tr>
                            <td>Q-036</td>
                            <td>5 (127,00MM)</td>
                            <td>43,709</td>
                        </tr>
                        <tr>
                            <td>Q-038</td>
                            <td>155,00MM</td>
                            <td>65,107</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BQA