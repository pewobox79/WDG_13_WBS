export default function UserItem({ email, picture, name }) {

    //destructurierung von object
    //const {email, name, picture} = props;


    return <div style={{ marginBottom: "8px", border: "1px dotted black", padding: "5px" }}>
        <img src={picture} /><br />
        <p>{name.first} {name.last}</p>
        {email}

    </div>
}