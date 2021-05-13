import { AuthToken } from './auth-token';
export interface JwtConfig {
    setToken: (value: AuthToken) => void | Promise<void | null>;
    getToken: () => AuthToken | null | Promise<AuthToken | null>;
    headerName?: string;
    authScheme?: string;
    whitelistedDomains?: Array<string | RegExp>;
    blacklistedRoutes?: Array<string | RegExp>;
    throwNoTokenError?: boolean;
    skipWhenExpired?: boolean;
}
