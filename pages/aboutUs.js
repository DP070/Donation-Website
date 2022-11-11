
import { NavBar } from '../scr/Componentes/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/aboutus.module.css'
import Formulario from '../scr/Componentes/formulario'
import { FinalBar } from '../scr/Componentes/finalBar'

export default function AboutUs() {

    return (
        <div className={styles.container}>
            <div>
                <NavBar />
            </div>
            <div className={styles.caixa}>
                <span className={styles.logo}>
                    <img src='/imagens/logofundacao.png' />
                </span>
                <div className={styles.texto}>
                    <h1>Missão, visão e valores</h1>
                    <p>A Fundação Realizar foi criada em 2020 com o objetivo de ajudar famílias carenciadas através da distribuição de roupa doada para crianças.
                        <p>A nivel nacional a maior parte das doações é feita para a grande Lisboa, mas não recusamos pedidos de ajuda de outras regiões do país.</p>
                        <p>A nossa missão é ajudar quem precisa para a melhoria das condições de vida dos mais vulneráveis.</p> </p>
                </div>
                <div className={styles.formulario}>
                    <Formulario />
                </div>
            </div>
            <div>
                <FinalBar />
            </div>

        </div>

    )
}



