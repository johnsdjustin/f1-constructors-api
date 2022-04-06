import axios from 'axios';

/**
 * The Repository interface provides a uniform API
 * for all data fetching services.
 */
interface Repository {
    retrieve(resource: string): void;
    retrieveAll(): void;
}


/**
 * The TeamRepository provides an API around fetching team data from
 * the mock f1 teams service.
 */
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

    // Retrieve one resource from the baseUrl
    public async retrieve(resource: string){
        const resourceId = `${this.baseUrl}/${resource}`;
        const response = await axios.get(resourceId);
        const data = response?.data;

        return data
    }

    // Retrieve all resources from the base url
    public async retrieveAll(){
        const response = await axios.get(this.baseUrl);
        const data = response?.data;

        return data
    }
}