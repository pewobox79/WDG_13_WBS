import { useRef } from "react"
export default function RegisterPage() {

    const usernameRef = useRef();
    const passwordRef = useRef()

    async function handleRegister(e) {
        e.preventDefault()
    
        const newUser = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }

        const config ={
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(newUser)

        }

        try{
            const data = await fetch("http://localhost:3500/user/registration", config)
            const response = await data.json()

            console.log("data submitted", response)

        }catch(err){

            console.log("registration failed", err)

        }

    }


    return (
        <><h1>RegisterPage</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="username" placeholder={"username"} ref={usernameRef}/><br />
                <input type="text" name="password" placeholder="Password" ref={passwordRef} /><br/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
