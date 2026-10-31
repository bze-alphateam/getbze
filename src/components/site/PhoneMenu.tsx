'use client';

import Link from 'next/link';
import { Drawer } from '@chakra-ui/react';
import { useState } from 'react';

import { MAIN_NAV, type PageKey } from './nav';

const MENU_ICON = 'M4 7h16M4 12h16M4 17h16';
const CLOSE_ICON = 'M6 6l12 12M18 6L6 18';

function Icon({ d }: { d: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d={d} />
        </svg>
    );
}

/**
 * The phone menu (below 900px): full screen over the page, scroll locked, closed by ×,
 * Escape or any link, focus kept inside and returned to the menu button. The drawer is
 * rendered in place (no portal) so it keeps the page's styles.
 */
export function PhoneMenu({ page }: { page: PageKey }) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    return (
        <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="top" size="full">
            <Drawer.Trigger asChild>
                <button type="button" className="menu show-m" aria-label="Open the menu">
                    <Icon d={MENU_ICON} />
                </button>
            </Drawer.Trigger>
            <Drawer.Positioner className="pm-pos">
                <Drawer.Content className="pm" aria-label="Menu">
                    <div aria-hidden="true" className="pm-glow" />
                    <div className="pm-head">
                        <Link href="/" onClick={close}>
                            <img src="/brand/beezee-light.svg" alt="BeeZee" width={124} height={28} style={{ height: '28px', width: 'auto', display: 'block' }} />
                        </Link>
                        <Drawer.CloseTrigger asChild>
                            <button type="button" className="menu" aria-label="Close the menu" style={{ display: 'inline-flex' }}>
                                <Icon d={CLOSE_ICON} />
                            </button>
                        </Drawer.CloseTrigger>
                    </div>
                    <nav aria-label="Main" className="pm-nav">
                        {MAIN_NAV.map((item) => {
                            const current = item.page !== undefined && item.page === page;

                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={close}
                                    className={current ? 'pm-item on' : 'pm-item'}
                                    aria-current={current ? 'page' : undefined}
                                    {...(item.external ? { target: '_blank', rel: 'noopener' } : {})}
                                >
                                    {item.label}
                                    {current
                                        ? <span className="pm-here">{"You're here"}</span>
                                        : <span className="pm-arrow" aria-hidden="true">{item.external ? '↗' : '→'}</span>}
                                </Link>
                            );
                        })}
                    </nav>
                    <div style={{ padding: '24px 16px 0' }}>
                        <Link className="btn btn-p" href="/apps/" onClick={close} style={{ width: '100%', height: '48px' }}>Open the apps</Link>
                    </div>
                </Drawer.Content>
            </Drawer.Positioner>
        </Drawer.Root>
    );
}
