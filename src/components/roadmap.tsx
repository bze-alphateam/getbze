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

/** Roadmap page: every item not delivered yet. Postponed items are dimmed. */
export function UpNextGrid() {
    return (
        <div className="g3">
            {upNext(roadmapData).map((item) => (
                <div key={item.id} className="card item" style={item.status === POSTPONED ? { opacity: '.6' } : undefined}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                        <Status item={item} />
                        <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)' }}>{item.status === POSTPONED ? '' : (item.quarter ?? '')}</span>
                    </div>
                    <strong style={{ fontSize: '15px', lineHeight: '1.4' }}><Title item={item} /></strong>
                    {item.children && item.children.length > 0 && (
                        <ul style={{ margin: '0', padding: '0 0 0 18px', fontSize: '13px', color: 'var(--muted)', lineHeight: '1.6' }}>
                            {item.children.map((child) => <li key={child}>{child}</li>)}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}

/** Roadmap page: delivered items per year, newest first. */
export function DeliveredYears() {
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
                            <li key={item.id} style={{ display: 'grid', gridTemplateColumns: '28px minmax(0,1fr) auto auto', gap: '12px', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid var(--div)' }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: STATUS_STYLE[item.status].color }} />
                                <span style={{ fontSize: '15px' }}>{item.link ? <a href={item.link} target="_blank" rel="noopener" style={{ color: 'var(--text)', textDecoration: 'none' }}>{item.title}</a> : item.title}</span>
                                {item.version ? <span className="chip mono">{item.version}</span> : <span />}
                                <span className="mono" style={{ fontSize: '12px', color: 'var(--faint)', width: '24px', textAlign: 'right' }}>{item.quarter ?? ''}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </>
    );
}
