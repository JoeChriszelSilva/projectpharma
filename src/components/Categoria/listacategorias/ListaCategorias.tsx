import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/categoria";
import { buscar } from "../../../services/services";
import CardCategoria from "../cardcategoria/CardCategoria";
import { useNavigate } from "react-router-dom";

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

function ListarCategorias() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    async function buscarCategoria() {
      try {
        setIsLoading(true);
        await buscar("/Categorias", setCategorias);
      } catch (error) {
        if (isAxiosError(error) && error.response.status === 401) {
          navigate("/");
        }
      } finally {
        setIsLoading(false);
      }
    }

    buscarCategoria();
  }, [setIsLoading, setCategorias, navigate]);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#6366f1" size={15} />
        </div>
      ) : (
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            {!isLoading && categoria.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhuma categoria foi encontrada!
              </span>
            )}
            <div
              className="grid grid-cols-1 md:grid-cols-2
              lg:grid-cols-3 gap-8"
            >
              {categoria.map((categoria) => (
                <CardCategoria key={categoria.id} categoria={categoria} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ListarCategorias;
