import { useEffect, useState } from "react";
import UserItem from "./UserItem";

export default function FetchAmazingUsers(){

    // adresse festlegen - in GRO?BUCHSTABEN soll nicht verändert werden
    const URL = 'https://randomuser.me/api/?results=10';

    // speicherort der gezogenen daten 
    const [users, setUsers] = useState([]);
    const [missingData, setMissingData] = useState(false); //hebel für fehlermeldungen
    const [isLoading, setIsLoading] =useState(false)
    
    
    useEffect(()=>{

        setIsLoading(true) //erst mal ladestatus aktivieren

        //simulation von server verzögerung - weil langsamer server oder zu viele anfragen
        setTimeout(()=>{

            //vanilla JS für Fetch API
            fetch(URL)
                .then(response => {
                    if (!response.ok) {
                        setMissingData(true);
                        throw new Error("irgendwas ist faul", response)
                    }

                    return response.json()

                })
                .then(data => {
                    
                    setUsers(data.results);
                    setIsLoading(false);
                
                })
                .catch(error => console.log("domain fehler", error))

        }, 8000)
        
        
            
    },[])
    
    console.log(users);
    console.log("missingdata", missingData)

    //Erstellen der UserItem
    const ListOfUsers = users?.map((user)=>{

        return <UserItem 
            key={user.login.uuid} 
            picture={user.picture.medium}
            name={user.name}
            email={user.email}
            />

    })

    return <>
    {missingData ? <div>keine daten vorhanden</div> : ListOfUsers}
    {isLoading ? <div>daten werden geladen...</div>: ListOfUsers}</>
}