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
var StorageService = /** @class */ (function () {
    function StorageService(config) {
        this.config = config;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    StorageService.prototype.setToken = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.config.setToken(value)];
            });
        });
    };
    /**
     * @return {?}
     */
    StorageService.prototype.getToken = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this.config.getToken()];
            });
        });
    };
    /** @nocollapse */
    StorageService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] }
    ]; };
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(ɵngcc0.ɵɵinject(JWT_GET_AND_SETTER)); };
StorageService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: StorageService, factory: function (t) { return StorageService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StorageService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [JWT_GET_AND_SETTER]
            }] }]; }, null); })();
    return StorageService;
}());
export { StorageService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorageService.prototype.config;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJAY21vdGlvbi9pb25pYy1rZXljbG9hay1hdXRoL2xpYi9zZXJ2aWNlL3N0b3JhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR2pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOztBQUVsRTtBQUdLLElBQUgsd0JBQ3NDLE1BQWlCO0FBQ3ZELFFBRHNDLFdBQU0sR0FBTixNQUFNLENBQVc7QUFBQyxJQUV4RCxDQUFDO0FBQ0g7QUFDTztBQUF3QjtBQUFtQjtBQUFRLElBQTNDLGlDQUFRO0FBQU87QUFBd0I7QUFDeEM7QUFBUSxJQURwQixVQUFzQixLQUFnQjtBQUFJO0FBSW5DO0FBQ2EsZ0JBSmxCLHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFDO0FBQ3ZDO0FBRVc7QUFBWSxLQUZwQjtBQUVIO0FBQVE7QUFBbUI7QUFBUSxJQUFwQixpQ0FBUTtBQUFPO0FBQzdCO0FBQVEsSUFEUDtBQUFjO0FBRWQ7QUFHc0QsZ0JBSnBELHNCQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLEVBQUM7QUFDbEM7QUFHUztBQUFZLEtBSGxCLENBYkc7QUFBQzsyQkFETixVQUFVLHJDQUVYO0FBRTJDLGdEQUF0QyxNQUFNLFNBQUMsa0JBQWtCO0FBQVE7Ozs7Ozs7O2tDQUFTO0FBQUMsSUFZaEQscUJBQUM7QUFDQSxDQURBLEFBaEJELElBZ0JDO0FBQ0QsU0FoQmEsY0FBYztBQUUzQjtBQUFhO0FBQ1A7QUFBaUI7QUFBZ0I7QUFBUSxJQUEzQyxnQ0FBcUQ7QUFBQztBQUN6RCIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFRoaXMgQ29kZSBpcyB1bmRlciBsaWNlbnNlIGFuZCBiZWxvbmdzIHRvIENvZGluZyBNb3Rpb25cbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0p3dENvbmZpZ30gZnJvbSAnLi4vbW9kZWwvand0LWNvbmZpZyc7XG5pbXBvcnQge0F1dGhUb2tlbn0gZnJvbSAnLi4vbW9kZWwvYXV0aC10b2tlbic7XG5pbXBvcnQge0pXVF9HRVRfQU5EX1NFVFRFUn0gZnJvbSAnLi4vY29udGFudC9qd3QtaW5qZWN0aW9uLXRva2VuJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JhZ2VTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KEpXVF9HRVRfQU5EX1NFVFRFUikgcHJpdmF0ZSBjb25maWc6IEp3dENvbmZpZyxcbiAgKSB7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgc2V0VG9rZW4odmFsdWU6IEF1dGhUb2tlbik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZy5zZXRUb2tlbih2YWx1ZSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW4oKTogUHJvbWlzZTxBdXRoVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuZ2V0VG9rZW4oKTtcbiAgfVxuXG59XG4iXX0=