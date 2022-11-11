import { useEffect, useState } from 'react'
import styles from '../../styles/formulario.module.css'

export default function Formulario() {
    const [nome, setNome] = useState('')
    const [telefone, setTelefone] = useState('')
    const [morada, setMorada] = useState('')
    const [genero, setGenero] = useState('')
    const [tamanho, setTamanho] = useState('')
    const [estado, setEstado] = useState({
        tipo: "",
        mensagem: ""
    })

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const dataToSubmit = {
            nome: nome,
            telefone: telefone,
            morada: morada,
            genero: genero,
            tamanho: tamanho
        }
        fetch("/api/pedidos", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...dataToSubmit })
        })

    }

    const handleState = (event) => {
        // event.preventDefault()

        setNome("")
        setTelefone("")
        setTamanho("")
        setGenero("")
        setMorada("")
    }






    return (



        <div className={styles.container}>
            <h1>Se necessita de roupa preencha este formulário</h1>

            {estado.tipo === "sucesso" ? <p style={{ color: "green" }}>{estado.mensagem}</p> : ""}
            {estado.tipo === "erro" ? <p style={{ color: "red" }}>{estado.mensagem}</p> : ""}

            <br />
            <div className={styles.formulario}>
                <form onSubmit={handleFormSubmit}>
                    <label className={styles.label}>
                        <span>Nome :</span>
                        <input type='text' value={nome} name='nome' onChange={(event) => setNome(event.target.value)}></input>
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Telefone :
                        <input type='text' value={telefone} name='telefone' onChange={(event) => setTelefone(event.target.value)}></input>
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Morada:
                        <input type='text' value={morada} name='morada' onChange={(event) => setMorada(event.target.value)}></input>
                    </label>
                    <br />
                    <label className={styles.label}>Genero:
                        <input type="radio" name="Genero" value="Masculino" onChange={(event) => setGenero(event.target.value)} />  Masculino<br />
                        <input type="radio" name="Genero" value="Feminino" onChange={(event) => setGenero(event.target.value)} />  Feminino<br />
                    </label>
                    <br />
                    <br />
                    <label className={styles.label}>Tamanho:
                        < select type='text' value={tamanho} name='tamanho' onChange={(event) => setTamanho(event.target.value)}>
                            <option value="0-6Meses">0-6 Meses</option>
                            <option value="6-12Meses">6-12 Meses</option>
                            <option value="1Anos">1 Ano</option>
                            <option value="2Anos">2 Anos</option>
                            <option value="3Anos">3 Anos</option>
                            <option value="4Anos">4 Anos</option>
                            <option value="5Anos">5 Anos</option>
                            <option value="6Anos">6 Anos</option>
                            <option value="7Anos">7 Anos</option>
                            <option value="8Anos">8 Anos</option>
                            <option value="9Anos">9 Anos</option>
                            <option value="10Anos">10 Anos</option>
                            <option value="11-12Anos">11-12 Anos</option>
                            <option value="13-14Anos">13-14 Anos</option>
                        </select>
                    </label>
                    <br />
                    <button onClick={handleState} type={'submit'} className={styles.button}>Submeter</button>
                </form>


            </div>
        </div>



    )

}