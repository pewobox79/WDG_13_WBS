
export default function RegisterPage() {


    function handleRegister() {
        //logic to POST new user to endpoint
        //
    }
    return (
        <div><h1>RegisterPage</h1>
            <form onSubmit={handleRegister}>
                <input type="text" name="username" placeholder={"username"} /><br />
                <input type="text" name="password" placeholder="Password" />
            </form>
        </div>
    )
}
