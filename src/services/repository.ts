import axios from 'axios';

interface Driver{
    name: string,
    worldChampion: boolean
}

interface Team {
    id: string,
    drivers: Driver[],
    teamPrincipal: string
}

/**
 * The Repository interface provides a uniform API
 * for all data fetching services.
 */
interface Repository {
    retrieve(resource: string): Promise<Team>;
    retrieveAll(): Promise<Team[]>;
}

/**
 * The TeamRepository provides an API around fetching team data from
 * the mock f1 teams service.
 */
export class TeamRepository implements Repository{

    constructor(private _baseUrl: string){}

    public get baseUrl(): string{
        return this._baseUrl
    }

    public set baseUrl(baseUrl: string){
        this._baseUrl = baseUrl
    }

    // Retrieve one resource from the remote server
    public async retrieve(resource: string): Promise<Team> | undefined {
        const resourceId = `${this._baseUrl}/${resource}`;
        const response = await axios.get(resourceId);
        const data = response?.data;

        return data
    }

    // Retrieve all resources from the remote server
    public async retrieveAll(): Promise<Team[]> | undefined {
        const response = await axios.get(this._baseUrl);
        const data = response?.data;

        return data
    }
}