import type { ProgramLink } from '@/lib/program';

/** The Founding Program's "Apply now": the form in a new tab, or a disabled "Coming soon". */
export function ProgramApply({ link }: { link: ProgramLink }) {
    if (link.state === 'open') {
        return <a className="btn btn-p" href={link.url} target="_blank" rel="noopener">Apply now ↗</a>;
    }

    return <button type="button" className="btn btn-p" disabled>Coming soon</button>;
}
