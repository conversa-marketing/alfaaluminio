import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/tubo-redondo.jpg'
import Link from 'next/link'


function BTR() {

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
                    <h1>Tubo Redondo de Alumínio</h1>
                    <p></p>
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
                            <td>KR-1002</td>
                            <td>3/8 (9,52MM)</td>
                            <td>1,00MM</td>
                            <td>0,072</td>
                        </tr>
                        <tr>
                            <td>KR-1003</td>
                            <td>3/8 (9,52MM)</td>
                            <td> 1/16 (1,58MM)</td>
                            <td>0,106</td>
                        </tr>
                        <tr>
                            <td>KR-1011</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1,00MM</td>
                            <td>0,099</td>
                        </tr>
                        <tr>
                            <td>KR-1012</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,149</td>
                        </tr>
                        <tr>
                            <td>KR-1013</td>
                            <td>1/2 (12,70MM)</td>
                            <td>2,00MM</td>
                            <td>0,183</td>
                        </tr>
                        <tr>
                            <td>KR-1015</td>
                            <td>1/2 (12,70MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,256</td>
                        </tr>
                        <tr>
                            <td>KR-1036</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1,00MM</td>
                            <td>0,126</td>
                        </tr>
                        <tr>
                            <td>KR-1038</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,191</td>
                        </tr>
                        <tr>
                            <td>KR-1041</td>
                            <td>5/8 (15,87MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,341</td>
                        </tr>
                        <tr>
                            <td>KR-1054</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1,00MM</td>
                            <td>0,153</td>
                        </tr>
                        <tr>
                            <td>KR-1055</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1,24MM</td>
                            <td>0,187</td>
                        </tr>
                        <tr>
                            <td>KR-1056</td>
                            <td>3/4 (19,05MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,234</td>
                        </tr>
                        <tr>
                            <td>KR-1057</td>
                            <td>3/4 (19,05MM)</td>
                            <td>3/32 (2,38MM)</td>
                            <td>0,336</td>
                        </tr>
                        <tr>
                            <td>KR- 1059</td>
                            <td>3/4 (19,05MM)</td>
                            <td>  1/8   (3,17MM)</td>
                            <td>0,427</td>
                        </tr>
                        <tr>
                            <td>KR-1068</td>
                            <td>7/8 (22,22MM)</td>
                            <td>1,00MM</td>
                            <td>0,188</td>
                        </tr>
                        <tr>
                            <td>KR-1337</td>
                            <td>7/8 (22,22MM)</td>
                            <td>1,24MM</td>
                            <td>0,223</td>
                        </tr>
                        <tr>
                            <td>KR-1069</td>
                            <td>7/8 (22,22MM)</td>
                            <td> 1/16  (1,58MM)</td>
                            <td>0,276</td>
                        </tr>
                        <tr>
                            <td>KR-1073</td>
                            <td>7/8 (22,22MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,512</td>
                        </tr>
                        <tr>
                            <td>KR-1079</td>
                            <td>1 (25,40MM)</td>
                            <td>1,00MM</td>
                            <td>0,207</td>
                        </tr>
                        <tr>
                            <td>KR-1080</td>
                            <td>1 (25,40MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,319</td>
                        </tr>
                        <tr>
                            <td>KR-1081</td>
                            <td>1 (25,40MM) </td>
                            <td>2,00MM</td>
                            <td>0,397</td>
                        </tr>
                        <tr>
                            <td>KR-1083</td>
                            <td>1 (25,40MM) </td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,598</td>
                        </tr>
                        <tr>
                            <td>KR-1095</td>
                            <td>1.1/8 (28,57MM)</td>
                            <td>1,00MM</td>
                            <td>0.234</td>
                        </tr>
                        <tr>
                            <td>KR-1096</td>
                            <td>1.1/8 (28,57MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,361</td>
                        </tr>
                        <tr>
                            <td>KR-1099</td>
                            <td>1.1/8 (28,57MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,683</td>
                        </tr>
                        <tr>
                            <td>KR-1113</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>1,00MM</td>
                            <td>0,261</td>
                        </tr>
                        <tr>
                            <td>KR-1115</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>1/16 (1,58MM) </td>
                            <td>0,404</td>
                        </tr>
                        <tr>
                            <td>KR-1117</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>3/32 (2,38MM)</td>
                            <td>0,593</td>
                        </tr>
                        <tr>
                            <td>KR-1118</td>
                            <td>1.1/4 (31,75MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,768</td>
                        </tr>
                        <tr>
                            <td>KR-1134</td>
                            <td>1.3/8 (34,92MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,447</td>
                        </tr>
                        <tr>
                            <td>KR-1145</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1,00MM</td>
                            <td>0,315</td>
                        </tr>
                        <tr>
                            <td>KR-1146</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,489</td>
                        </tr>
                        <tr>
                            <td>KR-1147</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>2,00MM</td>
                            <td>0,612</td>
                        </tr>
                        <tr>
                            <td>KR-1148</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3/32 (2,38MM)</td>
                            <td>0,721</td>
                        </tr>
                        <tr>
                            <td>KR-1149</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>0,939</td>
                        </tr>
                        <tr>
                            <td>KR-1402</td>
                            <td>1.1/2 (38,10MM)</td>
                            <td>3/16 (4,76MM)</td>
                            <td>1,408</td>
                        </tr>
                        <tr>
                            <td>KR-1167</td>
                            <td>1.3/4 (44,45MM)</td>
                            <td>1,00MM</td>
                            <td>0,366</td>
                        </tr>
                        <tr>
                            <td>KR-1169</td>
                            <td>1.3/4 (44,45MM)</td>
                            <td> 1/16 (1,58MM)</td>
                            <td>0,574</td>
                        </tr>
                        <tr>
                            <td>KR-1172</td>
                            <td>1.3/4 (44,45MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,109</td>
                        </tr>
                        <tr>
                            <td>KI-3002</td>
                            <td>2 (50,80MM)</td>
                            <td>1,27MM</td>
                            <td>0,535</td>
                        </tr>
                        <tr>
                            <td>KR-1183</td>
                            <td>2 (50,80MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,658</td>
                        </tr>
                        <tr>
                            <td>KR-1184</td>
                            <td>2 (50,80MM)</td>
                            <td>2,00MM</td>
                            <td>0,977</td>
                        </tr>
                        <tr>
                            <td>KR-1186</td>
                            <td>2 (50,80MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,281</td>
                        </tr>
                        <tr>
                            <td>KR-1307</td>
                            <td>2 (50,80MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>2,394</td>
                        </tr>
                        <tr>
                            <td>KR-1196</td>
                            <td>2.1/4 (57,15MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,457</td>
                        </tr>
                        <tr>
                            <td>KR-1200</td>
                            <td>2.3/8 (60,32MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,787</td>
                        </tr>
                        <tr>
                            <td>KR-1203</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>0,831</td>
                        </tr>
                        <tr>
                            <td>KR-1206</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,621</td>
                        </tr>
                        <tr>
                            <td>KR-1207</td>
                            <td>2.1/2 (63,50MM)</td>
                            <td>1/4 (6,35MM)</td>
                            <td>3,078</td>
                        </tr>
                        <tr>
                            <td>KI-3003</td>
                            <td>3 (76,20MM)</td>
                            <td>1,10MM</td>
                            <td>0,702</td>
                        </tr>
                        <tr>
                            <td>KI-3004</td>
                            <td>3 (76,20MM)</td>
                            <td>1,27MM</td>
                            <td>0,807</td>
                        </tr>
                        <tr>
                            <td>KR-1219</td>
                            <td>3 (76,20MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>1,111</td>
                        </tr>
                        <tr>
                            <td>KR-1220</td>
                            <td>3 (76,20MM)</td>
                            <td>2,00MM</td>
                            <td>1,259</td>
                        </tr>
                        <tr>
                            <td>KR-1222</td>
                            <td>3 (76,20MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>1,962</td>
                        </tr>
                        <tr>
                            <td>KR-1223</td>
                            <td>3 (76,20MM)</td>
                            <td>3/16 (4,76MM)</td>
                            <td>2,884</td>
                        </tr>
                        <tr>
                            <td>KR-1239</td>
                            <td>3.1/2 (88,90MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>2,305</td>
                        </tr>
                        <tr>
                            <td>KR-1363</td>
                            <td>4 (101,60MM)</td>
                            <td>1/16 (1,58MM)</td>
                            <td>1,358</td>
                        </tr>
                        <tr>
                            <td>KR-1249</td>
                            <td>4 (101,60MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>2,647</td>
                        </tr>
                        <tr>
                            <td>KR-1261</td>
                            <td>4.1/2 (114,30MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>2,988</td>
                        </tr>
                        <tr>
                            <td>KR-1368</td>
                            <td>5 (127,00MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>3,156</td>
                        </tr>
                        <tr>
                            <td>KR-1367</td>
                            <td>5.1/2 (139,70MM) </td>
                            <td>1/8 (3,17MM)</td>
                            <td>3,671</td>
                        </tr>
                        <tr>
                            <td>KR-1366</td>
                            <td>6 (152,40MM)</td>
                            <td>1/8 (3,17MM)</td>
                            <td>4,014</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BTR