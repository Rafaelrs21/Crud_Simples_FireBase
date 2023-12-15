import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import useClientes from "../hooks/useClientes";

export default function Home() {

  const { 
    cliente,
    clientes,
    tabelaVisivel,
    exibirTabela,
    clienteSelecionado, 
    clienteExcluido, 
    novoCliente,
    salvarCliente
    } = useClientes()

  
  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white
    `}>
     <Layout titulo="Cadastro Simples">
      {tabelaVisivel ? (
        <>
          <div className="flex justify-end">
            <Botao cor="blue" className="mb-4" 
            onClick={novoCliente}>
              Novo cliente
            </Botao>
          </div>
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado} 
            clienteExcluido={clienteExcluido}
          />
        </>
      ): (
        <Formulario 
          cliente={cliente}
          clienteMudou={salvarCliente}
          concelado={exibirTabela}
        />
      )}
     </Layout>
    </div>
  )
}