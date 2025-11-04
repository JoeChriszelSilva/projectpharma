import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/categoria";
import { buscar, atualizar, cadastrar } from "../../../services/services";
import { ClipLoader } from "react-spinners";

function FormCategoria() {
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  function isAxiosError(
    error: unknown
  ): error is { response: { status: number } } {
    if (typeof error !== "object" || error === null) return false;
    const e = error as Record<string, unknown>;
    if (!("response" in e)) return false;
    const response = e.response;
    if (typeof response !== "object" || response === null) return false;
    const r = response as Record<string, unknown>;
    if ("status" in r && typeof r.status === "number") return true;
    return false;
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        alert(`Erro ao buscar categoria: ${error.response.status}`);
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  async function gerarNovaCategoria(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    const funcao = id === undefined ? cadastrar : atualizar;
    const mensagem =
      id === undefined
        ? "Categoria cadastrada com sucesso!"
        : "Categoria atualizada com sucesso!";

    try {
      await funcao(`/categorias`, categoria, setCategoria);
      alert(mensagem);
      retornar();
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        alert(`Erro na requisição: ${error.response.status}`);
      } else {
        alert("Erro desconhecido ao salvar categoria.");
      }
    }
    setIsLoading(false);
  }

  function retornar() {
    navigate("/categorias");
  }

  const textoBotao = id === undefined ? "Cadastrar" : "Atualizar";

  return (
    <div className="container mx-auto max-w-lg p-6 my-10 bg-parque-areia rounded-xl shadow-2xl">
      <h1 className="text-4xl text-center mb-8 text-parque-lenha font-bold">
        {id === undefined ? "Cadastrar Nova Categoria" : "Editar Categoria"}
      </h1>

      <form className="flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
        <div className="flex flex-col">
          <label
            htmlFor="nome"
            className="text-lg font-semibold text-parque-lenha/90 mb-1"
          >
            Nome da Categoria
          </label>
          <input
            type="text"
            placeholder="Digite aqui o nome da Categoria"
            name="nome"
            value={categoria.nome}
            onChange={atualizarEstado}
            required
            className="border-2 border-parque-jangadeiro p-3 rounded-lg focus:outline-none focus:border-parque-tamara transition-colors"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="descricao"
            className="text-lg font-semibold text-parque-lenha/90 mb-1"
          >
            Descrição
          </label>
          <input
            type="text"
            placeholder="Descreva a categoria (ex: Medicamentos, Cosméticos)"
            name="descricao"
            value={categoria.descricao}
            onChange={atualizarEstado}
            required
            className="border-2 border-parque-jangadeiro p-3 rounded-lg focus:outline-none focus:border-parque-tamara transition-colors"
          />
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <button
            type="button"
            className="w-full py-3 text-lg font-bold text-blue-950 bg-parque-jangadeiro rounded-lg shadow-md hover:bg-parque-lenha transition-colors disabled:bg-gray-400"
            onClick={retornar}
            disabled={isLoading}
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="w-full py-3 text-lg font-bold text-blue-950 bg-parque-tamara rounded-lg shadow-md hover:bg-parque-purpura transition-colors flex items-center justify-center disabled:bg-gray-400"
            disabled={isLoading}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>{textoBotao}</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;
