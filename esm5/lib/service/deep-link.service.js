/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController } from '@ionic/angular';
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ionic/angular';
import * as ɵngcc2 from '@ionic-native/deeplinks/ngx';
var DeepLinkService = /** @class */ (function () {
    function DeepLinkService(navController, deepLinks) {
        this.navController = navController;
        this.deepLinks = deepLinks;
        this.paramsSubject = new Subject();
    }
    /**
     * @return {?}
     */
    DeepLinkService.prototype.params = /**
     * @return {?}
     */
    function () {
        return this.paramsSubject
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        function (str) { return !!str; })));
    };
    /**
     * @return {?}
     */
    DeepLinkService.prototype.init = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.deepLinks
            .route({})
            .subscribe((/**
         * @param {?} match
         * @return {?}
         */
        function (match) {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            _this.extractData(match.$link);
        }), (/**
         * @param {?} nomatch
         * @return {?}
         */
        function (nomatch) {
            // nomatch.$link - the full link data
            _this.extractData(nomatch.$link);
        }));
    };
    /**
     * @private
     * @param {?} $link
     * @return {?}
     */
    DeepLinkService.prototype.extractData = /**
     * @private
     * @param {?} $link
     * @return {?}
     */
    function ($link) {
        if ($link) {
            var path = $link.path, fragment = $link.fragment, host = $link.host, scheme = $link.scheme, url = $link.url;
            if (this.containsCode(fragment)) {
                /** @type {?} */
                var extractCode = this.extractCode(fragment);
                this.nextParams(extractCode.code);
            }
        }
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    DeepLinkService.prototype.extractCode = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var hashes = url.slice(url.indexOf('?') + 1).split('&');
        /** @type {?} */
        var paramsObj = hashes.reduce((/**
         * @param {?} params
         * @param {?} hash
         * @return {?}
         */
        function (params, hash) {
            var _a;
            var _b = tslib_1.__read(hash.split('='), 2), key = _b[0], val = _b[1];
            return Object.assign(params, (_a = {}, _a[key] = decodeURIComponent(val), _a));
        }), (/** @type {?} */ ({})));
        if ((!paramsObj) || (!paramsObj.code)) {
            return;
        }
        paramsObj.code = ((/** @type {?} */ (paramsObj.code))).split('#')[0];
        return paramsObj;
    };
    /**
     * @private
     * @param {?} code
     * @return {?}
     */
    DeepLinkService.prototype.nextParams = /**
     * @private
     * @param {?} code
     * @return {?}
     */
    function (code) {
        this.paramsSubject.next(code);
    };
    /**
     * @private
     * @param {?} fragment
     * @return {?}
     */
    DeepLinkService.prototype.containsCode = /**
     * @private
     * @param {?} fragment
     * @return {?}
     */
    function (fragment) {
        if (!fragment) {
            return false;
        }
        return fragment.indexOf('code') > -1;
    };
    /** @nocollapse */
    DeepLinkService.ctorParameters = function () { return [
        { type: NavController },
        { type: Deeplinks }
    ]; };
