export interface Device {
    name: string;
    cost: number;
    energy: number;
    length: number;
    width: number;
}

export interface Battery extends Device {
    iconColor: string;
    id: string;
    releaseYear: number;
}