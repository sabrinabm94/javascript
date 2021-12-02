import React, { useState } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import './App.css';
import Panda from './assets/imagens/panda.png';

function App() {
  const [projects, setProjects] = useState(['Web development', 'Software development']); //estado
  //useState retorna um array de duas posições, variável com valor e função que atualiza esse valor

  function handleAddProject() {
    //projects.push(`Novo projeto ${Date.now()}`); //alterava o valor original, e não gerar um novo valor com o alterado

    setProjects([...projects, `Novo projeto ${Date.now()}`]); //imutabilidade do valor original

    console.log(projects);
  }

  return (
    <>
      <Header />
      <Title text="Olá mundo !"/>

      <img width="300" src={Image} alt="Um panda"/>

      <ul> 
        {projects.map(project => <li key={project}>{project}</li>)}
      </ul>

      <button class="button" onClick={handleAddProject}>Adicionar</button>
    </>
  );
}

export default App;
