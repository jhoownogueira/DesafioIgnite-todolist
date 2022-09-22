import { GridSystem } from "../../Global/GlobalStyle"
import { NoTasksList } from "./style"
import noTaksImg from "../../assets/noTaskIcon.png"

export function NoTasks() {
 return (
  <NoTasksList>
   <GridSystem direction="column" justify="center" items="center">
    <img src={noTaksImg} />
    <p>
     <strong>
      Você ainda não tem tarefas cadastradas
     </strong><br />
     Crie tarefas e organize seus itens a fazer
     </p>
   </GridSystem>
  </NoTasksList>
 )
}