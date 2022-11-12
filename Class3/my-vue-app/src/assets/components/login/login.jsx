import './login.css'

const Login = ({ email, password, buttonn }) => {
    return (
        <div id='caja'>
            <form>
                <h2>{email}</h2>
                <input type="email"></input>
                <h2>{password}</h2>
                <input type="password"></input>
                <br></br>
                <button>{buttonn}</button>
            </form>
        </div>
    );
};

export default Login;