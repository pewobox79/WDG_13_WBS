import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import UserList from "./UserList";
import { useParams, Link } from "react-router-dom";

export default function FetchAmazingUsers() {

    const {auto} = useParams()
console.log("params", auto)
    // adresse festlegen - in GRO?BUCHSTABEN soll nicht verändert werden
    const URL = 'https://hn.algolia.com/api/v1/search';

    // speicherort der gezogenen daten 
    const [users, setUsers] = useState([]);
    const [authors, setAuthors] = useState([])
    const [missingData, setMissingData] = useState(false); //hebel für fehlermeldungen
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {

        setIsLoading(true) //erst mal ladestatus aktivieren

        //simulation von server verzögerung - weil langsamer server oder zu viele anfragen
        setTimeout(() => {

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

                    setUsers(data.hits);
                    setIsLoading(false);

                })
                .catch(error => console.log("domain fehler", error))

        }, 500)



    }, [])


    console.log("alle daten", users);

    const ArticleList = users.map((item) => {
        
        return <div key={item.story_id}><p>
            <Link to={`${item.author}`}>{item.author}</Link></p>
            </div>
    })
    return <>{ArticleList}</>
}