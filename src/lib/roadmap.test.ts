import { describe, expect, it } from 'vitest';

import { DONE, IN_PROGRESS, PLANNED, POSTPONED, type RoadmapItem, roadmapData, TESTING } from '@/data/roadmap';

import { deliveredByYear, upNext } from './roadmap';

const item = (id: string, status: RoadmapItem['status']): RoadmapItem => ({ id, title: id, status });

const data: Record<string, RoadmapItem[]> = {
    '2025': [item('a', DONE), item('b', DONE), item('late', POSTPONED)],
    '2026': [item('c', DONE), item('planned', PLANNED), item('postponed', POSTPONED), item('testing', TESTING), item('doing', IN_PROGRESS)],
};

describe('upNext', () => {
    it('lists every open item: in progress, testing, planned, then postponed', () => {
        expect(upNext(data).map((i) => i.id)).toEqual(['doing', 'testing', 'planned', 'late', 'postponed']);
    });

    it('gives the home strip its first four items from the real data', () => {
        const strip = upNext(roadmapData).slice(0, 4);
        expect(strip).toHaveLength(4);
        expect(strip.every((i) => i.status !== DONE && i.status !== POSTPONED)).toBe(true);
    });
});

describe('deliveredByYear', () => {
    it('groups done items, newest year first and latest item first', () => {
        expect(deliveredByYear(data).map((g) => [g.year, g.items.map((i) => i.id)])).toEqual([
            ['2026', ['c']],
            ['2025', ['b', 'a']],
        ]);
    });
});
