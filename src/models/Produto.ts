import type Categoria from "./categoria";

export default interface Produto {
  id: number;
  nome: string;
  descrição: string;
  preco: number;
  foto: string;
  categoria: Categoria | null;
}
