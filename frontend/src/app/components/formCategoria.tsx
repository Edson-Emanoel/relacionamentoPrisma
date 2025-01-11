"use client"

import Image from "next/image"
import React, { useState } from "react"

import iconAdd from "../assets/iconAdd.svg"
import iconSearch from "../assets/iconSearch.svg"
import iconEdit from "../assets/iconEdit.svg"
import iconDelete from "../assets/iconDelete.svg"

export default function FormCategoria() {

      const [showForm, setShowForm] = useState("hidden")
      const [showList, setShowList] = useState("flex")

      function changeShowStates (){
            if(showForm === "hidden"){
                  setShowForm("flex")
                  setShowList("hidden")
            } else if (showForm === "flex") {
                  setShowForm("hidden")
                  setShowList("flex")
            }
      }

  return (
    <>
      <form className={`bg-containerBg w-[387] h-[18.625rem] rounded-md gap-5 ${showForm} flex-col items-center justify-center`}>
            <h1 className="text-xl">Cadastro de Categoria</h1>

            <div className="inputDiv flex flex-col">
                  <label htmlFor="">Nome da Categoria:</label>
                  
                  <input
                        type="text"
                        className="w-[317] h-[39.58] px-2 rounded-md bg-layoutBg placeholder:text-tGray"
                        placeholder="Digite o Nome da Categoria"
                  />
            </div>

            <div className="inputDiv flex flex-col">
                  <label htmlFor="">Descrição da Categoria:</label>
                  
                  <input
                        type="text"
                        className="w-[317] h-[39.58] px-2 rounded-md bg-layoutBg placeholder:text-tGray"
                        placeholder="Digite a Descrição da Categoria"
                  />
            </div>
            
            <div className="btnsDiv gap-8 flex items-center">
                  <button className="bg-bBg px-4 py-2 rounded-lg">Cadastrar</button>
                  <button className="bg-oBg px-4 py-2 rounded-lg" onClick={() => changeShowStates()}>Cancelar</button>
            </div>
      </form>

      <div className={`bg-containerBg w-[387] py-9 rounded-md gap-5 ${showList} flex-col items-center justify-center`}>
            <h1 className="text-xl">Lista de Categorias</h1>

            <div className="topo1 w-full px-2 gap-2 flex">
                  <div className="topo2 w-full flex">
                        <input
                              type="text"
                              className="bg-layoutBg w-[285] h-[40] rounded-s-lg border-none outline-none px-2"
                              placeholder="Busque pelo Nome da Categoria"
                        />

                        <div className="input w-10 flex items-center bg-layoutBg rounded-e-lg px-2">
                              <Image
                                    alt="icone-buscar"
                                    className="text-white"
                                    width={20}
                                    height={20}
                                    src={iconSearch}
                              />
                        </div>
                  </div>

                  <div className="w-full">
                        <button className="bg-gBg w-[40] h-[40] flex items-center justify-center rounded-lg" onClick={() => changeShowStates()}>
                              <Image
                                    alt="icone-adicionar"
                                    className="text-white w-[20] h-[20]"
                                    src={iconAdd}
                              />
                        </button>
                  </div>
            </div>
            
            <div className="corpo w-full flex flex-col gap-2 px-2">
                  <div className="item flex items-center justify-between bg-layoutBg w-[370] h-[50] rounded-lg px-4">
                        <span className="w-full">Eletrônicos</span>

                        <div className="buttons w-[80] h-full gap-3 flex items-center justify-center">
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-yBg">
                                    <Image
                                          alt=""
                                          className="w-[22.5] h-[20]"
                                          src={iconEdit}
                                    />
                              </button>
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-rBg">
                                    <Image
                                          alt=""
                                          className="w-[17.5] h-[20]"
                                          src={iconDelete}
                                    />
                              </button>
                        </div>
                  </div>
                  <div className="item flex items-center justify-between bg-layoutBg w-[370] h-[50] rounded-lg px-4">
                        <span className="w-full">Eletrônicos</span>

                        <div className="buttons w-[80] h-full gap-3 flex items-center justify-center">
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-yBg">
                                    <Image
                                          alt=""
                                          className="w-[22.5] h-[20]"
                                          src={iconEdit}
                                    />
                              </button>
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-rBg">
                                    <Image
                                          alt=""
                                          className="w-[17.5] h-[20]"
                                          src={iconDelete}
                                    />
                              </button>
                        </div>
                  </div>
                  <div className="item flex items-center justify-between bg-layoutBg w-[370] h-[50] rounded-lg px-4">
                        <span className="w-full">Eletrônicos</span>

                        <div className="buttons w-[80] h-full gap-3 flex items-center justify-center">
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-yBg">
                                    <Image
                                          alt=""
                                          className="w-[22.5] h-[20]"
                                          src={iconEdit}
                                    />
                              </button>
                              <button className="w-[30] h-[30] flex items-center justify-center rounded bg-rBg">
                                    <Image
                                          alt=""
                                          className="w-[17.5] h-[20]"
                                          src={iconDelete}
                                    />
                              </button>
                        </div>
                  </div>
            </div>
      </div>
    </>
  )
}