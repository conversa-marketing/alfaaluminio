import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/tubo-quadrado.jpg'
import Link from 'next/link'


function BTQ() {

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
                    <h1>Tubo Quadrado de Alumínio</h1>
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
                            <td>K-114</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,191</td>
                        </tr>
                        <tr>
                            <td>K-113</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,245</td>
                        </tr>
                        <tr>
                            <td>K-101</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,303</td>
                        </tr>
                        <tr>
                            <td>K-102</td>
                            <td>1 (25,40MM) </td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,408</td>
                        </tr>
                        <tr>
                            <td>K-103</td>
                            <td>1 (25,40MM)</td>
                            <td>2,00MM</td>
                            <td>0,505</td>
                        </tr>
                        <tr>
                            <td>K-109</td>
                            <td>1 (25,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,764</td>
                        </tr>
                        <tr>
                            <td>K-104</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,491</td>
                        </tr>
                        <tr>
                            <td>K-105</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>2,00MM</td>
                            <td>0,643</td>
                        </tr>
                        <tr>
                            <td>K-106</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td> 1/16  (1,58MM) </td>
                            <td>0,591</td>
                        </tr>
                        <tr>
                            <td>K-151</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>2,00MM</td>
                            <td>0,779</td>
                        </tr>
                        <tr>
                            <td>K-107</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,211</td>
                        </tr>
                        <tr>
                            <td>K-136</td>
                            <td>2 (50,80MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,833</td>
                        </tr>
                        <tr>
                            <td>K-108</td>
                            <td>2 (50,80MM)</td>
                            <td>2,00MM</td>
                            <td>1,054</td>
                        </tr>
                        <tr>
                            <td>K-400</td>
                            <td>2 (50,80MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,665</td>
                        </tr>
                        <tr>
                            <td>K-126</td>
                            <td>3 (76,20MM)</td>
                            <td>1,30MM</td>
                            <td>1,091</td>
                        </tr>
                        <tr>
                            <td>K-115</td>
                            <td>3 (76,20MM)</td>
                            <td>2,00MM</td>
                            <td>1,603</td>
                        </tr>
                        <tr>
                            <td>K-154</td>
                            <td>3 (76,20MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>2,513</td>
                        </tr>
                        <tr>
                            <td>K-160</td>
                            <td>4 (101,60MM)</td>
                            <td>1,80MM</td>
                            <td>2,021</td>
                        </tr>
                        <tr>
                            <td>K-145</td>
                            <td>4 (101,60MM)</td>
                            <td>2,50MM</td>
                            <td>2,686</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper>
    )
}

export default BTQ