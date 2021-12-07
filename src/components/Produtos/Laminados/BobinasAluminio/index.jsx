import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgBobina from '../../../../assets/img/bobina-aluminio.jpg'
import Link from 'next/link'


function BDA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgBobina}
                        alt="Bobina de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Bobinas de Alumínio</h1>
                    <p>Durante a fabricação de diversos equipamentos e estruturas
                        industriais, pode ser necessário se utilizar bobinas, que
                        fornecem a quantia necessária de materiais metálicos para
                        a aplicação em uma indústria, entre os tipos de bobinas,
                        está a Bobina de Alumínio, muito procurada no mercado em
                        vista de sua utilização em muitos setores.</p>
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
                            <th>Dimensão</th>
                            <th>Espessura</th>
                            <th>Peso(kg/m/linear)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>300</td>
                            <td>0,40</td>
                            <td>0,326</td>
                        </tr>

                        <tr>
                            <td>400</td>
                            <td>0,40</td>
                            <td>0,434</td>
                        </tr>
                        <tr>
                            <td>500</td>
                            <td>0,40</td>
                            <td>0,542</td>
                        </tr>
                        <tr>
                            <td>600</td>
                            <td>0,40</td>
                            <td>0,651</td>
                        </tr>
                        <tr>
                            <td>300</td>
                            <td>0,50</td>
                            <td>0,407</td>
                        </tr>
                        <tr>
                            <td>400</td>
                            <td>0,50</td>
                            <td>0,542</td>
                        </tr>

                        <tr>
                            <td>500</td>
                            <td>0,50</td>
                            <td>0,678</td>
                        </tr>

                        <tr>
                            <td>600</td>
                            <td>0,50</td>
                            <td>0,813</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>0,40</td>
                            <td>1,084</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>0,50</td>
                            <td>1,355</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>0,60</td>
                            <td>1,626</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>0,70</td>
                            <td>1,897</td>
                        </tr>

                        <tr>
                            <td>1200</td>
                            <td>0,70</td>
                            <td>2,277</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>0,80</td>
                            <td>2,168</td>
                        </tr>

                        <tr>
                            <td>1000</td>
                            <td>1,00</td>
                            <td>2,710</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BDA