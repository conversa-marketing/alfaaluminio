import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgChapa from '../../../../assets/img/chapa-estucco.jpg'
import Link from 'next/link'


function CLE() {

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
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Chapas Lavradas Estucco</h1>
                    <p>A Chapa Lavrada tem aspecto superficialmente modificado, com
                        aparência semelhante ao estuque em ambas as faces. Os materiais
                        lavrados Stucco são utilizados em refrigeradores, máquinas de
                        lavar, ar condicionado, revestimento interno de ônibus e na
                        construção civil, especialmente telhas para cobertura.</p>
                    <p>Também fornecidas em larguras e espessuras conforme sua necessidade,
                        com quantidade mínima exigida pelo fabricante.</p>
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
                            <th>Peso (kg/m²)</th>
                            <th>2500 x 1000 mm</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0,40</td>
                            <td>1,080</td>
                            <td>2,160</td>
                        </tr>

                        <tr>
                            <td>0,50</td>
                            <td>1,350</td>
                            <td>2,700</td>
                        </tr>
                        <tr>
                            <td>0,70</td>
                            <td>1,890</td>
                            <td>3,780</td>
                        </tr>
                        <tr>
                            <td>0,80</td>
                            <td>2,160</td>
                            <td>4,320</td>
                        </tr>
                        <tr>
                            <td>1,00</td>
                            <td>2,700</td>
                            <td>5,400</td>
                        </tr>
                        <tr>
                            <td>1,20</td>
                            <td>3,240</td>
                            <td>6,480</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default CLE