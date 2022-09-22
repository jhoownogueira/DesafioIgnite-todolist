import { PlusCircle } from "phosphor-react";
import { GridSystem } from "../../Global/GlobalStyle";
import { Form } from "./style";

export function InputNewTodo() {
 return (
  <>
  <Form>
   <GridSystem direction="rows" justify="space-between" items="center">
    <input type="text" id="todo" name="todo" placeholder="Adicione uma nova tarefa"/>
    <button>
     Criar
     <PlusCircle size={16} />
    </button>
   </GridSystem>
  </Form>
  </>
 )
}