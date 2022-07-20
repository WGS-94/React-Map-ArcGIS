<!-- Logotipo 
<div align="center">
  <img src="./Assets/ignite.png">
</div>-->

<!-- Title -->
<h1 align="center"> React Hooks and Esri ArcGIS API for javascript 🔥 </h1>

<!-- Subtitle -->
<h2> Simples forma de exibir um mapa usando Reactjs </h2>

<!-- Badges 
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2306b656?style=flat-square">
  </a>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunoemferreira/rocketseat-ignite-dt-money?color=%2304D361?style=flat-square">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunoemferreira/rocketseat-ignite-dt-money?style=flat-square">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunoemferreira/rocketseat-ignite-dt-money?style=flat-square">
</p>-->

<!-- Sobre o Projeto
## 🚀 Sobre o Desafio
Nesse desafio, você vai desenvolver uma aplicação de controle de tarefas no estilo to-do list, que contém as seguintes funcionalidades:
 -->

<!--

## 🔖 Layout

Você pode visualizar o layout do projeto através [desse link](https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate). Lembrando que você  precisa ter uma conta no [Figma](http://figma.com/) para acessá-lo.-->

 # Hook
 
```bash

```

## 🖼️ Exemplo: Imagen da Cidade de Launda - Angola

<div align="center">
  <img src="https://user-images.githubusercontent.com/87288949/179872043-651b0801-82ae-4371-9e5d-da192d72cbaa.PNG" alt="Luanda">
</div>

## 🧰 Tecnologias e Bibliotecas

* [ReactJS](https://pt-br.reactjs.org/tutorial/tutorial.html)
  <!--* [Vite](https://www.npmjs.com/package/styled-components) - Biblioteca CSS in JS
  * [phosphoricons](https://phosphoricons.com/) - Biblioteca for Icons in JS -->
* [esri-loader](https://github.com/esri/esri-loader)

<!--### Tools para criar API Fake
 * [MirageJS]()
 -->
 
 # Hook
 
```bash
import { useEffect } from 'react';
import { loadModules } from 'esri-loader';

export const useCreateMap = (MapRef) => {

  useEffect(() => {

    let view;

    const initializedMap = async (MapRef) => {
      const modules = ["esri/Map", "esri/views/MapView"];
      const [Map, MapView] = await loadModules(modules);
      const map = new Map({ basemap: 'streets-relief-vector' });

      view = new MapView({
        map: map,
        center: [13.234444, -8.838333],
        zoom: 14,
        // use of ref as container
        container: MapRef.current
      })
    }
    
    initializedMap(MapRef);

    return () => view?.destroy();

  }, [MapRef]);

}
```

## ⚙️ Rodando o Projeto
```bash
# Clone este repositório para a pasta anterior
$ git clone https://github.com/WGS-94/React-Map-ArcGIS
# ou use a opção de download.
# Acesse a pasta React-Map-ArcGIS
$ cd React-Map-ArcGIS
# Instale as dependências
$ yarn install
ou
$ npm install
# Executando o Projeto
$ yarn start 
ou
$ npm start
# Acesse http://localhost:3000 no seu navagador
```
