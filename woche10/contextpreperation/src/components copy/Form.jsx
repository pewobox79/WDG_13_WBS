import { useContext } from "react"
import {CurrentUserContext} from '../App'

export default function Form() {

  const context = useContext(CurrentUserContext)
  return (
    <div style={{border: "1px solid red", padding: "20px"}}>Form</div>
  )
}
