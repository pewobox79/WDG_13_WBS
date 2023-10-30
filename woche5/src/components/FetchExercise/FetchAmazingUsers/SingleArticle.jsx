import { useParams } from "react-router-dom"

export default function SingleArticle(){
    const params = useParams();
    console.log("params", params)

    return <h2>Single Article {params.auto}</h2>
}