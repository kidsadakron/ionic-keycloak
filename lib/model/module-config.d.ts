import { Provider } from '@angular/core';
import { KcConfig } from './kc-config';
import { DeepLinkConfig } from './deep-link-config';
import { JwtConfig } from './jwt-config';
export declare class ModuleConfig {
    kcOptionsProvider?: Provider;
    jwtConfigProvider?: Provider;
    keycloakConfig?: KcConfig;
    deepLinksConfig: DeepLinkConfig;
    jwtModuleOptions?: JwtConfig;
}
