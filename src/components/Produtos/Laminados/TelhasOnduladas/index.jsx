import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgTelha from '../../../../assets/img/telha-ondulada.jpg'
import Link from 'next/link'


function TOA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgTelha}
                        alt="Telha Ondulada de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Telhas Onduladas de Alumínio</h1>
                    <p>Recomendada para aplicações nas estruturas em forma de arco. Para pequenos
                        raios e ângulos fechados, é necessário que se calandre a telha nas medidas exigidas
                        pelo projeto.
                    </p>
                    <p>Também fornecidas em larguras e espessuras conforme sua necessidade, com quantidade mínima exigida pelo fabricante.</p>
                    <Link href="/" passHref>
                        <S.DescriptionBtn>Saiba mais</S.DescriptionBtn>
                    </Link>
                </div>
            </S.ProductHeader>
            <S.TableWrapper>
                <S.TableCustom>
                    <thead>
                        <tr>
                            <th>Largura (mm)</th>
                            <th>Largura útil para Recobrimento simples (mm)</th>
                            <th>Espessura (mm)</th>
                            <th>Peso (kg/metro/linear)</th>
                            <th>Peso para Recobrimento simples (kg/m²)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowSpan="6">1.072</td>
                            <td rowSpan="6">988</td>
                            <td>0,40</td>
                            <td>1,32</td>
                            <td>1,33</td>
                        </tr>

                        <tr>
                            <td>0,50</td>
                            <td>1,65</td>
                            <td>1,67</td>
                        </tr>

                        <tr>
                            <td>0,60</td>
                            <td>1,98</td>
                            <td>2,00</td>
                        </tr>

                        <tr>
                            <td>0,70</td>
                            <td>2,31</td>
                            <td>2,33</td>
                        </tr>

                        <tr>
                            <td>0,80</td>
                            <td>2,64</td>
                            <td>2,67</td>
                        </tr>

                        <tr>
                            <td>1,00</td>
                            <td>3,29</td>
                            <td>3,33</td>
                        </tr>

                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default TOA