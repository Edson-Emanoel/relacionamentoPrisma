"use client";

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import iconAdd from "../assets/iconAdd.svg";
import iconSearch from "../assets/iconSearch.svg";
import iconEdit from "../assets/iconEdit.svg";
import iconDelete from "../assets/iconDelete.svg";

interface IProduto {
  id: number;
  name: string;
  price: number;
  categoryId: number;
}

interface ICategory {
  id: number;
  name: string;
}

export default function Produto() {
  const [showForm, setShowForm] = useState("hidden");
  const [showList, setShowList] = useState("flex");

  const [id, setId] = useState<number>(0);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [categoryId, setCategoryId] = useState<number | null>(null); // ou use string '' se preferir  // Para armazenar a categoria selecionada
  
  const [produtos, setProdutos] = useState<IProduto[]>([]);
  const [categorias, setCategorias] = useState<ICategory[]>([]); // Para armazenar as categorias

  useEffect(() => {
    axios.get("http://localhost:8080/product").then((res) => setProdutos(res.data)); // Carregar produtos
    axios.get("http://localhost:8080/category").then((res) => setCategorias(res.data)); // Carregar categorias
  }, [produtos, categorias]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/product/${id}`).then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setPrice(res.data.price);
        setCategoryId(res.data.categoryId || null);  // Definindo o categoryId
      });
    }
  }, [id]); // Use `id` para carregar os dados do produto ao editar  

  function changeShowStates() {
    setShowForm((prev) => (prev === "hidden" ? "flex" : "hidden"));
    setShowList((prev) => (prev === "hidden" ? "flex" : "hidden"));
  }

  function cadastrar() {
    axios
      .post("http://localhost:8080/product", { name, price, categoryId })
      .then(() => changeShowStates());
  }

  function deletar(id: number, name: string) {
    const confirm = window.confirm(`Deseja apagar o Produto: ${name}?`);
    if (confirm) {
      axios.delete(`http://localhost:8080/product/${id}`).then(() => {
        setProdutos((prev) => prev.filter((produto) => produto.id !== id));
      });
    }
  }

  function carregar(id: number) {
    changeShowStates();
    axios.get(`http://localhost:8080/product/${id}`).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setPrice(res.data.price);
      setCategoryId(res.data.categoryId); // Carregar a categoria associada
    });
  }

  function editar() {
    axios.patch(`http://localhost:8080/product/${id}`, { name, price, categoryId })
    .then(() => changeShowStates());
  }

  // Função para buscar a categoria pelo categoryId
  function buscarCategoria(categoryId: number) {
    const categoria = categorias.find((categoria) => categoria.id === categoryId);
    return categoria ? categoria.name : "Categoria não encontrada";
  }

  return (
    <div className="w-full flex items-center justify-center">
      <form className={`bg-containerBg w-[387] h-[18.625rem] rounded-md gap-5 ${showForm} flex-col items-center justify-center`}>
        <h1 className="text-xl">Cadastro de Produto</h1>

        <div className="inputDiv flex flex-col">
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            className="w-[340] h-[39.58] px-2 rounded-md bg-layoutBg placeholder:text-tGray"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite o Nome do Produto"
          />
        </div>

        <div className="inputDiv flex flex-col">
          <label htmlFor="">Categoria:</label>

          <select
            value={categoryId ?? ""} // se `categoryId` for null, usa "" (string vazia)
            onChange={(e) => setCategoryId(+e.target.value)}
            className="w-[340] h-[39.58] px-2 rounded-md bg-layoutBg"
          >
            <option value="">Selecione a Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.name}
              </option>
            ))}
          </select>
        </div>

        <div className="inputDiv gap-2 flex items-center">
          <div className="flex flex-col">
            <label htmlFor="">Preço:</label>

            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(+e.target.value)}
              className="w-[120] h-[39.58] px-2 rounded-md bg-layoutBg placeholder:text-tGray"
              placeholder="Preço"
            />
          </div>

          <div className="btnsDiv gap-2 flex items-center justify-end">
            <button
              className="bg-bBg mt-6 px-4 py-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                id ? editar() : cadastrar();
              }}
            >
              {id ? "Editar" : "Cadastrar"}
            </button>

            <button className="bg-oBg mt-6 px-4 py-2 rounded-lg" onClick={changeShowStates}>
              Cancelar
            </button>
          </div>
        </div>

        
      </form>

      <div className={`bg-containerBg w-[387] py-9 rounded-md gap-5 ${showList} flex-col items-center justify-center`}>
        <h1 className="text-xl">Lista de Produtos</h1>
        
        <div className="topo1 w-full px-2 gap-2 flex">
          <div className="topo2 w-full flex">
            <input
              type="text"
              className="bg-layoutBg w-[285] h-[40] rounded-s-lg border-none outline-none px-2"
              placeholder="Busque pelo Nome do Produto"
            />

            <div className="input w-10 flex items-center bg-layoutBg rounded-e-lg px-2">
              <Image alt="icone-buscar" className="text-white" width={20} height={20} src={iconSearch} />
            </div>
          </div>

          <button className="bg-gBg w-[40] h-[40] flex items-center justify-center rounded-lg" onClick={changeShowStates}>
            <Image alt="icone-adicionar" className="text-white w-[20] h-[20]" src={iconAdd} />
          </button>
        </div>
        <div className="corpo w-full flex flex-col gap-2 px-2">
          {produtos.map((produto) => (
            <div className="item flex items-center justify-between bg-layoutBg w-[373] h-[50] rounded-lg px-4"
              key={produto.id}
            >
              <span className="w-full">{produto.name}</span>
              <span className="w-full">{buscarCategoria(produto.categoryId)}</span> {/* Exibindo a categoria */}

              <div className="buttons w-[80] h-full gap-3 flex items-center justify-center">
                <button
                  className="w-[30] h-[30] flex items-center justify-center rounded bg-yBg"
                  onClick={() => carregar(produto.id)}
                >
                  <Image alt="icone de editar" className="w-[22.5] h-[20]" src={iconEdit} />
                </button>
                <button
                  className="w-[30] h-[30] flex items-center justify-center rounded bg-rBg"
                  onClick={() => deletar(produto.id, produto.name)}
                >
                  <Image alt="icone de apagar" className="w-[17.5] h-[20]" src={iconDelete} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}