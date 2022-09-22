import { Trash } from "phosphor-react";
import { GridSystem } from "../../Global/GlobalStyle";
import { Container, Task } from "./style";


export function TasksList() {
 return (
  <>
  <Container>
   <GridSystem direction="column" justify="space-between" items="flex-start">
    <header>
     <div className="left">
      <strong>Tarefas criadas</strong>
      <span>5</span>
     </div>
     <div className="right">
      <strong>Concluídas</strong>
      <div className="tag">
       <span>2</span>&nbsp;
      <span>de 5</span>
      </div>
     </div>
    </header>
    <section>
     <ul>
      <Task
      concluida={true}
      >
       <div className="checkbox">
        <input type="checkbox" name="task" id="task" />
        <label htmlFor="task"></label>
       </div>
       <p>Tarefa a se fazer</p>
       <Trash size={20} />
      </Task>
      <Task
      concluida={false}
      >
       <div className="checkbox">
        <input type="checkbox" name="task2" id="task2" />
        <label htmlFor="task2"></label>
       </div>
       <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
       <Trash size={20} />
      </Task>
     </ul>
    </section>
   </GridSystem>
  </Container>
  </>
 )
}