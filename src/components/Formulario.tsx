import React from "react";
import { useState } from "react";
import Entrada from "./Entrada";
import Cliente from "../../core/Cliente";
import Botao from "./Botao";

interface FormularioProps{
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    concelado?: () => void
}
export default function Formulario(props: FormularioProps){
    const id = props.cliente?.id ?? null
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)
    
    return(
        <div>
            {id ? (
                <Entrada 
                    somenteLeitura
                    texto="Código"
                    valor={id}
                    className="mb-05"
                />
            ): false}
            <Entrada 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-05"
            />
            <Entrada 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                valorMudou={setIdade}
                
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2" 
                onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.concelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}