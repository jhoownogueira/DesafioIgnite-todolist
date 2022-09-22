import { PlusCircle, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { GridSystem } from "../../Global/GlobalStyle";
import { TaskTable, Task } from "./style";
import { v4 as uuidv4 } from "uuid";
import { Form } from "./style";
import { NoTasks } from "../NoTasks/NoTasks";

interface TaskListProps {
 id: string;
 title: string;
 isComplete: boolean;
}

export function NewTodo() {

 const [taskList, setTaskList] = useState<TaskListProps[]>([]);

 const [InputValue, setInputValue] = useState('');

 function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
  setInputValue(event.target.value);
 }

 function handleCreateNewTodo(event: FormEvent) {
  event.preventDefault();
  setTaskList([
   ...taskList,
   {
    id: uuidv4(),
    title: `${InputValue}`,
    isComplete: false
   }
  ]);
 }
 return (
  <>
  <Form onSubmit={handleCreateNewTodo}>
   <GridSystem direction="rows" justify="space-between" items="center">
    <input
     name="todo" 
     onChange={handleNewTodoChange}
     placeholder="Adicione uma nova tarefa"
     required
     />
    <button>
     Criar
     <PlusCircle size={16} />
    </button>
   </GridSystem>
  </Form>
  <TaskTable>
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
      {
       taskList.length == 0 ? <NoTasks />
       :
       taskList.map(task => {
        return (
         <Task
         key={task.id}
         concluida={task.isComplete}
        >
         <div className="checkbox">
          <input type="checkbox" name={task.id} id={task.id} />
          <label htmlFor={task.id}></label>
         </div>
         <p>{task.title}</p>
         <Trash size={20} />
        </Task>
        )
       })
      }

      
     </ul>
    </section>
   </GridSystem>
  </TaskTable>
  </>
 )
}