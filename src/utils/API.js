export const api = new Api(`http://138.197.181.210:8090`);//todo to config

export class Api {

    constructor(apiUrl){
        this.apiUrl = apiUrl;
    }

    async _fetchResource(path){
        const response = await fetch(`${this.apiUrl}${path}`);
        return await response.json();
    }
}
