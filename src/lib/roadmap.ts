import { DONE, IN_PROGRESS, PLANNED, POSTPONED, type RoadmapItem, type RoadmapStatus, TESTING } from '@/data/roadmap';

const UP_NEXT_ORDER: RoadmapStatus[] = [IN_PROGRESS, TESTING, PLANNED, POSTPONED];

export interface StatusStyle {
    label: string;
    color: string;
}

// Status colours are the Hive Glow data colours, never the site cyan.
export const STATUS_STYLE: Record<RoadmapStatus, StatusStyle> = {
    [DONE]: { label: 'Done', color: '#34D399' },
    [IN_PROGRESS]: { label: 'In progress', color: '#60A5FA' },
    [TESTING]: { label: 'Testing', color: '#FBBF24' },
    [PLANNED]: { label: 'Planned', color: '#8A94A3' },
    [POSTPONED]: { label: 'Postponed', color: '#5C6573' },
};

/** Everything not delivered yet: in progress first, then testing, planned and postponed. Data order within a status. */
export function upNext(data: Record<string, RoadmapItem[]>): RoadmapItem[] {
    const open = Object.keys(data)
        .sort()
        .flatMap((year) => data[year])
        .filter((item) => item.status !== DONE);

    return UP_NEXT_ORDER.flatMap((status) => open.filter((item) => item.status === status));
}

export interface DeliveredYear {
    year: string;
    items: RoadmapItem[];
}

/** Delivered items per year, newest year first and the latest item first inside a year. */
export function deliveredByYear(data: Record<string, RoadmapItem[]>): DeliveredYear[] {
    return Object.keys(data)
        .sort()
        .reverse()
        .map((year) => ({ year, items: data[year].filter((item) => item.status === DONE).reverse() }))
        .filter((group) => group.items.length > 0);
}
