import { parseProgramLink } from '@/lib/program';

/** The Founding Program's application link (see lib/program.ts for the three states). */
export const PROGRAM_LINK = parseProgramLink(process.env.NEXT_PUBLIC_FOUNDING_PROGRAM_URL);
/** The published audit report(s) behind "Read the reports". */
export const AUDIT_REPORTS_URL = 'https://github.com/oak-security/audit-reports/tree/main/BeeZee';
/** The address for private vulnerability reports. */
export const SECURITY_EMAIL = 'alphateam@getbze.com';
