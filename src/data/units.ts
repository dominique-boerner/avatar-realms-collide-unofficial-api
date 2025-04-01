export interface Unit {
    tier: string;
    element: string;
    unit: string;
    recruitment: {
        food: number;
        wood: number;
        stone: number;
        gold: number;
        time: string;
    };
    healing: {
        food: number;
        wood: number;
        stone: number;
        gold: number;
        time: string;
    };
    stats: {
        power: number;
        atk: number;
        def: number;
        health: number;
        speed: number;
        load: number;
    };
}

export const units: Unit[] = [
    {
        tier: "T1",
        element: "Water",
        unit: "Water",
        recruitment: { food: 40, wood: 50, stone: 0, gold: 0, time: "0m 10s" },
        healing: { food: 16, wood: 20, stone: 0, gold: 0, time: "0m 0s" },
        stats: { power: 1, atk: 32, def: 62, health: 64, speed: 120, load: 7 }
    },
    {
        tier: "T2",
        element: "Fire",
        unit: "Sergeant",
        recruitment: { food: 90, wood: 90, stone: 0, gold: 0, time: "0m 20s" },
        healing: { food: 36, wood: 36, stone: 0, gold: 0, time: "0m 50s" },
        stats: { power: 2, atk: 78, def: 75, health: 76, speed: 120, load: 9 }
    },
    {
        tier: "T3",
        element: "Earth",
        unit: "Captain",
        recruitment: { food: 260, wood: 260, stone: 0, gold: 0, time: "0m 50s" },
        healing: { food: 104, wood: 104, stone: 0, gold: 0, time: "1m 30s" },
        stats: { power: 4, atk: 158, def: 162, health: 158, speed: 120, load: 12 }
    },
    {
        tier: "T4",
        element: "Air",
        unit: "General",
        recruitment: { food: 580, wood: 580, stone: 0, gold: 0, time: "1m 40s" },
        healing: { food: 232, wood: 232, stone: 0, gold: 0, time: "2m 50s" },
        stats: { power: 8, atk: 318, def: 334, health: 322, speed: 120, load: 16 }
    },
    {
        tier: "T5",
        element: "Fire",
        unit: "Elite",
        recruitment: { food: 1170, wood: 1170, stone: 0, gold: 0, time: "3m 0s" },
        healing: { food: 468, wood: 468, stone: 0, gold: 0, time: "5m 0s" },
        stats: { power: 16, atk: 602, def: 638, health: 620, speed: 120, load: 22 }
    },
    {
        tier: "T6",
        element: "Water",
        unit: "Champion",
        recruitment: { food: 2000, wood: 2000, stone: 0, gold: 0, time: "5m 0s" },
        healing: { food: 800, wood: 800, stone: 0, gold: 0, time: "8m 0s" },
        stats: { power: 32, atk: 1084, def: 1146, health: 1112, speed: 120, load: 30 }
    },
    {
        tier: "T7",
        element: "Earth",
        unit: "Avatar",
        recruitment: { food: 4100, wood: 4100, stone: 0, gold: 0, time: "8m 30s" },
        healing: { food: 1640, wood: 1640, stone: 0, gold: 0, time: "14m 0s" },
        stats: { power: 64, atk: 1942, def: 2042, health: 1988, speed: 120, load: 40 }
    },
    {
        tier: "T8",
        element: "Air",
        unit: "Elder",
        recruitment: { food: 8200, wood: 8200, stone: 0, gold: 0, time: "15m 0s" },
        healing: { food: 3280, wood: 3280, stone: 0, gold: 0, time: "25m 0s" },
        stats: { power: 128, atk: 3442, def: 3620, health: 3528, speed: 120, load: 55 }
    }
];
