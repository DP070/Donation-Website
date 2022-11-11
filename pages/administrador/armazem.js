import { useEffect, useState } from "react";
import styles from "../../styles/armazem.module.css"

import NavBarAdmin from "../../scr/Componentes/navbaradmin";
import { ListaRoupa } from "../../scr/Componentes/listaRoupa";
import { Roupas } from "../../scr/assets/roupas";

export default function Armazem() {
    const [roupaFiltrada, setRoupaFiltrada] = useState([])
    const [listaRoupas, setListaRoupas] = useState([])


    async function dameRoupas() {
        const res = await fetch("/api/armazem")
        if (res.status === 200) {
            const json = await res.json()
            console.log(json)
            setListaRoupas(json)
        }
    }
    useEffect(() => {
        dameRoupas()
    }, [])

    const tamanhoFiltrado = (catItem) => {
        let result = Roupas
        if (catItem !== "all") {
            result = Roupas.filter((curDate) => {
                return curDate.type === catItem
            })
        }
        setRoupaFiltrada(result)
    }

    const generoFiltrado = (catItem) => {
        let result = Roupas
        if (catItem !== "all") {
            result = Roupas.filter((curDate) => {
                return curDate.color === catItem
            })
        }
        setRoupaFiltrada(result)
    }

    return (

        <div className={styles.armazem}>
            <div>
                <NavBarAdmin />
            </div>
            <div className={styles.filtros}>
                <div className={styles.tamanhos}>Tamanhos</div>
                <button onClick={() => tamanhoFiltrado("all")}>All</button>
                <button >0-6 Meses</button>
                <button onClick={() => tamanhoFiltrado('6-12Meses')}>6-12 Meses</button>
                <button>1 Ano</button>
                <button>2 Anos</button>
                <button>3 Anos</button>
                <button>4 Anos</button>
                <button>5 Anos</button>
                <button>6 Anos</button>
                <button>7 Anos</button>
                <button>8 Anos</button>
                <button>9 Anos</button>
                <button>10 Anos</button>
                <button>11-12 Anos</button>
                <button>13-14 Anos</button>

                <div className={styles.genero}>Género</div>
                <button>Masculino</button>
                <button>Feminino</button>
            </div>
            <div>
                <ListaRoupa roupas={listaRoupas} />
            </div>
        </div>

    )
}