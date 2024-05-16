import { RequestService } from "./sendRequest";

export async function sendCredentialsToServer(email, password) {
	const requestService = new RequestService();
	const response = await requestService.getToken(email, password);
	const resData = await response.json();
	if (!response.ok) {
		throw new Error(resData.detail || "Wrong Email or Password");
	}

	return resData;
}

export async function sentTokenToServer(token) {
	const requestService = new RequestService(token);
    const response = await requestService.login();
    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.detail || "Wrong Email or Password");
    }

    return resData;
}
