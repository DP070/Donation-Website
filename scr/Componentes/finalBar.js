import styles from "../../styles/finalBar.module.css"


export function FinalBar() {
    return (
        <div className={styles.container}>
            <div className={styles.marca}>
                <img src="/imagens/logofundacao.png" />
            </div>
            <div className={styles.texto}>
                <p>© 2022 Fundação Realizar. Todos os direitos reservados.</p>
            </div>
            <div className={styles.imagens}>
                <span><img src="/imagens/logos.png" /></span>
            </div>
        </div>
    )
}