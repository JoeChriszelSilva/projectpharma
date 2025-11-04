import axios, { type AxiosRequestConfig } from "axios";
import { type Dispatch, type SetStateAction } from "react";

const api = axios.create({
  baseURL: "https://farmacianest.onrender.com",
});

export const buscar = async <T,>(
  url: string,
  setDados: Dispatch<SetStateAction<T>>,
  header?: AxiosRequestConfig
) => {
  const resposta = await api.get(url, header);
  setDados(resposta.data);
};

export const atualizar = async <T,>(
  url: string,
  dados: object,
  setDados: Dispatch<SetStateAction<T>>,
  header?: AxiosRequestConfig
) => {
  const resposta = await api.put(url, dados, header);
  setDados(resposta.data);
};

export const cadastrar = async <T,>(
  url: string,
  dados: object,
  setDados: Dispatch<SetStateAction<T>>,
  header?: AxiosRequestConfig
) => {
  const resposta = await api.post(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header?: AxiosRequestConfig) => {
  await api.delete(url, header);
};
