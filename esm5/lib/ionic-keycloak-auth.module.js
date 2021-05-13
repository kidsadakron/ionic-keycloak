/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { DeepLinkService } from './service/deep-link.service';
import { KeycloakAuthService } from './service/keycloak-auth.service';
import { StorageService } from './service/storage.service';
import { KcTokenInterceptorService } from './service/kc-token-interceptor.service';
import { ModuleConfig } from './model/module-config';
import { JWT_GET_AND_SETTER } from './contant/jwt-injection-token';
import { KEYCLOAK_OPTIONS } from './contant/kc-injection-token';
import { DEEP_LINKING_OPTIONS } from './contant/deep-linking-config-injection-token';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ionic/angular';
import * as ɵngcc2 from './service/keycloak-auth.service';
import * as ɵngcc3 from './service/deep-link.service';
var IonicKeycloakAuthModule = /** @class */ (function () {
    function IonicKeycloakAuthModule(platform, authService, deepLinkService, parentModule) {
        var _this = this;
        this.platform = platform;
        this.authService = authService;
        this.deepLinkService = deepLinkService;
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
        this.platform
            .ready()
            .then((/**
         * @return {?}
         */
        function () { return _this.authService.init(); }))
            .then((/**
         * @return {?}
         */
        function () { return _this.deepLinkService.init(); }))
            .catch((/**
         * @param {?=} err
         * @return {?}
         */
        function (err) {
            if (err === void 0) { err = {}; }
            /** @type {?} */
            var context = { messageError: 'Ionic Keycloak Error: could not initialize the app' };
            Object.assign(err, { context: context });
            throw err;
        }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    IonicKeycloakAuthModule.forRoot = /**
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = new ModuleConfig(); }
        return {
            ngModule: IonicKeycloakAuthModule,
            providers: [
                Deeplinks,
                BrowserTab,
                InAppBrowser,
                NativeStorage,
                HttpClientModule,
                config.kcOptionsProvider || { provide: KEYCLOAK_OPTIONS, useValue: config.keycloakConfig },
                config.jwtConfigProvider || { provide: JWT_GET_AND_SETTER, useValue: config.jwtModuleOptions },
                { provide: DEEP_LINKING_OPTIONS, useValue: config.deepLinksConfig },
                StorageService,
                DeepLinkService,
                KeycloakAuthService,
                JwtHelperService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: KcTokenInterceptorService,
                    multi: true
                },
            ]
        };
    };
    /** @nocollapse */
    IonicKeycloakAuthModule.ctorParameters = function () { return [
        { type: Platform },
        { type: KeycloakAuthService },
        { type: DeepLinkService },
        { type: IonicKeycloakAuthModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
IonicKeycloakAuthModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: IonicKeycloakAuthModule });
IonicKeycloakAuthModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function IonicKeycloakAuthModule_Factory(t) { return new (t || IonicKeycloakAuthModule)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(ɵngcc2.KeycloakAuthService), ɵngcc0.ɵɵinject(ɵngcc3.DeepLinkService), ɵngcc0.ɵɵinject(IonicKeycloakAuthModule, 12)); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IonicKeycloakAuthModule, [{
        type: NgModule
    }], function () { return [{ type: ɵngcc1.Platform }, { type: ɵngcc2.KeycloakAuthService }, { type: ɵngcc3.DeepLinkService }, { type: IonicKeycloakAuthModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
    return IonicKeycloakAuthModule;
}());
export { IonicKeycloakAuthModule };
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonicKeycloakAuthModule.prototype.platform;
    /**
     * @type {?}
     * @private
     */
    IonicKeycloakAuthModule.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    IonicKeycloakAuthModule.prototype.deepLinkService;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uaWMta2V5Y2xvYWstYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VzIjpbIkBjbW90aW9uL2lvbmljLWtleWNsb2FrLWF1dGgvbGliL2lvbmljLWtleWNsb2FrLWF1dGgubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQXNCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDL0QsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFDOUQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzVELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUNqRixPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDakUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sK0NBQStDLENBQUM7Ozs7O0FBRW5G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O0FBQWlCO0FBQWdCO0FBQ3RDLElBREUsa0RBQXdDO0FBQUM7QUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7UGxhdGZvcm19IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7TmF0aXZlU3RvcmFnZX0gZnJvbSAnQGlvbmljLW5hdGl2ZS9uYXRpdmUtc3RvcmFnZS9uZ3gnO1xuaW1wb3J0IHtCcm93c2VyVGFifSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jyb3dzZXItdGFiL25neCc7XG5pbXBvcnQge0p3dEhlbHBlclNlcnZpY2V9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQge0hUVFBfSU5URVJDRVBUT1JTLCBIdHRwQ2xpZW50TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0RlZXBsaW5rc30gZnJvbSAnQGlvbmljLW5hdGl2ZS9kZWVwbGlua3Mvbmd4JztcbmltcG9ydCB7SW5BcHBCcm93c2VyfSBmcm9tICdAaW9uaWMtbmF0aXZlL2luLWFwcC1icm93c2VyL25neCc7XG5pbXBvcnQge0RlZXBMaW5rU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2RlZXAtbGluay5zZXJ2aWNlJztcbmltcG9ydCB7S2V5Y2xvYWtBdXRoU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2tleWNsb2FrLWF1dGguc2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2Uvc3RvcmFnZS5zZXJ2aWNlJztcbmltcG9ydCB7S2NUb2tlbkludGVyY2VwdG9yU2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlL2tjLXRva2VuLWludGVyY2VwdG9yLnNlcnZpY2UnO1xuaW1wb3J0IHtNb2R1bGVDb25maWd9IGZyb20gJy4vbW9kZWwvbW9kdWxlLWNvbmZpZyc7XG5pbXBvcnQge0pXVF9HRVRfQU5EX1NFVFRFUn0gZnJvbSAnLi9jb250YW50L2p3dC1pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHtLRVlDTE9BS19PUFRJT05TfSBmcm9tICcuL2NvbnRhbnQva2MtaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7REVFUF9MSU5LSU5HX09QVElPTlN9IGZyb20gJy4vY29udGFudC9kZWVwLWxpbmtpbmctY29uZmlnLWluamVjdGlvbi10b2tlbic7XG5cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgSW9uaWNLZXljbG9ha0F1dGhNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEtleWNsb2FrQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBkZWVwTGlua1NlcnZpY2U6IERlZXBMaW5rU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IElvbmljS2V5Y2xvYWtBdXRoTW9kdWxlXG4gICkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSnd0TW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkLiBJdCBzaG91bGQgb25seSBiZSBpbXBvcnRlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXFwncyBtYWluIG1vZHVsZS4nKTtcbiAgICB9XG4gICAgdGhpcy5wbGF0Zm9ybVxuICAgICAgLnJlYWR5KClcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuYXV0aFNlcnZpY2UuaW5pdCgpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5kZWVwTGlua1NlcnZpY2UuaW5pdCgpKVxuICAgICAgLmNhdGNoKChlcnIgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0ge21lc3NhZ2VFcnJvcjogJ0lvbmljIEtleWNsb2FrIEVycm9yOiBjb3VsZCBub3QgaW5pdGlhbGl6ZSB0aGUgYXBwJ307XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZXJyLCB7Y29udGV4dH0pO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdChjb25maWcgPSBuZXcgTW9kdWxlQ29uZmlnKCkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IElvbmljS2V5Y2xvYWtBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIERlZXBsaW5rcyxcbiAgICAgICAgQnJvd3NlclRhYixcbiAgICAgICAgSW5BcHBCcm93c2VyLFxuICAgICAgICBOYXRpdmVTdG9yYWdlLFxuICAgICAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBjb25maWcua2NPcHRpb25zUHJvdmlkZXIgfHwge3Byb3ZpZGU6IEtFWUNMT0FLX09QVElPTlMsIHVzZVZhbHVlOiBjb25maWcua2V5Y2xvYWtDb25maWd9LFxuICAgICAgICBjb25maWcuand0Q29uZmlnUHJvdmlkZXIgfHwge3Byb3ZpZGU6IEpXVF9HRVRfQU5EX1NFVFRFUiwgdXNlVmFsdWU6IGNvbmZpZy5qd3RNb2R1bGVPcHRpb25zfSxcbiAgICAgICAge3Byb3ZpZGU6IERFRVBfTElOS0lOR19PUFRJT05TLCB1c2VWYWx1ZTogY29uZmlnLmRlZXBMaW5rc0NvbmZpZ30sXG4gICAgICAgIFN0b3JhZ2VTZXJ2aWNlLFxuICAgICAgICBEZWVwTGlua1NlcnZpY2UsXG4gICAgICAgIEtleWNsb2FrQXV0aFNlcnZpY2UsXG4gICAgICAgIEp3dEhlbHBlclNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICAgICAgICB1c2VDbGFzczogS2NUb2tlbkludGVyY2VwdG9yU2VydmljZSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgXVxuICAgIH07XG4gIH1cblxufVxuIl19