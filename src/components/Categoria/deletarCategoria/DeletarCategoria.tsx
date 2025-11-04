import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/categoria";
import { buscar, deletar } from "../../../services/services";

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

function DeletarCategoria() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    async function buscarPorId(id: string) {
      try {
        await buscar(`/categorias/${id}`, setCategoria);
      } catch (error: unknown) {
        if (isAxiosError(error)) {
          alert(`Erro ao buscar categoria: ${error.response.status}`);
        }
      }
    }
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert("Categoria apagada com sucesso!");
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        alert(`Erro ao deletar o tema. Status: ${error.response.status}`);
      } else {
        alert("Erro desconhecido ao deletar o tema.");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-1/3 mx-auto p-4 my-10 bg-parque-areia rounded-lg shadow-xl">
      <h1 className="text-4xl text-center my-4 text-parque-lenha font-bold">
        Deletar Categoria
      </h1>

      <p className="text-center font-semibold mb-6 text-parque-lenha/90">
        Você tem certeza que deseja excluir esta categoria
        {categoria.nome}?
      </p>
      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-[#4A70A9] text-white font-bold text-2xl">
          {categoria.nome}
        </header>

        <p className="p-8 text-3xl bg-slate-200 h-full">
          {categoria.descricao}
        </p>

        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>

          <button
            className="w-full text-slate-100 bg-[#6D94C5] hover:bg-[#234C6A] flex items-center justify-center"
            onClick={deletarCategoria}
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;
