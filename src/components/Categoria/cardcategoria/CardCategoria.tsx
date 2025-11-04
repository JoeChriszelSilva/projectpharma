import { Link } from "react-router-dom";
import type Categoria from "../../../models/categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-2 border-parque-lenha/20 flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <header className="py-4 px-6 bg-parque-tamara text-blue-950 font-extrabold text-2xl">
        {categoria.nome}
      </header>

      <p className="p-6 text-lg bg-white text-parque-lenha/90 h-full">
        {categoria.descricao}
      </p>

      <div className="flex border-t border-parque-lenha/10">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-blue-950 bg-parque-lenha hover:bg-blue-400 transition-colors flex items-center justify-center py-3 font-semibold text-lg"
        >
          <button>Editar</button>
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-blue-950 bg-parque-purpura hover:bg-red-800 transition-colors flex items-center justify-center py-3 font-semibold text-lg"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardCategoria;
