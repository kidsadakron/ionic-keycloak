/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { Inject, Injectable } from '@angular/core';
import { JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { KeycloakAuthService } from './keycloak-auth.service';
import { JWT_GET_AND_SETTER } from '../contant/jwt-injection-token';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from './keycloak-auth.service';
var KcTokenInterceptorService = /** @class */ (function (_super) {
    tslib_1.__extends(KcTokenInterceptorService, _super);
    function KcTokenInterceptorService(config, keycloakAuthService) {
        var _this = _super.call(this, config, new JwtHelperService()) || this;
        _this.config = config;
        _this.keycloakAuthService = keycloakAuthService;
        _this.initTokenGetter();
        return _this;
    }
    /**
     * @private
     * @return {?}
     */
    KcTokenInterceptorService.prototype.initTokenGetter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.tokenGetter = (/**
         * @return {?}
         */
        function () { return _this.keycloakAuthService.getToken(); });
    };
    /** @nocollapse */
    KcTokenInterceptorService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] },
        { type: KeycloakAuthService }
    ]; };
KcTokenInterceptorService.ɵfac = function KcTokenInterceptorService_Factory(t) { return new (t || KcTokenInterceptorService)(ɵngcc0.ɵɵinject(JWT_GET_AND_SETTER), ɵngcc0.ɵɵinject(ɵngcc1.KeycloakAuthService)); };
KcTokenInterceptorService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KcTokenInterceptorService, factory: function (t) { return KcTokenInterceptorService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KcTokenInterceptorService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [JWT_GET_AND_SETTER]
            }] }, { type: ɵngcc1.KeycloakAuthService }]; }, null); })();
    return KcTokenInterceptorService;
}(JwtInterceptor));
export { KcTokenInterceptorService };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2MtdG9rZW4taW50ZXJjZXB0b3Iuc2VydmljZS5qcyIsInNvdXJjZXMiOlsiQGNtb3Rpb24vaW9uaWMta2V5Y2xvYWstYXV0aC9saWIvc2VydmljZS9rYy10b2tlbi1pbnRlcmNlcHRvci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBSUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFDLGdCQUFnQixFQUFFLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTVELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFbEU7QUFDcUQsSUFBTixxREFBYztBQUFDLElBRTVELG1DQUNzQyxNQUFpQixFQUM3QyxtQkFBd0M7QUFDakQsUUFIRCxZQUlFLGtCQUFNLE1BQU0sRUFBRSxJQUFJLGdCQUFnQixFQUFFLENBQUMsU0FFdEM7QUFDSCxRQU53QyxZQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsUUFDOUMseUJBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtBQUNwRCxRQUVJLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUMzQjtBQUVpQixJQUZmLENBQUM7QUFDSDtBQUNPO0FBQWdCO0FBQ1g7QUFBUSxJQURWLG1EQUFlO0FBQ3ZCO0FBQWdCO0FBQW1CO0FBQVEsSUFEM0M7QUFBYyxRQUFkLGlCQUVDO0FBQ0gsUUFGSSxJQUFJLENBQUMsV0FBVztBQUFRO0FBQXVCO0FBQVksUUFBeEMsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsRUFBbkMsQ0FBbUMsQ0FBQSxDQUFDO0FBQ2pFLElBQUUsQ0FBQyxDQVpHO0FBQUM7c0NBRE4sVUFBVSxoREFDbUI7QUFHVixnREFBZixNQUFNLFNBQUMsa0JBQWtCO0FBQVMsZ0JBUi9CLG1CQUFtQjtBQUFHOzs7Ozs7Ozt3RUFBUztBQUFDLElBbUJ4QyxnQ0FBQztBQUNBLENBREEsQUFmRCxDQUMrQyxjQUFjLEdBYzVEO0FBQ0QsU0FmYSx5QkFBeUI7QUFBSTtBQUFhO0FBQVE7QUFHL0Q7QUFBZ0I7QUFBUSxJQUFwQiwyQ0FBcUQ7QUFBQztBQUNuRDtBQUFpQjtBQUFnQjtBQUFRLElBQTVDLHdEQUFnRDtBQUNwRDtBQUFFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIENvcHlyaWdodCAoYykgMjAxOS4gVGhpcyBDb2RlIGlzIHVuZGVyIGxpY2Vuc2UgYW5kIGJlbG9uZ3MgdG8gQ29kaW5nIE1vdGlvblxuICovXG5cbmltcG9ydCB7SW5qZWN0LCBJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Snd0SGVscGVyU2VydmljZSwgSnd0SW50ZXJjZXB0b3J9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQge0tleWNsb2FrQXV0aFNlcnZpY2V9IGZyb20gJy4va2V5Y2xvYWstYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7Snd0Q29uZmlnfSBmcm9tICcuLi9tb2RlbC9qd3QtY29uZmlnJztcbmltcG9ydCB7SldUX0dFVF9BTkRfU0VUVEVSfSBmcm9tICcuLi9jb250YW50L2p3dC1pbmplY3Rpb24tdG9rZW4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgS2NUb2tlbkludGVyY2VwdG9yU2VydmljZSBleHRlbmRzIEp3dEludGVyY2VwdG9yIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEpXVF9HRVRfQU5EX1NFVFRFUikgcHJpdmF0ZSBjb25maWc6IEp3dENvbmZpZyxcbiAgICBwcml2YXRlIGtleWNsb2FrQXV0aFNlcnZpY2U6IEtleWNsb2FrQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoY29uZmlnLCBuZXcgSnd0SGVscGVyU2VydmljZSgpKTtcbiAgICB0aGlzLmluaXRUb2tlbkdldHRlcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0VG9rZW5HZXR0ZXIoKSB7XG4gICAgdGhpcy50b2tlbkdldHRlciA9ICgpID0+IHRoaXMua2V5Y2xvYWtBdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICB9XG5cbn1cbiJdfQ==