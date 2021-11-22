import React from 'react'
import Image from 'next/image'
import logo from '../../assets/img/alfa-logo.png'
import Link from 'next/link'

function Logo() {
    return (
        <Link href='/'>
            <a>
                <Image
                    src={logo}
                    alt="Logo Alfa Alumínio"
                    placeholder="blur"
                />
            </a>
        </Link>
    )
}

export default Logo;