import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { atualizar, buscar, cadastrar } from "../../../services/services";
import type Categoria from "../../../models/categoria";

function isAxiosError(
  error: unknown
): error is { response: { status: number } } {
  if (typeof error !== "object" || error === null) {
    return false;
  }
  const e = error as Record<string, unknown>;
  if (!("response" in e)) {
    return false;
  }
  const response = e.response;
  if (typeof response !== "object" || response === null) {
    return false;
  }
  const r = response as Record<string, unknown>;
  if ("status" in r && typeof r.status === "number") {
    return true;
  }
  return false;
}

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    async function buscarPorId(id: string) {
      try {
        await buscar(`/categorias/${id}`, setCategoria);
      } catch (error) {
        if (isAxiosError(error)) {
          alert(`Erro ao buscar categoria: ${error.response.status}`);
        }
      }
    }

    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovaCategoria(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (id !== undefined) {
        await atualizar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi atualizada com sucesso!");
      } else {
        await cadastrar(`/categorias`, categoria, setCategoria);
        alert("A Categoria foi cadastrada com sucesso!");
      }

      retornar();
    } catch (error) {
      if (isAxiosError(error)) {
        alert(
          `Erro ao ${
            id !== undefined ? "atualizar" : "cadastrar"
          } categoria! A API retornou: ${error.response.status}`
        );
      } else {
        alert(
          `Erro ao ${id !== undefined ? "atualizar" : "cadastrar"} categoria!`
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto p-4 bg-parque-areia">
      <h1 className="text-4xl text-center my-8 text-parque-lenha">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="w-full md:w-1/2 flex flex-col gap-4 p-8 bg-white shadow-lg rounded-lg"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome" className="text-parque-lenha font-semibold">
            Nome da Categoria
          </label>

          <input
            type="text"
            placeholder="Digite o nome da categoria"
            name="nome"
            required
            className="border-2 border-parque-jangadeiro rounded p-2 focus:border-parque-tamara focus:ring-parque-tamara outline-none"
            value={categoria.nome || ""}
            onChange={atualizarEstado}
          />

          <label
            htmlFor="descricao"
            className="text-parque-lenha font-semibold"
          >
            Descrição da Categoria
          </label>

          <input
            type="text"
            placeholder="Digite a descrição da categoria"
            name="descricao"
            required
            className="border-2 border-parque-jangadeiro rounded p-2 focus:border-parque-tamara focus:ring-parque-tamara outline-none"
            value={categoria.descricao || ""}
            onChange={atualizarEstado}
          />
        </div>

        <button
          className="rounded text-white bg-parque-tamara hover:bg-parque-lenha transition-colors w-1/2 py-2 mx-auto flex justify-center disabled:bg-gray-400"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>

        <button
          className="rounded text-white bg-parque-jangadeiro hover:bg-parque-purpura transition-colors w-1/2 py-2 mx-auto flex justify-center"
          type="button"
          onClick={retornar}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;
