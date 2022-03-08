import React, {useState, useEffect} from "react";
import ListItem from "./components/ListItem";
import { Container, Header } from './styled';
import { Type } from './types/Type';

export default () => {
  const [list, setList] = useState<Type[]>([
    {id: 1, name: 'Abrir Geladeira', done: false},
    {id: 2, name: 'Fechar Geladeira', done: false}
  ])
  return(
    <Container>
      <div className="center">
          <Header>Lista de Tarefas</Header>
          {/**Area de adicionar novas tarefas */}
          {list.map((item, chave) => (
            <ListItem data={item} key={chave}/>
          ))}
      </div>
    </Container>
  )
}