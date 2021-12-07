import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/cantoneira-igual.jpg'
import Link from 'next/link'


function CAI() {

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
                    <h1>Barra Sextavada de Alumínio</h1>
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
                            <td>L-101</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,102</td>
                        </tr>
                        <tr>
                            <td>L-002</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,191</td>
                        </tr>
                        <tr>
                            <td>L-037</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,129</td>
                        </tr>
                        <tr>
                            <td>L-007</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,245</td>
                        </tr>
                        <tr>
                            <td>L-038</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,156</td>
                        </tr>
                        <tr>
                            <td>L-009</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1/8 (3,17MM) </td>
                            <td>0,299</td>
                        </tr>
                        <tr>
                            <td>L-040</td>
                            <td>1 (25,40MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,211</td>
                        </tr>
                        <tr>
                            <td>L-017</td>
                            <td>1 (25,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,408</td>
                        </tr>
                        <tr>
                            <td>L-018</td>
                            <td>1 (25,40MM)</td>
                            <td>3/16 (4,76MM)</td>
                            <td>0,592</td>
                        </tr>
                        <tr>
                            <td>L-019</td>
                            <td>1 (25,40MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>0,762</td>
                        </tr>
                        <tr>
                            <td>L-022</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,516</td>
                        </tr>
                        <tr>
                            <td>L-023</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td> 3/16  (4,76MM)</td>
                            <td>0,755</td>
                        </tr>
                        <tr>
                            <td>L-067</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,318</td>
                        </tr>
                        <tr>
                            <td>L-027</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,625</td>
                        </tr>
                        <tr>
                            <td>L-028</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3/16 (4,76MM)</td>
                            <td>0,918</td>
                        </tr>
                        <tr>
                            <td>L-047</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>1,198</td>
                        </tr>
                        <tr>
                            <td>L-099</td>
                            <td>2 (50,80MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,435</td>
                        </tr>
                        <tr>
                            <td>L-031</td>
                            <td>2 (50,80MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,842</td>
                        </tr>
                        <tr>
                            <td>L-032</td>
                            <td>2 (50,80MM)</td>
                            <td>3/16 (4,76MM)</td>
                            <td>1,245</td>
                        </tr>
                        <tr>
                            <td>L-033</td>
                            <td>2 (50,80MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>1,633</td>
                        </tr>
                        <tr>
                            <td>L-042</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,601</td>
                        </tr>
                        <tr>
                            <td>L-034</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>2,069</td>
                        </tr>
                        <tr>
                            <td>L-035</td>
                            <td>3 (76,20MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,268</td>
                        </tr>
                        <tr>
                            <td>L-036</td>
                            <td>4 (101,60MM)</td>
                            <td>1/2 (12,70MM)</td>
                            <td>6,532</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default CAI