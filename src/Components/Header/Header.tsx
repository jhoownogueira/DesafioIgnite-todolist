import { GridSystem } from "../../Global/GlobalStyle"
import { StyleHeader } from "./style"

import logoImg from '../../assets/Logo.svg'

export function Header() {
 return (
  <>
  <StyleHeader>
   <GridSystem direction="rows" justify="center" items="center">
    <img src={logoImg}></img>
   </GridSystem>
  </StyleHeader>
  </>
 )
}