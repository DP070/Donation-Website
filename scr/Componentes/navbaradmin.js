
import { useRouter } from 'next/router'
import styles from '../../styles/navbar.module.css'



export default function NavBarAdmin() {
    const navItems = [
        {
            label: "Armazém",
            path: "/administrador/armazem"
        },
        {
            label: "Pedidos",
            path: "/administrador/pedido"
        },

    ]

    return (
        <div>
            <nav className={styles.nav}>
                <div className={styles.marca}>
                    <img src="/imagens/logoletrasbrancas.png" />
                </div>
                <div className={styles.textos}>
                    {
                        navItems.map((n, i) => <NavItem key={i} {...n} />)
                    }

                </div>
            </nav>
        </div>
    )
}

function NavItem({ path, label }) {

    const router = useRouter()

    const handleClick = (e) => {

        e.preventDefault()
        router.push(path)

    }

    return (

        //o href, busca o caminho da página que é selecionado com o onClick quando se carrega numa das labels(botões) 
        <span href={path} onClick={handleClick}>
            {label}
        </span>

    )
}