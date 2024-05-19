export function formatDateYMD(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function formatDateYMDHMS(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export function formatDateDMY(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}