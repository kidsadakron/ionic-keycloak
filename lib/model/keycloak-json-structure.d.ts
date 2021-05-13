export interface KeycloakJsonStructure {
    realm?: string;
    'auth-server-url'?: string;
    'ssl-required'?: string;
    resource?: string;
    clientId?: string;
    url?: string;
    credentials?: null | {
        secret: string;
    };
    'confidential-port'?: number;
    [key: string]: any;
}
