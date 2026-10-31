'use client';

import { Dialog } from '@chakra-ui/react';
import { useState } from 'react';

import { MEDIUM_URL } from '@/components/live/articles';
import { POSTPONED, type RoadmapItem, roadmapData } from '@/data/roadmap';
import { deliveredByYear, STATUS_STYLE, upNext } from '@/lib/roadmap';

function Status({ item }: { item: RoadmapItem }) {
    const { label, color } = STATUS_STYLE[item.status];

    return (
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: '600', color }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: color }} />
            {label}
        </span>
    );
}

function Title({ item }: { item: RoadmapItem }) {
    return item.version && item.version !== 'TBA' ? <>{item.title} <span className="mono" style={{ color: 'var(--faint)', fontWeight: 500 }}>{item.version}</span></> : <>{item.title}</>;
}

/** Item ids start with their year ("2026-explorer"). */
function when(item: RoadmapItem): string {
    const year = item.id.slice(0, 4);

    return item.status === POSTPONED ? '' : [item.quarter, year].filter(Boolean).join(' ');
}

const CLOSE_ICON = 'M6 6l12 12M18 6L6 18';

/**
 * The details of one item: description, details, what it includes and the way to our
 * articles on Medium (no per-item links, they are too hard to keep current). Rendered in
 * place, like the phone menu, so it keeps the page's styles.
 */
function ItemDialog({ item, onClose }: { item: RoadmapItem | null; onClose: () => void }) {
    return (
        <Dialog.Root open={item !== null} onOpenChange={(e) => { if (!e.open) onClose(); }} placement="center" lazyMount unmountOnExit>
            <Dialog.Backdrop className="rd-back" />
            <Dialog.Positioner className="rd-pos">
                <Dialog.Content className="rd">
                    {item && (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
                                <span style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                                        <Status item={item} />
                                        {when(item) && <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{when(item)}</span>}
                                    </span>
                                    <Dialog.Title className="rd-title"><Title item={item} /></Dialog.Title>
                                </span>
                                <Dialog.CloseTrigger asChild>
                                    <button type="button" className="rd-x" aria-label="Close">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d={CLOSE_ICON} /></svg>
                                    </button>
                                </Dialog.CloseTrigger>
                            </div>
                            {item.description && <Dialog.Description className="rd-lead">{item.description}</Dialog.Description>}
                            {item.details?.map((detail) => <p key={detail} className="rd-p">{detail}</p>)}
                            {item.children && item.children.length > 0 && (
                                <div>
                                    <strong style={{ fontSize: '14px' }}>{"What's in it"}</strong>
                                    <ul className="rd-p" style={{ margin: '6px 0 0', padding: '0 0 0 18px' }}>
                                        {item.children.map((child) => <li key={child}>{child}</li>)}
                                    </ul>
                                </div>
                            )}
                            <a href={MEDIUM_URL} target="_blank" rel="noopener" style={{ fontSize: '14px', fontWeight: '600', textDecoration: 'none', paddingTop: '14px', borderTop: '1px solid var(--div)' }}>Read our updates on Medium ↗</a>
                        </>
                    )}
                </Dialog.Content>
            </Dialog.Positioner>
        </Dialog.Root>
    );
}

/** The item's title as the button that opens its details; it covers the whole row or card. */
function OpenButton({ item, onOpen }: { item: RoadmapItem; onOpen: (item: RoadmapItem) => void }) {
    return <button type="button" className="open" aria-haspopup="dialog" onClick={() => onOpen(item)}>{item.title}</button>;
}

/** Home: the first four "Up next" items. */
export function RoadmapStrip() {
    return (
        <ul style={{ listStyle: 'none', margin: '0', padding: '0' }}>
            {upNext(roadmapData).slice(0, 4).map((item) => (
                <li key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '12px 0', borderTop: '1px solid var(--div)' }}>
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '0' }}>
                        <span style={{ fontSize: '14px', fontWeight: '600', lineHeight: '1.35' }}><Title item={item} /></span>
                        <Status item={item} />
                    </span>
                    <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{item.quarter ?? ''}</span>
                </li>
            ))}
        </ul>
    );
}

/** Roadmap page: every item not delivered yet, with its summary. Postponed items are dimmed. Each card opens its details. */
export function UpNextGrid() {
    const [open, setOpen] = useState<RoadmapItem | null>(null);

    return (
        <>
            <div className="g3">
                {upNext(roadmapData).map((item) => (
                    <div key={item.id} className="card item" style={item.status === POSTPONED ? { opacity: '.6' } : undefined}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                            <Status item={item} />
                            <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{item.status === POSTPONED ? '' : (item.quarter ?? '')}</span>
                        </div>
                        <strong style={{ fontSize: '15px', lineHeight: '1.4' }}>
                            <OpenButton item={item} onOpen={setOpen} />
                            {item.version && item.version !== 'TBA' && <> <span className="mono" style={{ color: 'var(--faint)', fontWeight: 500 }}>{item.version}</span></>}
                        </strong>
                        {item.description && <p className="sum">{item.description}</p>}
                        {item.children && item.children.length > 0 && (
                            <ul style={{ margin: '0', padding: '0 0 0 18px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6' }}>
                                {item.children.map((child) => <li key={child}>{child}</li>)}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <ItemDialog item={open} onClose={() => setOpen(null)} />
        </>
    );
}

/** Roadmap page: delivered items per year, newest first. Each row opens its details. */
export function DeliveredYears() {
    const [open, setOpen] = useState<RoadmapItem | null>(null);

    return (
        <>
            {deliveredByYear(roadmapData).map(({ year, items }) => (
                <section key={year} id={`y${year}`} className="split" style={{ display: 'grid', gridTemplateColumns: '160px minmax(0,1fr)', gap: '24px', alignItems: 'start', padding: '28px 0', borderTop: '1px solid var(--div)' }}>
                    <div>
                        <strong style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-0.02em' }}>{year}</strong>
                        <div style={{ fontSize: '13px', color: 'var(--faint)', marginTop: '4px' }}>{items.length} delivered</div>
                    </div>
                    <ul className="card" style={{ listStyle: 'none', margin: '0', padding: '0', overflow: 'hidden' }}>
                        {items.map((item) => (
                            <li key={item.id} className="ritem" style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1fr) auto auto', gap: '12px', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid var(--div)' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: STATUS_STYLE[item.status].color }} />
                                <span style={{ fontSize: '15px' }}><OpenButton item={item} onOpen={setOpen} /></span>
                                {item.version ? <span className="chip mono">{item.version}</span> : <span />}
                                <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)', width: '24px', textAlign: 'right' }}>{item.quarter ?? ''}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
            <ItemDialog item={open} onClose={() => setOpen(null)} />
        </>
    );
}
