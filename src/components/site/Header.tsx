import Link from 'next/link';
import { MAIN_NAV, type PageKey } from './nav';
import { PhoneMenu } from './PhoneMenu';

/** The site header: logo, main menu and "Open the apps"; a menu button below 900px. */
export function Header({ page }: { page: PageKey }) {
    return (
        <header style={{ position: 'relative', borderBottom: '1px solid var(--div)' }}>
            <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', minHeight: '72px', flexWrap: 'wrap' }}>
                <Link href="/" style={{ display: 'flex', alignItems: 'center', padding: '8px 0' }}>
                    <img src="/brand/beezee-light.svg" alt="BeeZee" width={133} height={30} style={{ height: '30px', width: 'auto', display: 'block' }} />
                </Link>
                <nav aria-label="Main" style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    {MAIN_NAV.map((item) => {
                        const current = item.page !== undefined && item.page === page;

                        return (
                            <Link
                                key={item.label}
                                className={current ? 'navl on hide-m' : 'navl hide-m'}
                                href={item.href}
                                aria-current={current ? 'page' : undefined}
                                {...(item.external ? { target: '_blank', rel: 'noopener' } : {})}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link className="btn btn-p" href="/apps/" style={{ height: '40px', padding: '0 18px' }}>Open the apps</Link>
                    <PhoneMenu page={page} />
                </nav>
            </div>
        </header>
    );
}