DeepLinkService.ɵfac = function DeepLinkService_Factory(t) { return new (t || DeepLinkService)(ɵngcc0.ɵɵinject(ɵngcc1.NavController), ɵngcc0.ɵɵinject(ɵngcc2.Deeplinks)); };
DeepLinkService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DeepLinkService, factory: function (t) { return DeepLinkService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeepLinkService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.NavController }, { type: ɵngcc2.Deeplinks }]; }, null); })();
    return DeepLinkService;
}());
export { DeepLinkService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DeepLinkService.prototype.paramsSubject;
    /**
     * @type {?}
     * @private
     */
    DeepLinkService.prototype.navController;
    /**
     * @type {?}
     * @private
     */
    DeepLinkService.prototype.deepLinks;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIkBjbW90aW9uL2lvbmljLWtleWNsb2FrLWF1dGgvbGliL3NlcnZpY2UvZGVlcC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RDLE9BQU8sRUFBZ0IsU0FBUyxFQUFDLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRzdDO0FBR0ssSUFFSCx5QkFBb0IsYUFBNEIsRUFDNUIsU0FBb0I7QUFDMUMsUUFGc0Isa0JBQWEsR0FBYixhQUFhLENBQWU7QUFBQyxRQUM3QixjQUFTLEdBQVQsU0FBUyxDQUFXO0FBQUMsUUFIakMsa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO0FBQ2hELElBR0UsQ0FBQztBQUNIO0FBQ087QUFDTTtBQUFRLElBRG5CLGdDQUFNO0FBQ047QUFBbUI7QUFBUSxJQUQzQjtBQUNDLFFBQUMsT0FBTyxJQUFJLENBQUMsYUFBYTtBQUM3QixhQUFPLElBQUksQ0FBQyxNQUFNO0FBQU07QUFHZDtBQUVQO0FBQVksUUFMSSxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEVBQUwsQ0FBSyxFQUFDLENBQUMsQ0FBQztBQUNsQyxJQUFFLENBQUM7QUFFSDtBQUFRO0FBQ1E7QUFDWCxJQUZILDhCQUFJO0FBQ0o7QUFDQTtBQUFRLElBRlI7QUFDRyxRQURILGlCQWVDO0FBQ0gsUUFmSSxJQUFJLENBQUMsU0FBUztBQUNsQixhQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDaEIsYUFBTyxTQUFTO0FBQ1o7QUFBNEI7QUFDYjtBQUFZLFFB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QUFFLENBQUMsQ0E5REc7QUFBQzs0QkFETixVQUFVLHRDQUNtQjtBQUl0QixnQkFSQSxhQUFhO0FBQUksZ0JBREYsU0FBUztBQUFHOzs7OzswR0FBUztBQUFDLElBb0U3QyxzQkFBQztBQUNBLENBREEsQUFoRUQsSUFnRUM7QUFDRCxTQWhFYSxlQUFlO0FBRTVCO0FBQWE7QUFBUTtBQUFpQjtBQUVsQztBQUFRLElBRlYsd0NBQThDO0FBQ2hEO0FBQ087QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQyx3Q0FBb0M7QUFBQztBQUM1QztBQUFpQjtBQUFnQjtBQUN0QyxJQURZLG9DQUE0QjtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtEZWVwbGlua01hdGNoLCBEZWVwbGlua3N9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGVlcGxpbmtzL25neCc7XG5pbXBvcnQge05hdkNvbnRyb2xsZXJ9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7S2V5VmFsdWVTdHJ9IGZyb20gJy4uL21vZGVsL2tleS12YWx1ZS1zdHInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVlcExpbmtTZXJ2aWNlIHtcblxuICBwcml2YXRlIHBhcmFtc1N1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZDb250cm9sbGVyOiBOYXZDb250cm9sbGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGRlZXBMaW5rczogRGVlcGxpbmtzKSB7XG4gIH1cblxuICBwYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zU3ViamVjdFxuICAgICAgLnBpcGUoZmlsdGVyKHN0ciA9PiAhIXN0cikpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRlZXBMaW5rc1xuICAgICAgLnJvdXRlKHt9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKG1hdGNoOiBEZWVwbGlua01hdGNoKSA9PiB7XG4gICAgICAgICAgLy8gbWF0Y2guJHJvdXRlIC0gdGhlIHJvdXRlIHdlIG1hdGNoZWQsIHdoaWNoIGlzIHRoZSBtYXRjaGVkIGVudHJ5IGZyb20gdGhlIGFyZ3VtZW50cyB0byByb3V0ZSgpXG4gICAgICAgICAgLy8gbWF0Y2guJGFyZ3MgLSB0aGUgYXJncyBwYXNzZWQgaW4gdGhlIGxpbmtcbiAgICAgICAgICAvLyBtYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGEobWF0Y2guJGxpbmspO1xuICAgICAgICB9LFxuICAgICAgICBub21hdGNoID0+IHtcbiAgICAgICAgICAvLyBub21hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gICAgICAgICAgdGhpcy5leHRyYWN0RGF0YShub21hdGNoLiRsaW5rKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoJGxpbmspIHtcbiAgICBpZiAoJGxpbmspIHtcbiAgICAgIGNvbnN0IHtwYXRoLCBmcmFnbWVudCwgaG9zdCwgc2NoZW1lLCB1cmx9ID0gJGxpbms7XG4gICAgICBpZiAodGhpcy5jb250YWluc0NvZGUoZnJhZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IGV4dHJhY3RDb2RlID0gdGhpcy5leHRyYWN0Q29kZShmcmFnbWVudCk7XG4gICAgICAgIHRoaXMubmV4dFBhcmFtcyhleHRyYWN0Q29kZS5jb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RDb2RlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzaGVzID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgIGNvbnN0IHBhcmFtc09iaiA9IGhhc2hlcy5yZWR1Y2UoKHBhcmFtcywgaGFzaCkgPT4ge1xuICAgICAgY29uc3QgW2tleSwgdmFsXSA9IGhhc2guc3BsaXQoJz0nKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHBhcmFtcywge1trZXldOiBkZWNvZGVVUklDb21wb25lbnQodmFsKX0pO1xuICAgIH0sIHt9IGFzIEtleVZhbHVlU3RyKTtcbiAgICBpZiAoKCFwYXJhbXNPYmopIHx8ICghcGFyYW1zT2JqLmNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmFtc09iai5jb2RlID0gKHBhcmFtc09iai5jb2RlIGFzIHN0cmluZykuc3BsaXQoJyMnKVswXTtcbiAgICByZXR1cm4gcGFyYW1zT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0UGFyYW1zKGNvZGU6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zU3ViamVjdC5uZXh0KGNvZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb250YWluc0NvZGUoZnJhZ21lbnQ6IHN0cmluZykge1xuICAgIGlmICghZnJhZ21lbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50LmluZGV4T2YoJ2NvZGUnKSA+IC0xO1xuICB9XG59XG4iXX0=