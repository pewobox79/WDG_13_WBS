

export default function LoginPage() {

    function handleSubmit(){

        //handle submit logic to POST data via BODY {username: "", password:""}

    }

    return (


        <div><h1>LoginPage</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder={"username"} /><br />
                <input type="text" name="password" placeholder="Password" />
            </form>
        </div>
    )
}
