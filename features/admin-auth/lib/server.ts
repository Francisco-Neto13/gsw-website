import 'server-only';

type AdminUser = {
  id?: string | null;
  email?: string | null;
  app_metadata?: Record<string, unknown> | null;
  user_metadata?: Record<string, unknown> | null;
};

function parseCsv(raw?: string): string[] {
  if (!raw) return [];
  return raw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function getConfiguredAdminIds(): string[] {
  return parseCsv(process.env.ADMIN_USER_IDS);
}

function getConfiguredAdminEmails(): string[] {
  return parseCsv(process.env.ADMIN_EMAILS).map((email) => email.toLowerCase());
}

function hasAdminRole(user?: AdminUser | null): boolean {
  const appRole = user?.app_metadata?.role;
  const userRole = user?.user_metadata?.role;
  return appRole === 'admin' || userRole === 'admin';
}

export function isAuthorizedAdmin(user?: AdminUser | null): boolean {
  if (!user) return false;

  if (hasAdminRole(user)) {
    return true;
  }

  const adminIds = getConfiguredAdminIds();
  if (user.id && adminIds.includes(user.id)) {
    return true;
  }

  const adminEmails = getConfiguredAdminEmails();
  if (user.email && adminEmails.includes(user.email.toLowerCase())) {
    return true;
  }

  return false;
}
