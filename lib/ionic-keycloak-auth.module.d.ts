import { ModuleWithProviders } from '@angular/core';
import { Platform } from '@ionic/angular';
import { DeepLinkService } from './service/deep-link.service';
import { KeycloakAuthService } from './service/keycloak-auth.service';
import { ModuleConfig } from './model/module-config';
import * as ɵngcc0 from '@angular/core';
export declare class IonicKeycloakAuthModule {
    private platform;
    private authService;
    private deepLinkService;
    constructor(platform: Platform, authService: KeycloakAuthService, deepLinkService: DeepLinkService, parentModule: IonicKeycloakAuthModule);
    static forRoot(config?: ModuleConfig): ModuleWithProviders<IonicKeycloakAuthModule>;
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<IonicKeycloakAuthModule, never, never, never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<IonicKeycloakAuthModule>;
}

//# sourceMappingURL=ionic-keycloak-auth.module.d.ts.map