

export default function UserList({ users }) {


    function getAuthors(liste) {
        let authorList = []
        liste.map((item) => {
            authorList.push(item.author)
        })
        return authorList
    }

    const authors = getAuthors(users)

    const ListOfAuthors = authors.map((author, index) => {
        return <h2 key={index + author}>{author}</h2>
    })

    
    return (
        <div>UserList
            {ListOfAuthors}
        </div>
    )
}
