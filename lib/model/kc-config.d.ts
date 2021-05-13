import { KeycloakJsonStructure } from './keycloak-json-structure';
export declare type FetchKeycloakJSON = () => KeycloakJsonStructure | Promise<KeycloakJsonStructure>;
export declare class KcConfig {
    /**
     * The same as the contain of the keycloak.json
     * Example: jsonConfig: () => require('/path/to/keycloak.json')
     */
    jsonConfig?: FetchKeycloakJSON;
    /**
     * Example: scope='openid email offline_access address profile', the value would be
     * 'openid email offline_access address profile' here
     */
    scope?: string;
}
