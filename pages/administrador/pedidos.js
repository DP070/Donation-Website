import { useEffect, useState } from 'react';
import styles from "../../styles/pedidos.module.css"
import NavBarAdmin from "../../scr/Componentes/navbaradmin";


export default function Pedido(){
    const [listaPedidos, setListaPedidos] = useState([])


    async function damePedido() {
        const res = await fetch("/api/pedidos")
        if (res.status === 200) {
            const json = await res.json()
            console.log(json)
            setListaPedidos(json)
        }
    }

    useEffect(() => {
        damePedido()
    }, [])


    return (
        <div>
            <NavBarAdmin />
            <div className={styles.container}>
                <div className={styles.pedidos} >
                    {listaPedidos.map((pedido) => {
                        const { nome, telefone, morada, genero, tamanho, feitoA } = pedido
                        return (
                            <div className={styles.pedido} key={pedido._id}>
                                <div className={styles.imagem}>
                                    <span>{JSON.stringify(pedido.feitoA)}</span>
                                    <span>{JSON.stringify(pedido.nome)}</span>
                                    <span>{JSON.stringify(pedido.telefone)}</span>
                                    <span>{JSON.stringify(pedido.morada)}</span>
                                    <span>{JSON.stringify(pedido.genero)}</span>
                                    <span>{JSON.stringify(pedido.tamanho)}</span>
                                </div>
                                <div className={styles.info}>
                                    <button>Realizar Pedido</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )

}