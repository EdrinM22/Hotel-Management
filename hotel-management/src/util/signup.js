export default async function sendSignupDataToServer(newUserData){
    const response = await fetch("http://localhost:8000/users/guest/list/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newUserData),
    });

    const resData = await response.json();

    console.log(resData);

    if (!response.ok) {
        throw new Error(resData.detail || "Something went wrong");
    }

    return resData;
}


export function formateDate(date){
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}-${month}-${day}`;
}