const ADMIN_STATUS_ENDPOINT = '/api/auth/admin-status';

export async function getAdminStatus(): Promise<boolean> {
  try {
    const response = await fetch(ADMIN_STATUS_ENDPOINT, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      return false;
    }

    const data = (await response.json()) as { isAdmin?: boolean };
    return Boolean(data.isAdmin);
  } catch {
    return false;
  }
}
