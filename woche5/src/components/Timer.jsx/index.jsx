import { useEffect, useState } from "react"

export default function Timer() {

    const [number, setNumber]=useState(0);

    useEffect(()=>{

       /*  const interval = setInterval(()=>{
            setNumber(prev => prev+1)
        }, 1000)

        return ()=>{
            clearInterval(interval)
        } */
    },[])

    return <h1></h1>

}