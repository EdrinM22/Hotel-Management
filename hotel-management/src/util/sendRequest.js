const requestMethods = {
    POST: 'POST',
    GET: 'GET',
    PUT: 'PUT',
    PATCH: 'PATCH',
};

function cleanQueryParams(query_params) {
    let data = {}
    for ([k, v] of Object.entries(query_params)) {
            if (v !== null) {
                data[k] = query_params;
            }
        }
    return data
}

function getTheTrueUrl(sendingUrl, data) {
    let i = 0;
    if (data instanceof Object && Object.entries(data).length == 0) {
        return sendingUrl; 
    }
    sendingUrl += '?';
    for ([k, v] in Object.entries(data)) {
           if (i === 0) {
                sendingUrl += `${k}=${v}`;
           } else {
                sendingUrl += `&${k}=${v}`;
           }
        }
    return sendingUrl;
}

export class RequestService {
    
    constructor(access_token=null, refresh_token=null) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.URLS = {
            staging: 'http://localhost:8000/',
            production: '',
        }
        this.mainUrl = this.URLS.staging
        this.header_info = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.access_token}`,
        }
        this.userService = new RequestUserService(this.mainUrl, this.header_info, 
            access_token, refresh_token);
        this.roomService = new RequestRoomService(this.mainUrl, this.header_info, access_token, refresh_token)
    }

    async getToken(email, password) {
        return await this.userService.getToken(email, password);
    }

    async login() {
        return await this.userService.logIn();
    }

    async createRoom(data) {
        return await this.roomService.createRoom(data);
    }

    async listRoom(query_params) {
        return await this.roomService.listRoom(query_params);
    }

    async receiptPDF(data) {
        return await this.roomService.receiptPDF(data);
    }

}

class RequestUserService {
    constructor(mainUrl, header_info, access_token=null, refresh_token=null) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.mainUrl = mainUrl + 'users/';
        this.header_info = header_info
    }

    async getToken(email, password) {
        return await fetch(this.mainUrl + `api/token/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'email': email,
                'password': password,
            })
            
        });
    }

    async logIn() {
        return await fetch(this.mainUrl + `login/`, {
            headers: this.header_info,
        });
    }

   
    
}

class RequestRoomService {
    
    constructor(mainUrl, header_info, access_token=null, refresh_token=null) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.mainUrl = mainUrl + "rooms/";
        this.header_info = header_info;
    }

    async createRoom(data) { //Expect an object for data = {}
        return await fetch(this.mainUrl + 'room/create/', {
            method: requestMethods.POST,
            headers: this.header_info,
            body: JSON.stringify(data)
        })
    }

    async listRoom(query_params) {
        let data = cleanQueryParams(query_params);
        const sendingUrl = getTheTrueUrl(this.mainUrl + 'rooms/list/', data);
        return await fetch(sendingUrl, {
            headers: this.header_info,
        });
    }

    async receiptPDF(data) {
        return await fetch(this.mainUrl + 'reservation/receipt/pdf/', {
            method: requestMethods.POST,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
    }
}

class RequestFeedbackService {
    
    constructor(mainUrl, header_info, access_token=null, refresh_token=null) {
        this.access_token = access_token;
        this.refresh_token = refresh_token;
        this.mainUrl = mainUrl + "feedback/";
        this.header_info = header_info;
    }

    async createFeedback(data) {
        return await fetch(this.mainUrl + 'create/', {
            method: requestMethods.POST,
            headers: this.header_info,
            body: data
        })
    }
    
    async listFeedback(data) {
        
    }
}