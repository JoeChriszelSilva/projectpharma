# 🚀 Farmacia Nest (Project Pharma)

Um projeto *front-end* desenvolvido em **React** e **TypeScript**, focado na criação de um sistema de cadastro e listagem de categorias para uma plataforma de e-commerce farmacêutico.

O projeto foi totalmente estilizado com o *framework* **Tailwind CSS**, adotando uma paleta de cores moderna e confiável inspirada na identidade visual da **Farmácia Pague Menos** (Azul e Vermelho).

### 🔗 Link do Repositório

[https://github.com/JoeChriszelSilva/projectpharma](https://github.com/JoeChriszelSilva/projectpharma)

---

## 🎯 Performance Goals (Bloco 3)

Todos os requisitos do Bloco 3 para a criação do projeto foram integralmente cumpridos:

| Requisito | Status | Observações |
| :--- | :--- | :--- |
| Criar projeto com **Vite** | ✅ Completo | Projeto iniciado via `npm create vite@latest`. |
| Instalar **Tailwind CSS** | ✅ Completo | Utilizado para toda a estilização e personalização de cores. |
| Instalar **React Router DOM** | ✅ Completo | Configurado para navegação entre as páginas (Home, Categorias, CRUD). |
| Instalar **Axios** | ✅ Completo | Utilizado na Service para integração com o Backend. |
| Criar componentes **Navbar, Footer, Home** | ✅ Completo | Componentes base criados e estilizados. |
| Criar a **Service** (sem Security) | ✅ Completo | Integração com o Backend feita sem a parte de segurança (Tokens). |
| Criar as **Models** (Interfaces) | ✅ Completo | Interfaces (`Categoria` e `Produto`) criadas. |
| Criar o **CRUD de Categoria** | ✅ Completo | Componentes `ListaCategorias`, `FormCategoria`, `DeletarCategoria` e `CardCategoria` implementados. |
| Criar as **Rotas** do projeto | ✅ Completo | Rotas configuradas no `App.tsx`. |

---

## 🎨 Design & Estilização (Pague Menos)

A paleta de cores foi configurada no `tailwind.config.js` para refletir o design moderno da Pague Menos.

### 🌈 Paleta de Cores (Tailwind Personalizado)

| Nome da Classe | Vibe | Hex Code Sugerido | Uso Principal |
| :--- | :--- | :--- | :--- |
| `parque-lenha` | Azul Confiança | `#003D99` | Títulos, Navbar, e Textos Principais |
| `parque-tamara` | Vermelho Energia | `#E5002D` | Botões de Ação e Destaques (Ex: Header do Card) |
| `parque-areia` | Branco Gelo | `#F7F7F7` | Fundo Principal da Aplicação |
| `parque-jangadeiro` | Azul Claro | `#1A73E8` | Botões Secundários, Hover |
| `parque-purpura` | Vermelho Alerta | `#D21A3D` | Botão Deletar |

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Função |
| :--- | :--- |
| **Vite** | Ferramenta de build rápida. |
| **React + TypeScript** | Framework e Linguagem de tipagem. |
| **Tailwind CSS** | Framework de estilização. |
| **React Router DOM** | Gerenciamento de rotas. |
| **Axios** | Cliente HTTP para integração com a API. |
| **React Spinners** | Indicadores de carregamento (*loading*). |

---

## ⚙️ Configuração do Backend

O projeto está conectado ao *deploy* do backend para consumir as rotas de Categoria:

* **Endpoint Principal
* 
