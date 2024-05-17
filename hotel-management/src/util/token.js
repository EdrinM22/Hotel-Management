export function getTokenFromLocalStorage(identifier = "token") {
    return JSON.parse(localStorage.getItem(identifier));
}

export function saveTokenToLocalStorage(token, identifier = "token") {
    localStorage.setItem(identifier, JSON.stringify(token));
}

export function removeTokenFromLocalStorage(identifier = "token") {
    localStorage.removeItem(identifier);
}