import React from 'react';
import * as S from '../../styled'
import Image from 'next/image'
import imgBarra from '../../../../assets/img/barra-retangular.jpg'
import Link from 'next/link'


function BRA() {

    return (
        <S.MainWrapper>
            <S.ProductHeader>
                <S.ProductImageWrapper>
                    <Image
                        src={imgBarra}
                        alt="Bobina de Alumínio"
                        quality={100}
                        placeholder="blur"
                        layout="fill"
                    />
                </S.ProductImageWrapper>
                <div>
                    <h1>Bobinas de Alumínio</h1>
                    <p>A barra retangular de alumínio é uma solução muito versátil e que está presente em diversos processos industriais, podendo ser aplicada com segurança em formas diferentes.</p>
                    <p>Também fornecidas em larguras e espessuras conforme sua necessidade,
                        com quantidade mínima exigida pelo fabricante.</p>
                    <Link href="/" passHref>
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
                            <td rowSpan="2">PESO (kg/m)</td>
                        </tr>
                        <tr>
                            <td>A</td>
                            <td>B</td>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>R-001</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,081</td>
                        </tr>
                        <tr>
                            <td>R-004</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,109</td>
                        </tr>
                        <tr>
                            <td>R-005</td>
                            <td>1/2 (12,70mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,163</td>
                        </tr>
                        <tr>
                            <td>R-006</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,218</td>
                        </tr>
                        <tr>
                            <td>R-007</td>
                            <td>1/2 (12,70mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>0,326</td>
                        </tr>
                        <tr>
                            <td>R-011</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1/16 (1,58mm)</td>
                            <td>0,068</td>
                        </tr>
                        <tr>
                            <td>R-013</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,136</td>
                        </tr>
                        <tr>
                            <td>R-014</td>
                            <td>5/8 (15,87mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,204</td>
                        </tr>
                        <tr>
                            <td>R-015</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,272</td>
                        </tr>
                        <tr>
                            <td>R-119</td>
                            <td>5/8 (15,87mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>0,408</td>
                        </tr>
                        <tr>
                            <td>R-018</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,163</td>
                        </tr>
                        <tr>
                            <td>R-019</td>
                            <td>3/4 (19,05mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,245</td>
                        </tr>
                        <tr>
                            <td>R-020</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,327</td>
                        </tr>
                        <tr>
                            <td>R-120</td>
                            <td>3/4 (19,05mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>0,491</td>
                        </tr>
                        <tr>
                            <td>R-021</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>0,653</td>
                        </tr>
                        <tr>
                            <td>R-027</td>
                            <td>7/8 (22,22mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,191</td>
                        </tr>
                        <tr>
                            <td>R-029</td>
                            <td>7/8 (22,22mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,286</td>
                        </tr>
                        <tr>
                            <td>R-030</td>
                            <td>7/8 (22,22mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,381</td>
                        </tr>
                        <tr>
                            <td>R-035</td>
                            <td>1 (25,40mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,217</td>
                        </tr>
                        <tr>
                            <td>R-036</td>
                            <td>1 (25,40mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,326</td>
                        </tr>
                        <tr>
                            <td>R-037</td>
                            <td>1 (25,40mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,435</td>
                        </tr>
                        <tr>
                            <td>R-038</td>
                            <td>1 (25,40mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>0,653</td>
                        </tr>
                        <tr>
                            <td>R-039</td>
                            <td>1 (25,40mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>0,871</td>
                        </tr>
                        <tr>
                            <td>R-271</td>
                            <td>1 (25,40mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1,088</td>
                        </tr>
                        <tr>
                            <td>R-040</td>
                            <td>1 (25,40mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1,306</td>
                        </tr>
                        <tr>
                            <td>R-045</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,272</td>
                        </tr>
                        <tr>
                            <td>R-047</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,408</td>
                        </tr>
                        <tr>
                            <td>R-048</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,544</td>
                        </tr>
                        <tr>
                            <td>R-050</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>3/8 (9,52mm) </td>
                            <td>0,816</td>
                        </tr>
                        <tr>
                            <td>R-051</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1,089</td>
                        </tr>
                        <tr>
                            <td>R-121</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,326</td>
                        </tr>
                        <tr>
                            <td>R-060</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,491</td>
                        </tr>
                        <tr>
                            <td>R-061</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,653</td>
                        </tr>
                        <tr>
                            <td>R-062</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>0,979</td>
                        </tr>
                        <tr>
                            <td>R-063</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1,306</td>
                        </tr>
                        <tr>
                            <td>R-064</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>1,633</td>
                        </tr>
                        <tr>
                            <td>R-066</td>
                            <td>40,00mm</td>
                            <td>15,00mm</td>
                            <td>1,333</td>
                        </tr>
                        <tr>
                            <td>R-220</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>1,961</td>
                        </tr>
                        <tr>
                            <td>R-186</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>2,613</td>
                        </tr>
                        <tr>
                            <td>R-244</td>
                            <td>1.3/4 (44,45mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,318</td>
                        </tr>
                        <tr>
                            <td>R-070</td>
                            <td>2 (50,80mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,435</td>
                        </tr>
                        <tr>
                            <td>R-071</td>
                            <td>2 (50,80mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,653</td>
                        </tr>
                        <tr>
                            <td>R-072</td>
                            <td>2 (50,80mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>0,871</td>
                        </tr>
                        <tr>
                            <td>R-073</td>
                            <td>2 (50,80mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1,306</td>
                        </tr>
                        <tr>
                            <td>R-074</td>
                            <td>2 (50,80mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>1,742</td>
                        </tr>
                        <tr>
                            <td>R-075</td>
                            <td>2 (50,80mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>2,177</td>
                        </tr>
                        <tr>
                            <td>R-122</td>
                            <td>2 (50,80mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>2,613</td>
                        </tr>
                        <tr>
                            <td>R-202</td>
                            <td>2 (50,80mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>3,483</td>
                        </tr>
                        <tr>
                            <td>R-317</td>
                            <td>2 (50,80mm)</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>4,371</td>
                        </tr>
                        <tr>
                            <td>R-318</td>
                            <td>2 (50,80mm)</td>
                            <td>1.1/2 (38,10mm)</td>
                            <td>5,245</td>
                        </tr>
                        <tr>
                            <td>R-080</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>  1/8 (3,17mm)</td>
                            <td>0,543</td>
                        </tr>
                        <tr>
                            <td>R-081</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>0,816</td>
                        </tr>
                        <tr>
                            <td>R-082</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>1,089</td>
                        </tr>
                        <tr>
                            <td>R-123</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1,632</td>
                        </tr>
                        <tr>
                            <td>R-083</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>2,177</td>
                        </tr>
                        <tr>
                            <td>R-159</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>2,721</td>
                        </tr>
                        <tr>
                            <td>R-124</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>3,266</td>
                        </tr>
                        <tr>
                            <td>R-292</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>4,373</td>
                        </tr>
                        <tr>
                            <td>R-084</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>1.1/4 (31,75mm)</td>
                            <td>5,444</td>
                        </tr>
                        <tr>
                            <td>R-288</td>
                            <td>2.1/2 (63,50mm)</td>
                            <td>1.1/2(38,10mm)</td>
                            <td>6,556</td>
                        </tr>
                        <tr>
                            <td>R-284</td>
                            <td>70,40mm</td>
                            <td>25,40mm</td>
                            <td>4,834</td>
                        </tr>
                        <tr>
                            <td>R-087</td>
                            <td>3 (76,20mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,652</td>
                        </tr>
                        <tr>
                            <td>R-088</td>
                            <td>3 (76,20mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>1,306</td>
                        </tr>
                        <tr>
                            <td>R-089</td>
                            <td>3 (76,20mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>1,959</td>
                        </tr>
                        <tr>
                            <td>R-090</td>
                            <td>3 (76,20mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>2,613</td>
                        </tr>
                        <tr>
                            <td>R-091</td>
                            <td>3 (76,20mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>3,278</td>
                        </tr>
                        <tr>
                            <td>R-155</td>
                            <td>3 (76,20mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>3,919</td>
                        </tr>
                        <tr>
                            <td>R-203</td>
                            <td>3 (76,20mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>5,225</td>
                        </tr>
                        <tr>
                            <td>R-319</td>
                            <td>3 (76,20mm)</td>
                            <td>1.1/4(31,75mm)</td>
                            <td>6,556</td>
                        </tr>
                        <tr>
                            <td>R-092</td>
                            <td>3 (76,20mm)</td>
                            <td>1.1/2(38,10mm)</td>
                            <td>7,893</td>
                        </tr>
                        <tr>
                            <td>R-304</td>
                            <td>3 (76,20mm)</td>
                            <td>2 (50,80mm)</td>
                            <td>10,491</td>
                        </tr>
                        <tr>
                            <td>R-276</td>
                            <td>3.1/2 (88,90mm)</td>
                            <td>2.1/2(63,50mm)</td>
                            <td>7,666</td>
                        </tr>
                        <tr>
                            <td>R-125</td>
                            <td>4 (101,60mm)</td>
                            <td>1/8 (3,17mm)</td>
                            <td>0,871</td>
                        </tr>
                        <tr>
                            <td>R-127</td>
                            <td>4 (101,60mm)</td>
                            <td>3/16 (4,76mm)</td>
                            <td>1,306</td>
                        </tr>
                        <tr>
                            <td>R-097</td>
                            <td>4 (101,60mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>1,745</td>
                        </tr>
                        <tr>
                            <td>R-205</td>
                            <td>4 (101,60mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>2,611</td>
                        </tr>
                        <tr>
                            <td>R-204</td>
                            <td>4 (101,60mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>3,483</td>
                        </tr>
                        <tr>
                            <td>R-098</td>
                            <td>4 (101,60mm)</td>
                            <td>5/8 (15,87mm)</td>
                            <td>4,353</td>
                        </tr>
                        <tr>
                            <td>R-140</td>
                            <td>4 (101,60mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>5,226</td>
                        </tr>
                        <tr>
                            <td>R-099</td>
                            <td>4 (101,60mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>6,968</td>
                        </tr>
                        <tr>
                            <td>R-245</td>
                            <td>4 (101,60mm)</td>
                            <td>1.1/4(31,75mm)</td>
                            <td>8,709</td>
                        </tr>
                        <tr>
                            <td>R-243</td>
                            <td>4 (101,60mm)</td>
                            <td>1.1/2(38,10mm)</td>
                            <td>10,452</td>
                        </tr>
                        <tr>
                            <td>R-257</td>
                            <td>4 (101,60mm)</td>
                            <td>2 (50,80mm) </td>
                            <td>13,935</td>
                        </tr>
                        <tr>
                            <td>R-389</td>
                            <td>4 (101,60mm)</td>
                            <td>2.1/2(63,50mm)</td>
                            <td>17,484</td>
                        </tr>
                        <tr>
                            <td>R-320</td>
                            <td>4 (101,60mm)</td>
                            <td>3 (76,20mm)</td>
                            <td>20,981</td>
                        </tr>
                        <tr>
                            <td>R-149</td>
                            <td>120.65mm</td>
                            <td>6.55mm </td>
                            <td>2,166</td>
                        </tr>
                        <tr>
                            <td>R-106</td>
                            <td>5 (127,00mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>2,177</td>
                        </tr>
                        <tr>
                            <td>R-126</td>
                            <td>5 (127,00mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>3,264</td>
                        </tr>
                        <tr>
                            <td>R-117</td>
                            <td>5 (127,00mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>4,355</td>
                        </tr>
                        <tr>
                            <td>R-107</td>
                            <td>5 (127,00mm)</td>
                            <td>  5/8 (15,87mm)</td>
                            <td>5,442</td>
                        </tr>
                        <tr>
                            <td>R-118</td>
                            <td>5 (127,00mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>6,556</td>
                        </tr>
                        <tr>
                            <td>R-301</td>
                            <td>5 (127,00mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>8,742</td>
                        </tr>
                        <tr>
                            <td>R-321</td>
                            <td>5 (127,00mm)</td>
                            <td>1.1/4(31,75mm)</td>
                            <td>10,927</td>
                        </tr>
                        <tr>
                            <td>R-322</td>
                            <td>5 (127,00mm)</td>
                            <td>1.1/2(38,10mm)</td>
                            <td>13,113</td>
                        </tr>
                        <tr>
                            <td>R-323</td>
                            <td>5 (127,00mm)</td>
                            <td>2 (50,80mm)</td>
                            <td>17,754</td>
                        </tr>
                        <tr>
                            <td>N-3728</td>
                            <td>5 (127,00mm)</td>
                            <td>3 (76,20mm)</td>
                            <td>26,216</td>
                        </tr>
                        <tr>
                            <td>R-108</td>
                            <td>6 (152,40mm)</td>
                            <td>1/4 (6,35mm)</td>
                            <td>2,613</td>
                        </tr>
                        <tr>
                            <td>R-281</td>
                            <td>6 (152,40mm)</td>
                            <td>3/8 (9,52mm)</td>
                            <td>3,917</td>
                        </tr>
                        <tr>
                            <td>R-183</td>
                            <td>6 (152,40mm)</td>
                            <td>1/2 (12,70mm)</td>
                            <td>4,897</td>
                        </tr>
                        <tr>
                            <td>R-184</td>
                            <td>6 (152,40mm)</td>
                            <td>  5/8 (15,87mm)</td>
                            <td>6,526</td>
                        </tr>
                        <tr>
                            <td>R-295</td>
                            <td>6 (152,40mm)</td>
                            <td>3/4 (19,05mm)</td>
                            <td>7,868</td>
                        </tr>
                        <tr>
                            <td>R-242</td>
                            <td>6 (152,40mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>10,476</td>
                        </tr>
                        <tr>
                            <td>R-324</td>
                            <td>6 (152,40mm)</td>
                            <td>1.1/4(31,75mm)</td>
                            <td>13,113</td>
                        </tr>
                        <tr>
                            <td>R-289</td>
                            <td>6 (152,40mm)</td>
                            <td>1.1/2(38,10mm)</td>
                            <td>15,735</td>
                        </tr>
                        <tr>
                            <td>R-303</td>
                            <td>6 (152,40mm) </td>
                            <td>2 (50,80mm) </td>
                            <td>20,981</td>
                        </tr>
                        <tr>
                            <td>N-3729</td>
                            <td>6 (152,40mm)</td>
                            <td>3 (76,20mm)</td>
                            <td>31,462</td>
                        </tr>
                        <tr>
                            <td>R-210</td>
                            <td>168,00mm</td>
                            <td>55,00mm</td>
                            <td>12,511</td>
                        </tr>
                        <tr>
                            <td>R-237</td>
                            <td>200,00mm</td>
                            <td>10,00mm</td>
                            <td>5,511</td>
                        </tr>
                        <tr>
                            <td>R-146</td>
                            <td>8 (203,20mm)</td>
                            <td>  1/2 (12,70mm)</td>
                            <td>6,968</td>
                        </tr>
                        <tr>
                            <td>R-305</td>
                            <td>8 (203,20mm)</td>
                            <td>1 (25,40mm) </td>
                            <td>13,987</td>
                        </tr>
                        <tr>
                            <td>N-3730</td>
                            <td>8 (203,20mm)</td>
                            <td>2 (50,80mm) </td>
                            <td>27,965</td>
                        </tr>
                        <tr>
                            <td>N-3727</td>
                            <td>8 (203,20mm)</td>
                            <td>3 (76,20mm)</td>
                            <td>41,952</td>
                        </tr>
                        <tr>
                            <td>R-171</td>
                            <td>250,00mm</td>
                            <td>10,00mm</td>
                            <td>6,833</td>
                        </tr>
                        <tr>
                            <td>R-315</td>
                            <td>10 (254,00mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>17,484</td>
                        </tr>
                        <tr>
                            <td>R-425</td>
                            <td>12 (304,80mm)</td>
                            <td>1 (25,40mm)</td>
                            <td>21,051</td>
                        </tr>
                    </tbody>
                </S.TableCustom>
            </S.TableWrapper>
        </S.MainWrapper >
    )
}

export default BRA