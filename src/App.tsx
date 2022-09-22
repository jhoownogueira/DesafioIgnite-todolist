import { Header } from "./Components/Header/Header"
import { InputNewTodo } from "./Components/InputNewTodo/InputNewTodo"
import { TasksList } from "./Components/TasksList/TasksList"
import { GlobalStyle } from "./Global/GlobalStyle"


function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <InputNewTodo />
    <TasksList />
    </>
  )
}

export default App
