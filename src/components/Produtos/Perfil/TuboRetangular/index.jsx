import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/tubo-retangular.jpg'
import Link from 'next/link'


function BTRE() {

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
                    <h1>Tubo Retangular de Alumínio</h1>
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
                            <td>Coluna1</td>
                            <td>Coluna2</td>
                            <td rowSpan="2">PESO (kg/m)</td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>B</td>
                            <td>S</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>K-004</td>
                            <td>1 (25,40MM)</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,298</td>
                        </tr>
                        <tr>
                            <td>K-014</td>
                            <td> 30,00MM</td>
                            <td> 20,00MM</td>
                            <td>  2,00MM</td>
                            <td>0,497</td>
                        </tr>
                        <tr>
                            <td>K-017</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,521</td>
                        </tr>
                        <tr>
                            <td>K-073</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>2,00MM</td>
                            <td>0,645</td>
                        </tr>
                        <tr>
                            <td>K-007</td>
                            <td>2 (50,80MM)</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,491</td>
                        </tr>
                        <tr>
                            <td>K-042</td>
                            <td>2 (50,80MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>1,00MM</td>
                            <td>0,411</td>
                        </tr>
                        <tr>
                            <td>K-012</td>
                            <td>2 (50,80MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,623</td>
                        </tr>
                        <tr>
                            <td>K-001</td>
                            <td>2 (50,80MM)</td>
                            <td>1 (25,40MM)</td>
                            <td>2,00MM</td>
                            <td>0,781</td>
                        </tr>
                        <tr>
                            <td>K-080</td>
                            <td>2 (50,80MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>1,466</td>
                        </tr>
                        <tr>
                            <td>K-015</td>
                            <td>2 (50,80MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>2,00MM</td>
                            <td>0,917</td>
                        </tr>
                        <tr>
                            <td>K-023</td>
                            <td>2.3/8 (60,32MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,773</td>
                        </tr>
                        <tr>
                            <td>K-018</td>
                            <td>2.3/8 (60,32MM) </td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>  2,00MM</td>
                            <td>1,021</td>
                        </tr>
                        <tr>
                            <td>K-019</td>
                            <td>3(76,20MM)</td>
                            <td>1 (25,40MM)</td>
                            <td> 1/16 (1,58MM)</td>
                            <td>0,838</td>
                        </tr>
                        <tr>
                            <td>K-028</td>
                            <td>3 (76,20MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,902</td>
                        </tr>
                        <tr>
                            <td>K-002</td>
                            <td>3 (76,20MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>2,00MM</td>
                            <td>1,191</td>
                        </tr>
                        <tr>
                            <td>K-079</td>
                            <td>3 (76,20MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,754</td>
                        </tr>
                        <tr>
                            <td>K-020</td>
                            <td>4 (101,60MM)</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>2,00MM</td>
                            <td>1,471</td>
                        </tr>
                        <tr>
                            <td>K-026</td>
                            <td>4 (101,60MM)</td>
                            <td>2 (50,80MM)</td>
                            <td>2,00MM</td>
                            <td>1,603</td>
                        </tr>
                        <tr>
                            <td>K-008</td>
                            <td>4 (101,60MM)</td>
                            <td>2 (50,80MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>2,511</td>
                        </tr>
                        <tr>
                            <td>K-091</td>
                            <td>6 (152,40MM)</td>
                            <td>2 (50,80MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>3,417</td>
                        </tr>
                        <tr>
                            <td>K-029</td>
                            <td>6 (152,40MM)</td>
                            <td>3 (76,20MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>3,804</td>
                        </tr>
                        <tr>
                            <td>K-047</td>
                            <td>150,00MM</td>
                            <td>50,00MM</td>
                            <td> 2,70MM</td>
                            <td>2,837</td>
                        </tr>
                        <tr>
                            <td>K-602</td>
                            <td>100,00MM</td>
                            <td>50,00MM</td>
                            <td>3,20MM</td>
                            <td>2,66</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BTRE