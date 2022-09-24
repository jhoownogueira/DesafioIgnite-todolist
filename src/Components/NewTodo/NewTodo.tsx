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
  setInputValue('');
 }

 const taskListComplete = taskList.filter(tarefaCompleta);
 function tarefaCompleta(tarefa: TaskListProps) {
  return tarefa.isComplete === true
 }
 
 function handleCheckedChange(event: ChangeEvent<HTMLInputElement>) {
  const taskId = event.target.id;
  const newTasks = taskList.map((item) => {
     if(taskId == item.id)
       item.isComplete = !item.isComplete;
     return item;
  });
  setTaskList(newTasks)
 }

 function deleteTask(task: TaskListProps) {
  const newList = [...taskList]
  newList.splice(taskList.indexOf(task), 1);
  setTaskList(newList);
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
     <PlusCircle size={24} />
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
          <input type="checkbox" onChange={handleCheckedChange} name={task.id} id={task.id} />
          <label htmlFor={task.id}></label>
         </div>
         <p>{task.title}</p>
         <button type="button" onClick={() => deleteTask(task)}>
          <Trash size={20} weight="bold" />
         </button>
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