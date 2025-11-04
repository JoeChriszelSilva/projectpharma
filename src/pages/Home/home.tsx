import ListarCategorias from "../../components/Categoria/listacategorias/ListaCategorias";
import { Link } from "react-router-dom";

function Home() {
  const imageUrl = "https://imgur.com/xquvSEE.jpg";

  return (
    <div className="flex flex-col min-h-[80vh] bg-parque-areia">
      <div className="container mx-auto grid grid-cols-2 flex-col p-8">
        <div className="flex flex-col justify-center gap-6 p-4">
          <h1 className="text-6xl font-extrabold text-parque-lenha leading-tight">
            Sua Saude Começa aqui!
          </h1>

          <p className="text-xl text-parque-jangadeiro mt-2">
            Saúde e Bem-Estar para todos! Encontre o que você precisa.
          </p>

          <div className="flex justify-start mt-6">
            <Link
              to="/categorias"
              className="px-8 py-3 text-lg font-semibold text-parque-jangadeiro bg-parque-tamara rounded-lg shadow-lg hover:bg-parque-lenha transition-colors hover:scale-[1.02] transform duration-300"
            >
              Ver Nossas Categorias
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center p-4">
          <img
            src={imageUrl}
            alt="Imagem Página Home: Saúde e Bem-Estar"
            className="w-full max-w-lg h-auto"
          />
        </div>
      </div>

      <div className="py-12 bg-white/70">
        <h2 className="text-center text-4xl font-bold text-parque-lenha mb-8">
          Conheça Nossas Categorias
        </h2>
        <ListarCategorias />
      </div>
    </div>
  );
}

export default Home;
