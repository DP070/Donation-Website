import { useEffect, useState } from "react";
import styles from "../../styles/pedido.module.css"
import NavBarAdmin from "../../scr/Componentes/navbaradmin";

export default function Pedidos() {
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

                <table>
                    <thead>
                        <tr>
                            <th>Data do Pedido</th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Genero</th>
                            <th>Tamanho</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaPedidos.map((pedido) => {
                            const { nome, telefone, morada, genero1, tamanho1, genero2, tamanho2, feitoA } = pedido
                            return (
                                <tr>
                                    <td data-label="data"><span>{JSON.stringify(pedido.feitoA)}</span></td>
                                    <td data-label="Nome"><span>{JSON.stringify(pedido.nome)}</span></td>
                                    <td data-label="Tel"><span>{JSON.stringify(pedido.telefone)}</span></td>
                                    <td data-label="genero"><span>{JSON.stringify(pedido.genero)}</span></td>
                                    <td data-label="tamanho"><span>{JSON.stringify(pedido.tamanho)}</span></td>
                                    <td>
                                        <button>Realizar pedido</button>
                                    </td>


                                </tr>
                            )
                        })}


                    </tbody>

                </table>



            </div>


        </div>
    )
}

/*export function ListaPedidos(){
    return (                  
            <div className={styles.listaContainer}>
                <div>             
                {pedidos.map((item) => (
                    <div className={styles.listas} key={`${item.morada} ${item.nome}`}>
                    <span className={styles.nome}>{item.nome}</span>
                    <span className={styles.telefone}>{item.telefone}</span>
                    <span className={styles.morada}>{item.morada}</span>
                    <span className={styles.genero}>{item.genero}</span>
                    <span className={styles.tamanho}>{item.tamanho}</span>
                    <button>Realizar pedido</button>
                    </div>
                ))
                }
                </div>
            </div>
    )
}
*/