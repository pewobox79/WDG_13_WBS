import { useContext } from "react";
import { UserContext } from "../App";


export default function InnerSection2() {

  const {user} = useContext(UserContext)

  return (
      <div style={{ border: "1px solid black", padding: "20px", backgroundColor: user != undefined ? "green":"white" }}>InnerSection2</div>
  )
}
