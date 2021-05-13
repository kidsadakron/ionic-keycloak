/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { Inject, Injectable } from '@angular/core';
import { JWT_GET_AND_SETTER } from '../contant/jwt-injection-token';
import * as ɵngcc0 from '@angular/core';
export class StorageService {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setToken(value) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.config.setToken(value);
        });
    }
    /**
     * @return {?}
     */
    getToken() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.config.getToken();
        });
    }
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(ɵngcc0.ɵɵinject(JWT_GET_AND_SETTER)); };
StorageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StorageService, factory: StorageService.ɵfac });
/** @nocollapse */
StorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StorageService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [JWT_GET_AND_SETTER]
            }] }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorageService.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJAY21vdGlvbi9pb25pYy1rZXljbG9hay1hdXRoL2xpYi9zZXJ2aWNlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQUdsRSxNQUFNLE9BQU8sY0FBYztBQUMzQjtBQUNPO0FBQ1U7QUFBUSxJQUR2QixZQUNzQyxNQUFpQjtBQUN2RCxRQURzQyxXQUFNLEdBQU4sTUFBTSxDQUFXO0FBQUMsSUFFeEQsQ0FBQztBQUNIO0FBQ087QUFBd0I7QUFBbUI7QUFBUSxJQUEzQyxRQUFRLENBQUMsS0FBZ0I7QUFBSTtBQUlsQyxZQUhOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDdkMsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNIO0FBQ087QUFBbUI7QUFBUSxJQUFuQixRQUFRO0FBQUs7QUFLcEIsWUFKSixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDbEMsUUFBRSxDQUFDO0FBRUYsS0FGRTtBQUNIOzBDQWZDLFVBQVU7MEdBQ1Q7QUFBQztBQUFtQjtBQUdOLDRDQUFYLE1BQU0sU0FBQyxrQkFBa0I7QUFBUTs7Ozs7O2tDQUFFO0FBQUM7QUFBYTtBQUNuRDtBQUdNO0FBQWdCO0FBQVEsSUFKN0IsZ0NBQXFEO0FBQUM7QUFDekQiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtKd3RDb25maWd9IGZyb20gJy4uL21vZGVsL2p3dC1jb25maWcnO1xuaW1wb3J0IHtBdXRoVG9rZW59IGZyb20gJy4uL21vZGVsL2F1dGgtdG9rZW4nO1xuaW1wb3J0IHtKV1RfR0VUX0FORF9TRVRURVJ9IGZyb20gJy4uL2NvbnRhbnQvand0LWluamVjdGlvbi10b2tlbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yYWdlU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChKV1RfR0VUX0FORF9TRVRURVIpIHByaXZhdGUgY29uZmlnOiBKd3RDb25maWcsXG4gICkge1xuICB9XG5cbiAgcHVibGljIGFzeW5jIHNldFRva2VuKHZhbHVlOiBBdXRoVG9rZW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2V0VG9rZW4odmFsdWUpO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFRva2VuKCk6IFByb21pc2U8QXV0aFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLmdldFRva2VuKCk7XG4gIH1cblxufVxuIl19