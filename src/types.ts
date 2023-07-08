export interface Device {
    id: string;
    name: string;
    cost: number;
    energy: number;
    length: number;
    width: number;
}

export interface Battery extends Device {
    releaseYear: number;
}