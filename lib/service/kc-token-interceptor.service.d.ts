import { JwtInterceptor } from '@auth0/angular-jwt';
import { KeycloakAuthService } from './keycloak-auth.service';
import { JwtConfig } from '../model/jwt-config';
import * as ɵngcc0 from '@angular/core';
export declare class KcTokenInterceptorService extends JwtInterceptor {
    private config;
    private keycloakAuthService;
    constructor(config: JwtConfig, keycloakAuthService: KeycloakAuthService);
    private initTokenGetter;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KcTokenInterceptorService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<KcTokenInterceptorService>;
}

//# sourceMappingURL=kc-token-interceptor.service.d.ts.map