import { CurrentUserContext } from "../App"
import { useContext } from "react"
export default function InnerSection2() {

  const {user} = useContext(CurrentUserContext)
  //context hier aufrufen

  return (
      <div style={{ border: "1px solid black", padding: "20px", backgroundColor: user != undefined ? "green": "white" }}>InnerSection2</div>
  )
}
