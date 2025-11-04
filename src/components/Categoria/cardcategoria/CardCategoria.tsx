import { Link } from "react-router-dom";
import type Categoria from "../../../models/categoria";
interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  const nomeCategoria = categoria.nome || categoria.NomeCategoria;
  return (
    <div className=" border flex  flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-blue-950 text-white font-bold text-2xl">
        {nomeCategoria}
      </header>
      <p className="p-8 text-3xl bg-slate-200 h-full">{categoria.descricao}</p>
      <div className="flex">
        <Link
          to=""
          className="w-full text-slate-100 bg-blue-950 hover:bg-blue-700
          flex items-center justify-center py-3"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={"/deletarCategoria/:id"}
          className="text-slate-100 bg-red-400 hover:bg-red-700 w-full
      flex items-center justify-center"
        >
          <button>Delete</button>
        </Link>
      </div>
    </div>
  );
}
export default CardCategoria;
