export async function sendCredentialsToServer(email, password) {
	const response = await fetch("http://localhost:8000/users/api/token/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
			password: password,
		}),
	});

	const resData = await response.json();

	if (!response.ok) {
		throw new Error(resData.detail || "Wrong Email or Password");
	}

	return resData;
}

export async function sentTokenToServer(token) {
    const response = await fetch("http://localhost:8000/users/login/", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
    });

    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.detail || "Wrong Email or Password");
    }

    return resData;
}
