import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgChapa from '../../../../assets/img/chapa-plana.jpg'
import Link from 'next/link'


function CPA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgChapa}
                        alt="Chapa Plana de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Chapa Plana de Alumínio</h1>
                    <p>São chapas lisas de acabamento comum. Com ou sem aplicação de película em ambas as faces.</p>
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
                            <th rowSpan="2">Espessura da base (mm)</th>
                            <th rowSpan="2">Peso (kg/m²)</th>
                            <th colSpan="4">Comprimento x Largura - peso (kg/peça)</th>
                        </tr>
                        <tr>
                            <th>2000 x 1000 mm</th>
                            <th>2000 x 1250 mm</th>
                            <th>3000 x 1000 mm</th>
                            <th>2000 x 1250 mm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0,30</td>
                            <td>0,810</td>
                            <td>1,620</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>0,40</td>
                            <td>1,080</td>
                            <td>2,160</td>
                            <td>2,700</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>0,50</td>
                            <td>1,350</td>
                            <td>2,700</td>
                            <td>3,375</td>
                            <td>4,050</td>
                            <td>5,063</td>
                        </tr>

                        <tr>
                            <td>0,60</td>
                            <td>1,620</td>
                            <td>3,240</td>
                            <td>4,050</td>
                            <td>4,860</td>
                            <td>6,075</td>
                        </tr>

                        <tr>
                            <td>0,70</td>
                            <td>1,890</td>
                            <td>3,780</td>
                            <td>4,725</td>
                            <td>5,670</td>
                            <td>7,088</td>
                        </tr>

                        <tr>
                            <td>0,80</td>
                            <td>2,160</td>
                            <td>4,320</td>
                            <td>5,400</td>
                            <td>6,480</td>
                            <td>8,100</td>
                        </tr>

                        <tr>
                            <td>0,90</td>
                            <td>2,430</td>
                            <td>4,860</td>
                            <td>6,075</td>
                            <td>7,290</td>
                            <td>9,113</td>
                        </tr>

                        <tr>
                            <td>1,00</td>
                            <td>2,700</td>
                            <td>5,400</td>
                            <td>6,750</td>
                            <td>8,100</td>
                            <td>10,125</td>
                        </tr>

                        <tr>
                            <td>1,20</td>
                            <td>3,240</td>
                            <td>6,480</td>
                            <td>8,100</td>
                            <td>9,720</td>
                            <td>12,150</td>
                        </tr>

                        <tr>
                            <td>1,50</td>
                            <td>4,050</td>
                            <td>8,100</td>
                            <td>10,125</td>
                            <td>12,150</td>
                            <td>15,188</td>
                        </tr>

                        <tr>
                            <td>2,00</td>
                            <td>5,400</td>
                            <td>10,800</td>
                            <td>13,500</td>
                            <td>16,200</td>
                            <td>20,250</td>
                        </tr>

                        <tr>
                            <td>2,50</td>
                            <td>6,750</td>
                            <td>13,500</td>
                            <td>16,875</td>
                            <td>20,250</td>
                            <td>25,313</td>
                        </tr>

                        <tr>
                            <td>3,00</td>
                            <td>8,100</td>
                            <td>16,200</td>
                            <td>20,250</td>
                            <td>24,300</td>
                            <td>30,375</td>
                        </tr>

                        <tr>
                            <td>3,17</td>
                            <td>8,559</td>
                            <td>17,118</td>
                            <td>21,398</td>
                            <td>25,677</td>
                            <td>32,096</td>
                        </tr>

                        <tr>
                            <td>4,00</td>
                            <td>10,800</td>
                            <td>21,600</td>
                            <td>27,103</td>
                            <td>32,400</td>
                            <td>40,500</td>
                        </tr>

                        <tr>
                            <td>4,76</td>
                            <td>12,852</td>
                            <td>25,704</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>5,00</td>
                            <td>13,500</td>
                            <td>27,000</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>6,35</td>
                            <td>17,145</td>
                            <td>34,290</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>7,94</td>
                            <td>21,438</td>
                            <td>42,876</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>9,52</td>
                            <td>25,704</td>
                            <td>51,408</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>12,70</td>
                            <td>34,290</td>
                            <td>68,580</td>
                            <td>-</td>
                            <td>-</td>
                            <td>135,262</td>
                        </tr>

                        <tr>
                            <td>15,87</td>
                            <td>42,849</td>
                            <td>85,698</td>
                            <td>-</td>
                            <td>-</td>
                            <td>169,020</td>
                        </tr>

                        <tr>
                            <td>19,05</td>
                            <td>51,435</td>
                            <td>102,870</td>
                            <td>-</td>
                            <td>-</td>
                            <td>202,890</td>
                        </tr>

                        <tr>
                            <td>22,22</td>
                            <td>59,994</td>
                            <td>119,988</td>
                            <td>-</td>
                            <td>-</td>
                            <td>236,650</td>
                        </tr>

                        <tr>
                            <td>25,40</td>
                            <td>68,580</td>
                            <td>137,160</td>
                            <td>-</td>
                            <td>-</td>
                            <td>270,520</td>
                        </tr>

                        <tr>
                            <td>31,75</td>
                            <td>85,725</td>
                            <td>171,450</td>
                            <td>-</td>
                            <td>-</td>
                            <td>338,150</td>
                        </tr>

                        <tr>
                            <td>38,10</td>
                            <td>102,870</td>
                            <td>205,740</td>
                            <td>-</td>
                            <td>-</td>
                            <td>405,780</td>
                        </tr>

                        <tr>
                            <td>44,45</td>
                            <td>120,015</td>
                            <td>240,030</td>
                            <td>-</td>
                            <td>-</td>
                            <td>473,410</td>
                        </tr>

                        <tr>
                            <td>50,80</td>
                            <td>137,160</td>
                            <td>274,320</td>
                            <td>-</td>
                            <td>-</td>
                            <td>541,040</td>
                        </tr>

                        <tr>
                            <td>57,15</td>
                            <td>154,305</td>
                            <td>308,610</td>
                            <td>-</td>
                            <td>-</td>
                            <td>608,670</td>
                        </tr>

                        <tr>
                            <td>63,50</td>
                            <td>171,450</td>
                            <td>342,900</td>
                            <td>-</td>
                            <td>-</td>
                            <td>676,300</td>
                        </tr>

                        <tr>
                            <td>76,20</td>
                            <td>205,740</td>
                            <td>411,480</td>
                            <td>-</td>
                            <td>-</td>
                            <td>811,560</td>
                        </tr>

                        <tr>
                            <td>88,90</td>
                            <td>240,030</td>
                            <td>480,060</td>
                            <td>-</td>
                            <td>-</td>
                            <td>946,820</td>
                        </tr>

                        <tr>
                            <td>101,60</td>
                            <td>274,320</td>
                            <td>548,640</td>
                            <td>-</td>
                            <td>-</td>
                            <td>1.082,101</td>
                        </tr>

                        <tr>
                            <td>114,30</td>
                            <td>328,340</td>
                            <td>656,681</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>127,00</td>
                            <td>364,820</td>
                            <td>729,640</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>152,40</td>
                            <td>437,790</td>
                            <td>875,580</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>177,80</td>
                            <td>510,750</td>
                            <td>1.021,500</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                        <tr>
                            <td>203,20</td>
                            <td>583,720</td>
                            <td>1.067,440</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>

                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default CPA