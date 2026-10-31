import { parseProgramLink } from '@/lib/program';

// Values the design left open. Fill them in before the redesign goes live.

/** The Founding Program's application link (see lib/program.ts for the three states). */
export const PROGRAM_LINK = parseProgramLink(process.env.NEXT_PUBLIC_FOUNDING_PROGRAM_URL);
/** The published audit report(s) behind "Read the reports". */
export const AUDIT_REPORTS_URL = '#security';
/** The address for private vulnerability reports. */
export const SECURITY_EMAIL = '[security email]';
