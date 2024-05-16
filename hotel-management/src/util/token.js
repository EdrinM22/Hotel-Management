export function getTokenFromLocalStorage() {
    return JSON.parse(localStorage.getItem("token"));
}

export function saveTokenToLocalStorage(token) {
    localStorage.setItem("token", JSON.stringify(token));
}