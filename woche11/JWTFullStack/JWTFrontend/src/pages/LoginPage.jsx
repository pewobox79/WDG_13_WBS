import { useRef } from "react"

export default function LoginPage() {

    const usernameRef = useRef()
    const passwordRef=useRef()

    

    function handleChange(){

        const data = {username: usernameRef.current.value, password: passwordRef.current.value}
        sessionStorage.setItem("autosave", JSON.stringify(data))
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log("submit ")
        //handle submit logic to POST data via BODY {username: "", password:""}

    }

    const autoSave = JSON.parse(sessionStorage.getItem("autosave"))

    return (


        <div><h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder={"username"} ref={usernameRef} onChange={handleChange} defaultValue={autoSave ? autoSave.username : ""} /><br />
                <input type="text" name="password" placeholder="Password"  ref={passwordRef} onChange={handleChange} defaultValue={autoSave ? autoSave.password : ""}/><br/>
                <button>Login</button>
            </form>
        </div>
    )
}
