import Home from "../Home/Home";
import Login from "../Login/Login";

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

let tokenEsValido = (parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());

const Main = () => {
    return(
        <>{tokenEsValido ? <Home /> : <Login/> }</>
    );
}

export default Main;