# Readme

## Node
nvm install v15
nvm use 15

## Instalação das dependências
yarn init -y
yarn add react react-dom
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli @babel/cli webpack-dev-server -D
yarn add style-loader css-loader
yarn add babel-preset-env
yarn add file-loader

## Rodar ambiente de dev
yarn webpack --mode development
yarn webpack-dev-server --mode development

yarn dev

## Rodar build
webpack --mode production

yarn build
