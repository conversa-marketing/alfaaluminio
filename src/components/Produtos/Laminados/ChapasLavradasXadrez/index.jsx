import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgChapa from '../../../../assets/img/chapa-xadrez.jpg'
import Link from 'next/link'


function CLX() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgChapa}
                        alt="Chapa Lavrada Xadrez"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Chapas Lavradas Xadrez</h1>
                    <p>Antiderrapante, a chapa xadrez é um material muito utilizado em locais que exijam segurança, como escadas, rampas, bases para máquinas, pisos de ônibus e na indústria de construção (decorativo). Além de ser muito leve e muito resistente a impactos e corrosão.</p>
                    <p>Também fornecidas em larguras e espessuras conforme sua necessidade, com quantidade mínima exigida pelo fabricante.</p>
                    <Link href="/contato" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
            <S.TableWrapper>
                <S.TableCustom>
                    <thead>
                        <tr>
                            <th>Espessura da base (mm)</th>
                            <th>Altura dos ressaltos (mm)</th>
                            <th>Peso (kg/m²)</th>
                            <th>Comprimento x Largura / 2500 x 1000 mm (kg/peça)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1,00</td>
                            <td>0,50 a 1,30</td>
                            <td>3,880</td>
                            <td>9,700</td>
                        </tr>

                        <tr>
                            <td>1,20</td>
                            <td>0,50 a 1,30</td>
                            <td>4,600</td>
                            <td>11,500</td>
                        </tr>
                        <tr>
                            <td>1,50</td>
                            <td>0,50 a 1,30</td>
                            <td>5,320</td>
                            <td>13,300</td>
                        </tr>
                        <tr>
                            <td>1,80</td>
                            <td>0,50 a 1,30</td>
                            <td>6,160</td>
                            <td>15,400</td>
                        </tr>
                        <tr>
                            <td>2,00</td>
                            <td>0,50 a 1,30</td>
                            <td>6,800</td>
                            <td>17,000</td>
                        </tr>
                        <tr>
                            <td>2,20</td>
                            <td>0,50 a 1,30</td>
                            <td>7,200</td>
                            <td>18,000</td>
                        </tr>

                        <tr>
                            <td>2,70</td>
                            <td>0,50 a 1,30</td>
                            <td>8,400</td>
                            <td>21,000</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default CLX