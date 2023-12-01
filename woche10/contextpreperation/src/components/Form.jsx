import { useContext } from "react";
import { UserContext } from "../App";

export default function Form() {

  const {setUser} = useContext(UserContext)
  

  function handleForm(e){
    e.preventDefault()
    setUser(e.target[0].value)
  }

  return (
    <div style={{border: "1px solid red", padding: "20px"}}>
      
      <form onSubmit={handleForm}>
        <input type="text" name="name"/><br/>
        <button type="submit">Submit</button>
      </form>
      
      </div>
  )
}
