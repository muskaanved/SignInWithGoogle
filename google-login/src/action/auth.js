import { AUTH_URL, BASE_URL } from "../config";

export function handleLogin () {
    fetch(`${BASE_URL}${AUTH_URL}`)
    .then((res) => {
        window.location.href(res.url) 
    }) 
}

export function handleLogout () {
    localStorage.removeItem('token');
    window.location.replace("/");
};
