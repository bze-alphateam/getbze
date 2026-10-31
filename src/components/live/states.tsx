import type { CSSProperties, ReactNode } from 'react';

/** A shimmer block in the shape of the content it stands in for (States board). */
export function Sk({ w, h, r = 8, style }: { w: number | string; h: number; r?: number; style?: CSSProperties }) {
    return <span className="sk" aria-hidden="true" style={{ width: typeof w === 'number' ? `${w}px` : w, height: `${h}px`, borderRadius: `${r}px`, ...style }} />;
}

/** The one quiet line under a section whose live data failed. Never red, never a box. */
export function FailLine({ children, onRetry, as = 'p', style }: { children: ReactNode; onRetry: () => void; as?: 'p' | 'span'; style?: CSSProperties }) {
    const Tag = as;

    return (
        <Tag className="fail" role="status" style={style}>
            {children}{' '}
            <button type="button" className="retry" onClick={onRetry}>Try again</button>
        </Tag>
    );
}
