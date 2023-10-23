import { useState } from "react"

export default function ToDoListItem ({title}){

    const [clicked, setClicked] = useState(false)


    function handleClick(){
        setClicked(!clicked);
    }
    // jede Componente hat ihr eigenes STATE
    return <div onClick={handleClick} style={{color: clicked ? "red": "blue"}}>{title}</div>
}