import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-redonda.jpg'
import Link from 'next/link'


function BRA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Barra Redonda de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Barra Redonda de Alumínio</h1>
                    <p>Sua utilização engloba diversas situações na indústria, como eixos, ganchos, pinos, torres de resfriamento, hastes e outras aplicações.</p>
                    <Link href="/contato" passHref>
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
                            <td>V-047</td>
                            <td>1/4 (6,35MM)</td>
                            <td>0,086</td>
                        </tr>
                        <tr>
                            <td>V-073</td>
                            <td>5/16 (7,93MM)</td>
                            <td>0,133</td>
                        </tr>
                        <tr>
                            <td>V-001</td>
                            <td>3/8 (9,52MM)</td>
                            <td>0,192</td>
                        </tr>
                        <tr>
                            <td>V-003</td>
                            <td>7/16 (11,11MM)</td>
                            <td>0,267</td>
                        </tr>
                        <tr>
                            <td>V-004</td>
                            <td>1/2 (12,70MM)</td>
                            <td>0,342</td>
                        </tr>
                        <tr>
                            <td>V-005</td>
                            <td>9/16(14,28MM)</td>
                            <td>0,432</td>
                        </tr>
                        <tr>
                            <td>V-007</td>
                            <td>5/8 (15,87MM)</td>
                            <td>0,533</td>
                        </tr>
                        <tr>
                            <td>V-009</td>
                            <td>3/4 (19,05MM)</td>
                            <td>0,771</td>
                        </tr>
                        <tr>
                            <td>V-011</td>
                            <td>7/8 (22,22MM)</td>
                            <td>1,047</td>
                        </tr>
                        <tr>
                            <td>V-012</td>
                            <td>1 (25,40MM)</td>
                            <td>1,368</td>
                        </tr>
                        <tr>
                            <td>V-014</td>
                            <td>1.1/8 (28,57MM)</td>
                            <td>1,734</td>
                        </tr>
                        <tr>
                            <td>V-016</td>
                            <td>1.1/4  (31,75MM) </td>
                            <td>2,138</td>
                        </tr>
                        <tr>
                            <td>V-017</td>
                            <td>1.3/8 (34,92MM)</td>
                            <td>2,586</td>
                        </tr>
                        <tr>
                            <td>V-018</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3,078</td>
                        </tr>
                        <tr>
                            <td>V-020</td>
                            <td>1.5/8  (41,26MM)</td>
                            <td>3,611</td>
                        </tr>
                        <tr>
                            <td>V-021</td>
                            <td>1.3/4 (44,45MM)</td>
                            <td>4,188</td>
                        </tr>
                        <tr>
                            <td>V-022</td>
                            <td>1.7/8 (47,61MM)</td>
                            <td>4,806</td>
                        </tr>
                        <tr>
                            <td>V-024</td>
                            <td>2 (50,80MM)</td>
                            <td>5,472</td>
                        </tr>
                        <tr>
                            <td>V-025</td>
                            <td>2.1/8 (53,97MM)</td>
                            <td>6,177</td>
                        </tr>
                        <tr>
                            <td>V-026</td>
                            <td>2.1/4 (57,15MM)</td>
                            <td>6,926</td>
                        </tr>
                        <tr>
                            <td>V-028</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>8,551</td>
                        </tr>
                        <tr>
                            <td>V-030</td>
                            <td>2.3/4 (69,85MM)</td>
                            <td>10,346</td>
                        </tr>
                        <tr>
                            <td>V-032</td>
                            <td>3 (76,20MM)</td>
                            <td>12,313</td>
                        </tr>
                        <tr>
                            <td>V-034</td>
                            <td>3.1/4 (82,55MM)</td>
                            <td>14,451</td>
                        </tr>
                        <tr>
                            <td>V-035</td>
                            <td>3.1/2 (88,90MM)</td>
                            <td>16,759</td>
                        </tr>
                        <tr>
                            <td>V-037</td>
                            <td>3.3/4 (95,25MM)</td>
                            <td>19,302</td>
                        </tr>
                        <tr>
                            <td>V-039</td>
                            <td>4 (101,60MM)</td>
                            <td>21,891</td>
                        </tr>
                        <tr>
                            <td>V-042</td>
                            <td>4.1/2 (114,30MM) </td>
                            <td>27,706</td>
                        </tr>
                        <tr>
                            <td>V-052</td>
                            <td>5 (127,00MM) </td>
                            <td>34,204</td>
                        </tr>
                        <tr>
                            <td>V-051</td>
                            <td>5.1/2 (139,70MM)</td>
                            <td>41,391</td>
                        </tr>
                        <tr>
                            <td>V-049</td>
                            <td>6 (152,40MM)</td>
                            <td>49,252</td>
                        </tr>
                        <tr>
                            <td>V-065</td>
                            <td>6.1/2 (165,10MM)</td>
                            <td>57,773</td>
                        </tr>
                        <tr>
                            <td>V-050</td>
                            <td>7 (177,80MM)</td>
                            <td>67,038</td>
                        </tr>
                        <tr>
                            <td>V-053</td>
                            <td>8 (203,20MM)</td>
                            <td>87,559</td>
                        </tr>
                        <tr>
                            <td>V-056</td>
                            <td>9 (228,60MM) </td>
                            <td>110,817</td>
                        </tr>
                        <tr>
                            <td>V-055</td>
                            <td>10 (254,00MM)</td>
                            <td>136,811</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BRA