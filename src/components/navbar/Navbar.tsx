import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      className="w-full bg-parque-lenha text-parque-areia
                    flex justify-center py-4 shadow-lg"
    >
      <div className="container flex justify-between items-center text-lg">
        <Link to="/home" className="hover:opacity-80 transition-opacity">
          <img
            src="https://i.imgur.com/ipnVvvM.png"
            alt="Logo FarmaNest - Clicar para ir para Home"
            className="h-20 md:h-15"
          />
        </Link>

        <div className="flex gap-6">
          <Link
            to="/categorias"
            className="hover:text-parque-tamara transition-colors"
          >
            Categorias
          </Link>

          <Link
            to="/cadastrarcategoria"
            className="hover:text-parque-tamara transition-colors"
          >
            Cadastrar Categoria
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
