import { AUTH_URL, BASE_URL } from "../config";

export function handleLogin () {
   fetch(`${BASE_URL}${AUTH_URL}`)   
   .then((res) => res.json())
   .then((finalRes) => {
        window.location.replace(finalRes.url) 
   })
}

export function handleLogout () {
    localStorage.removeItem('token');
    window.location.replace("/");
};
