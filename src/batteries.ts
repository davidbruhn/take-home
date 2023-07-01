import type { Battery, Device } from './types';

export const BATTERIES: Record<string, Battery> = {
    megapack2XL: { id: "megapack2XL", name: "Megapack 2XL", length: 40, width: 10, energy: 4, cost: 120000, releaseYear: 2022, iconColor: 'blue' },
    megapack2: { id: "megapack2", name: "Megapack 2", length: 30, width: 10, energy: 3, cost: 80000, releaseYear: 2021, iconColor: 'yellow' },
    megapack: { id: "megapack", name: "Megapack", length: 30, width: 10, energy: 2, cost: 50000, releaseYear: 2005, iconColor: 'red' },
    powerpack: { id: "powerpack", name: "Powerpack", length: 10, width: 10, energy: 1, cost: 20000, releaseYear: 2000, iconColor: 'orange' },
} as const;

export const TRANSFORMER: Device = { name: "Transformer", length: 10, width: 10, energy: -.25, cost: 10000 } as const;
