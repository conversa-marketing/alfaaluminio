import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/tubo-redondo-schedule.jpg'
import Link from 'next/link'


function BTRS() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Barra Sextavada de Alumínio"
                        quality={100}
                        placeholder="blur"
                        objectFit="cover"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Tubo Redondo Schedule de Alumínio</h1>
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
                            <th>TUBOS SCHEDULE</th>
                            <th>Coluna1</th>
                            <th>Coluna2</th>
                            <th>Coluna3</th>
                            <th>Coluna4</th>
                            <th rowSpan="2">PESO (kg/m)</th>
                        </tr>
                        <tr>
                            <th>Schedule S</th>
                            <th>Nominal</th>
                            <th>øExterno</th>
                            <th>øInterno</th>
                            <th>Espessura S</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>KS-2002</td>
                            <td>40</td>
                            <td> 1/2</td>
                            <td>21,34</td>
                            <td>15,8</td>
                            <td>2,77</td>
                            <td>0,436</td>
                        </tr>
                        <tr>
                            <td>KS-2022</td>
                            <td>80</td>
                            <td> 1/2</td>
                            <td>21,34</td>
                            <td>13,87</td>
                            <td>3,73</td>
                            <td>0,557</td>
                        </tr>
                        <tr>
                            <td>KS-2003</td>
                            <td>40</td>
                            <td> 3/4</td>
                            <td>26,67</td>
                            <td>20,93</td>
                            <td>2,87</td>
                            <td>0,579</td>
                        </tr>
                        <tr>
                            <td>KS-2004</td>
                            <td>40</td>
                            <td>1</td>
                            <td>33,4</td>
                            <td>26,64</td>
                            <td>3,38</td>
                            <td>0,861</td>
                        </tr>
                        <tr>
                            <td>KS-2024</td>
                            <td>80</td>
                            <td>1</td>
                            <td>33,4</td>
                            <td>24,31</td>
                            <td>4,55</td>
                            <td>1,113</td>
                        </tr>
                        <tr>
                            <td>KS-2005</td>
                            <td>40</td>
                            <td>1.1/4</td>
                            <td>42,16</td>
                            <td>35,05</td>
                            <td>3,56</td>
                            <td>1,165</td>
                        </tr>
                        <tr>
                            <td>KS-2025</td>
                            <td>80</td>
                            <td>1.1/4</td>
                            <td>42,16</td>
                            <td>32,46</td>
                            <td>4,85</td>
                            <td>1,534</td>
                        </tr>
                        <tr>
                            <td>KS-2006</td>
                            <td>40</td>
                            <td>1.1/2</td>
                            <td>48,26</td>
                            <td>40,89</td>
                            <td>3,68</td>
                            <td>1,391</td>
                        </tr>
                        <tr>
                            <td>KS-2026</td>
                            <td>80</td>
                            <td>1.1/2</td>
                            <td>48,26</td>
                            <td>38,1</td>
                            <td>5,08</td>
                            <td>1,861</td>
                        </tr>
                        <tr>
                            <td>KS-2007</td>
                            <td>40</td>
                            <td>2</td>
                            <td>60,33</td>
                            <td>52,5</td>
                            <td>3,91</td>
                            <td>1,871</td>
                        </tr>
                        <tr>
                            <td>KS-2008</td>
                            <td>80</td>
                            <td>2</td>
                            <td>60,33</td>
                            <td>49,25</td>
                            <td>5,54</td>
                            <td>2,573</td>
                        </tr>
                        <tr>
                            <td>KS-2009</td>
                            <td>40</td>
                            <td>2.1/2</td>
                            <td>73,03</td>
                            <td>62,71</td>
                            <td>5,16</td>
                            <td>2,969</td>
                        </tr>
                        <tr>
                            <td>KS-2010</td>
                            <td>80</td>
                            <td>2.1/2</td>
                            <td>73,03</td>
                            <td>59</td>
                            <td>7,01</td>
                            <td>3,924</td>
                        </tr>
                        <tr>
                            <td>KS-2011</td>
                            <td>40</td>
                            <td>3</td>
                            <td>88,9</td>
                            <td>77,93</td>
                            <td>5,49</td>
                            <td>3,882</td>
                        </tr>
                        <tr>
                            <td>KS-2012</td>
                            <td>80</td>
                            <td>3</td>
                            <td>88,9</td>
                            <td>73,66</td>
                            <td>7,62</td>
                            <td>5,251</td>
                        </tr>
                        <tr>
                            <td>KS-2013</td>
                            <td>40</td>
                            <td>3.1/2</td>
                            <td>101,6</td>
                            <td>90,12</td>
                            <td>5,74</td>
                            <td>4,665</td>
                        </tr>
                        <tr>
                            <td>KS-2014</td>
                            <td>80</td>
                            <td>3.1/2</td>
                            <td>101,6</td>
                            <td>85,45</td>
                            <td>8,08</td>
                            <td>6,406</td>
                        </tr>
                        <tr>
                            <td>KS-2015</td>
                            <td>40</td>
                            <td>4</td>
                            <td>114,3</td>
                            <td>102,26</td>
                            <td>6,02</td>
                            <td>5,526</td>
                        </tr>
                        <tr>
                            <td>KS-2016</td>
                            <td>80</td>
                            <td>4</td>
                            <td>114,3</td>
                            <td>97,18</td>
                            <td>8,56</td>
                            <td>7,674</td>
                        </tr>
                        <tr>
                            <td>KS-2017</td>
                            <td>40</td>
                            <td>4.1/2</td>
                            <td>127</td>
                            <td>114,46</td>
                            <td>6,27</td>
                            <td>6,424</td>
                        </tr>
                        <tr>
                            <td>KS-2018</td>
                            <td>40</td>
                            <td>5</td>
                            <td>141,3</td>
                            <td>128,19</td>
                            <td>6,55</td>
                            <td>7,483</td>
                        </tr>
                        <tr>
                            <td>KS-2019</td>
                            <td>80</td>
                            <td>5</td>
                            <td>141,3</td>
                            <td>122,25</td>
                            <td>9,53</td>
                            <td>10,646</td>
                        </tr>
                        <tr>
                            <td>KS-2020</td>
                            <td>40</td>
                            <td>6</td>
                            <td>168,28</td>
                            <td>154,05</td>
                            <td>7,11</td>
                            <td>9,715</td>
                        </tr>
                        <tr>
                            <td>KS-2021</td>
                            <td>80</td>
                            <td>6</td>
                            <td>168,28</td>
                            <td>146,33</td>
                            <td>10,97</td>
                            <td>14,631</td>
                        </tr>
                        <tr>
                            <td>KS-2027</td>
                            <td>40</td>
                            <td>8</td>
                            <td>219,08</td>
                            <td>202,72</td>
                            <td>8,18</td>
                            <td>14,626</td>
                        </tr>
                        <tr>
                            <td>KS-2028</td>
                            <td>80</td>
                            <td>8</td>
                            <td>219,08</td>
                            <td>193,68</td>
                            <td>12,7</td>
                            <td>22,221</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BTRS