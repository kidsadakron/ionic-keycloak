/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { KeycloakAuthService } from './keycloak-auth.service';
import { JWT_GET_AND_SETTER } from '../contant/jwt-injection-token';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './keycloak-auth.service';
export class KcTokenInterceptorService extends JwtInterceptor {
    /**
     * @param {?} config
     * @param {?} keycloakAuthService
     */
    constructor(config, keycloakAuthService) {
        super(config, new JwtHelperService());
        this.config = config;
        this.keycloakAuthService = keycloakAuthService;
        this.initTokenGetter();
    }
    /**
     * @private
     * @return {?}
     */
    initTokenGetter() {
        this.tokenGetter = (/**
         * @return {?}
         */
        () => this.keycloakAuthService.getToken());
    }
}
KcTokenInterceptorService.ɵfac = function KcTokenInterceptorService_Factory(t) { return new (t || KcTokenInterceptorService)(ɵngcc0.ɵɵinject(JWT_GET_AND_SETTER), ɵngcc0.ɵɵinject(ɵngcc1.KeycloakAuthService)); };
KcTokenInterceptorService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KcTokenInterceptorService, factory: KcTokenInterceptorService.ɵfac });
/** @nocollapse */
KcTokenInterceptorService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] },
    { type: KeycloakAuthService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KcTokenInterceptorService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [JWT_GET_AND_SETTER]
            }] }, { type: ɵngcc1.KeycloakAuthService }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    KcTokenInterceptorService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    KcTokenInterceptorService.prototype.keycloakAuthService;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2MtdG9rZW4taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiQGNtb3Rpb24vaW9uaWMta2V5Y2xvYWstYXV0aC9saWIvc2VydmljZS9rYy10b2tlbi1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsTUFBTSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsY0FBYyxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDcEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7OztBQUdsRSxNQUFNLE9BQU8seUJBQTBCLFNBQVEsY0FBYztBQUM3RDtBQUNPO0FBQ1U7QUFBc0M7QUFDbkQsSUFGRixZQUNzQyxNQUFpQixFQUM3QyxtQkFBd0M7QUFDakQsUUFDQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLFFBSndDLFdBQU0sR0FBTixNQUFNLENBQVc7QUFBQyxRQUM5Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0FBQ3BELFFBRUksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0FBQzNCLElBQUUsQ0FBQztBQUNIO0FBQ087QUFBZ0I7QUFDWDtBQUFRLElBRFYsZUFBZTtBQUN6QixRQUFJLElBQUksQ0FBQyxXQUFXO0FBQVE7QUFBdUI7QUFBWSxRQUF4QyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLENBQUEsQ0FBQztBQUNqRSxJQUFFLENBQUM7QUFDSDtxREFkQyxVQUFVOzJJQUNUO0FBQUM7QUFBbUI7QUFFZCw0Q0FDSCxNQUFNLFNBQUMsa0JBQWtCO0FBQVMsWUFSL0IsbUJBQW1CO0FBQUc7Ozs7Ozt3RUFBRTtBQUFDO0FBQWE7QUFBUTtBQUM1QztBQUFnQjtBQUFRLElBTzlCLDJDQUFxRDtBQUFDO0FBQ25EO0FBQWlCO0FBQWdCO0FBQVEsSUFBNUMsd0RBQWdEO0FBQ3BEO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKd3RIZWxwZXJTZXJ2aWNlLCBKd3RJbnRlcmNlcHRvcn0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcbmltcG9ydCB7S2V5Y2xvYWtBdXRoU2VydmljZX0gZnJvbSAnLi9rZXljbG9hay1hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHtKd3RDb25maWd9IGZyb20gJy4uL21vZGVsL2p3dC1jb25maWcnO1xuaW1wb3J0IHtKV1RfR0VUX0FORF9TRVRURVJ9IGZyb20gJy4uL2NvbnRhbnQvand0LWluamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLY1Rva2VuSW50ZXJjZXB0b3JTZXJ2aWNlIGV4dGVuZHMgSnd0SW50ZXJjZXB0b3Ige1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoSldUX0dFVF9BTkRfU0VUVEVSKSBwcml2YXRlIGNvbmZpZzogSnd0Q29uZmlnLFxuICAgIHByaXZhdGUga2V5Y2xvYWtBdXRoU2VydmljZTogS2V5Y2xvYWtBdXRoU2VydmljZVxuICApIHtcbiAgICBzdXBlcihjb25maWcsIG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCkpO1xuICAgIHRoaXMuaW5pdFRva2VuR2V0dGVyKCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRUb2tlbkdldHRlcigpIHtcbiAgICB0aGlzLnRva2VuR2V0dGVyID0gKCkgPT4gdGhpcy5rZXljbG9ha0F1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gIH1cblxufVxuIl19