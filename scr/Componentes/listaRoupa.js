import { Roupas } from "../assets/roupas"
import styles from "../../styles/lista.module.css"
import { useState } from "react"

export function ListaRoupa({ roupas }) {
   
    return (
        <div className={styles.listaContainer}>
            <div>
                {roupas.map((item, i) => (
                    <div className={styles.listas} key={`${item.tamanho} ${item.categoria} ${i}`}>
                        <div className={styles.categoria}>{item.categoria}</div>
                        <div className={styles.tamanho}>{item.tamanho}</div>
                        <div className={styles.genero}>{item.genero}</div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}