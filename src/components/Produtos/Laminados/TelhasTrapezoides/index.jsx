import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import ImgTrapezoides from '../../../../assets/img/telha-trapezoide.jpg'
import Link from 'next/link'


function TTA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={ImgTrapezoides}
                        alt="Telhas Trapezoides de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                        objectFit="cover"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Telhas Trapezoides de Alumínio</h1>
                    <p>Recomendada para aplicações em coberturas onde é solicitada sobrecarga
                        concentrada freqüente, ou até mesmo onde pessoas subam para manutenção de
                        calhas, ventiladores, etc.
                    </p>
                    <Link href="/contato" passHref>
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
                            <td rowSpan="6">1.056</td>
                            <td rowSpan="6">990</td>
                            <td>0,40</td>
                            <td>1,35</td>
                            <td>1,36</td>
                        </tr>

                        <tr>
                            <td>0,50</td>
                            <td>1,69</td>
                            <td>1,70</td>
                        </tr>

                        <tr>
                            <td>0,60</td>
                            <td>2,03</td>
                            <td>2,05</td>
                        </tr>

                        <tr>
                            <td>0,70</td>
                            <td>2,36</td>
                            <td>2,39</td>
                        </tr>

                        <tr>
                            <td>0,80</td>
                            <td>2,70</td>
                            <td>2,73</td>
                        </tr>

                        <tr>
                            <td>1,00</td>
                            <td>3,38</td>
                            <td>3,41</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default TTA