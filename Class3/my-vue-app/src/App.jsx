import Login from './assets/components/login/Login'
import NavBar from './assets/components/navbar/NavBar'
import './App.css'

const App = () => (
    <>
    <NavBar
    home='Home'
    info='About'
    exit='Exit'
    ></NavBar>
    
    <Login
    email='Ingrese su email'
    password='Ingrse su contraseña'
    buttonn='Ingresar'
    >
    </Login>
    </>
);

export default App
