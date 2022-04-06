import axios from 'axios';

interface Repository {
    retrieve(resource: string): void;
    retrieveAll(): void;
}

export class TeamRepository implements Repository{
    public baseUrl: string;

    constructor(baseUrl: string){
        this.baseUrl = baseUrl;
    }

    public setBaseUrl(baseUrl: string){
        this.baseUrl = baseUrl
    }

    public getBaseUrl(): string {
        return this.baseUrl;
    }

    public async retrieve(resource: string){
        const resourceId = `${this.baseUrl}/${resource}`;
        const response = await axios.get(resourceId);
        const data = response?.data;

        return data
    }

    public async retrieveAll(){
        const response = await axios.get(this.baseUrl);
        const data = response?.data;

        return data
    }
}