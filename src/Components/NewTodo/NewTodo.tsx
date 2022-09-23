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

 const [check, setCheck] = useState(false);


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
  setInputValue('');
 }

 function tarefaCompleta(tarefa: boolean) {
  return tarefa.isComplete === true
 }
 const taskListComplete = taskList.filter(tarefaCompleta)



 function handleCheckedChange(event: ChangeEvent<HTMLInputElement>) {
  console.log(event.target)
  setCheck(event.target.checked = !check)


 }


 return (
  <>
  <Form onSubmit={handleCreateNewTodo}>
   <GridSystem direction="rows" justify="space-between" items="center">
    <input
     type='text'
     onChange={handleNewTodoChange}
     value={InputValue}
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
      <span>{taskList.length}</span>
     </div>
     <div className="right">
      <strong>Concluídas</strong>
      <div className="tag">
       <span>{taskListComplete.length}</span>&nbsp;
      <span>de {taskList.length}</span>
      </div>
     </div>
    </header>
    <section>
     <ul>
      {
       taskList.length == 0 
       ? <NoTasks />
       : taskList.map(task => {
        return (
         <Task
         key={task.id}
         concluida={task.isComplete}
        >
         <div className="checkbox">
          <input type="checkbox" checked={check} onChange={handleCheckedChange} name={task.id} id={task.id} />
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