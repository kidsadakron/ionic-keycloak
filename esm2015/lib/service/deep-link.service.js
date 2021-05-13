/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class DeepLinkService {
    /**
     * @param {?} navController
     * @param {?} deepLinks
     */
    constructor(navController, deepLinks) {
        this.navController = navController;
        this.deepLinks = deepLinks;
        this.paramsSubject = new Subject();
    }
    /**
     * @return {?}
     */
    params() {
        return this.paramsSubject
            .pipe(filter((/**
         * @param {?} str
         * @return {?}
         */
        str => !!str)));
    }
    /**
     * @return {?}
     */
    init() {
        this.deepLinks
            .route({})
            .subscribe((/**
         * @param {?} match
         * @return {?}
         */
        (match) => {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            this.extractData(match.$link);
        }), (/**
         * @param {?} nomatch
         * @return {?}
         */
        nomatch => {
            // nomatch.$link - the full link data
            this.extractData(nomatch.$link);
        }));
    }
    /**
     * @private
     * @param {?} $link
     * @return {?}
     */
    extractData($link) {
        if ($link) {
            const { path, fragment, host, scheme, url } = $link;
            if (this.containsCode(fragment)) {
                /** @type {?} */
                const extractCode = this.extractCode(fragment);
                this.nextParams(extractCode.code);
            }
        }
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    extractCode(url) {
        /** @type {?} */
        const hashes = url.slice(url.indexOf('?') + 1).split('&');
        /** @type {?} */
        const paramsObj = hashes.reduce((/**
         * @param {?} params
         * @param {?} hash
         * @return {?}
         */
        (params, hash) => {
            const [key, val] = hash.split('=');
            return Object.assign(params, { [key]: decodeURIComponent(val) });
        }), (/** @type {?} */ ({})));
        if ((!paramsObj) || (!paramsObj.code)) {
            return;
        }
        paramsObj.code = ((/** @type {?} */ (paramsObj.code))).split('#')[0];
        return paramsObj;
    }
    /**
     * @private
     * @param {?} code
     * @return {?}
     */
    nextParams(code) {
        this.paramsSubject.next(code);
    }
    /**
     * @private
     * @param {?} fragment
     * @return {?}
     */
    containsCode(fragment) {
        if (!fragment) {
            return false;
        }
        return fragment.indexOf('code') > -1;
    }
}
DeepLinkService.ɵfac = function DeepLinkService_Factory(t) { return new (t || DeepLinkService)(ɵngcc0.ɵɵinject(ɵngcc1.NavController), ɵngcc0.ɵɵinject(ɵngcc2.Deeplinks)); };
DeepLinkService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: DeepLinkService, factory: DeepLinkService.ɵfac });
/** @nocollapse */
DeepLinkService.ctorParameters = () => [
    { type: NavController },
    { type: Deeplinks }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(DeepLinkService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc1.NavController }, { type: ɵngcc2.Deeplinks }]; }, null); })();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVlcC1saW5rLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIkBjbW90aW9uL2lvbmljLWtleWNsb2FrLWF1dGgvbGliL3NlcnZpY2UvZGVlcC1saW5rLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUlBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFDLE9BQU8sRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFnQixTQUFTLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUNyRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFJN0MsTUFBTSxPQUFPLGVBQWU7QUFDNUI7QUFDTztBQUFnQztBQUV0QjtBQUFRLElBQXZCLFlBQW9CLGFBQTRCLEVBQzVCLFNBQW9CO0FBQzFDLFFBRnNCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0FBQUMsUUFDN0IsY0FBUyxHQUFULFNBQVMsQ0FBVztBQUFDLFFBSGpDLGtCQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztBQUNoRCxJQUdFLENBQUM7QUFDSDtBQUNPO0FBQ007QUFBUSxJQURuQixNQUFNO0FBQ1IsUUFBSSxPQUFPLElBQUksQ0FBQyxhQUFhO0FBQzdCLGFBQU8sSUFBSSxDQUFDLE1BQU07QUFBTTtBQUdkO0FBRVA7QUFBWSxRQUxJLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7QUFDbEMsSUFBRSxDQUFDO0FBQ0g7QUFDTztBQUNRO0FBQ1gsSUFGRixJQUFJO0FBQ04sUUFBSSxJQUFJLENBQUMsU0FBUztBQUNsQixhQUFPLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDaEIsYUFBTyxTQUFTO0FBQ1o7QUFBNEI7QUFDYjtBQUFZLFFBRHZCLENBQUMsS0FBb0IsRUFBRSxFQUFFO0FBQ2pDLFlB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QUFRO0FBQ3JEO0FBQWdCO0FBQVEsSUFNNUIsd0NBQThDO0FBQ2hEO0FBQ087QUFBaUI7QUFBZ0I7QUFBUSxJQUFsQyx3Q0FBb0M7QUFBQztBQUM1QztBQUFpQjtBQUFnQjtBQUN0QyxJQURZLG9DQUE0QjtBQUFDO0FBQUUiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U3ViamVjdH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtEZWVwbGlua01hdGNoLCBEZWVwbGlua3N9IGZyb20gJ0Bpb25pYy1uYXRpdmUvZGVlcGxpbmtzL25neCc7XG5pbXBvcnQge05hdkNvbnRyb2xsZXJ9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7S2V5VmFsdWVTdHJ9IGZyb20gJy4uL21vZGVsL2tleS12YWx1ZS1zdHInO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRGVlcExpbmtTZXJ2aWNlIHtcblxuICBwcml2YXRlIHBhcmFtc1N1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuYXZDb250cm9sbGVyOiBOYXZDb250cm9sbGVyLFxuICAgICAgICAgICAgICBwcml2YXRlIGRlZXBMaW5rczogRGVlcGxpbmtzKSB7XG4gIH1cblxuICBwYXJhbXMoKSB7XG4gICAgcmV0dXJuIHRoaXMucGFyYW1zU3ViamVjdFxuICAgICAgLnBpcGUoZmlsdGVyKHN0ciA9PiAhIXN0cikpO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmRlZXBMaW5rc1xuICAgICAgLnJvdXRlKHt9KVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKG1hdGNoOiBEZWVwbGlua01hdGNoKSA9PiB7XG4gICAgICAgICAgLy8gbWF0Y2guJHJvdXRlIC0gdGhlIHJvdXRlIHdlIG1hdGNoZWQsIHdoaWNoIGlzIHRoZSBtYXRjaGVkIGVudHJ5IGZyb20gdGhlIGFyZ3VtZW50cyB0byByb3V0ZSgpXG4gICAgICAgICAgLy8gbWF0Y2guJGFyZ3MgLSB0aGUgYXJncyBwYXNzZWQgaW4gdGhlIGxpbmtcbiAgICAgICAgICAvLyBtYXRjaC4kbGluayAtIHRoZSBmdWxsIGxpbmsgZGF0YVxuICAgICAgICAgIHRoaXMuZXh0cmFjdERhdGEobWF0Y2guJGxpbmspO1xuICAgICAgICB9LFxuICAgICAgICBub21hdGNoID0+IHtcbiAgICAgICAgICAvLyBub21hdGNoLiRsaW5rIC0gdGhlIGZ1bGwgbGluayBkYXRhXG4gICAgICAgICAgdGhpcy5leHRyYWN0RGF0YShub21hdGNoLiRsaW5rKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZXh0cmFjdERhdGEoJGxpbmspIHtcbiAgICBpZiAoJGxpbmspIHtcbiAgICAgIGNvbnN0IHtwYXRoLCBmcmFnbWVudCwgaG9zdCwgc2NoZW1lLCB1cmx9ID0gJGxpbms7XG4gICAgICBpZiAodGhpcy5jb250YWluc0NvZGUoZnJhZ21lbnQpKSB7XG4gICAgICAgIGNvbnN0IGV4dHJhY3RDb2RlID0gdGhpcy5leHRyYWN0Q29kZShmcmFnbWVudCk7XG4gICAgICAgIHRoaXMubmV4dFBhcmFtcyhleHRyYWN0Q29kZS5jb2RlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RDb2RlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgaGFzaGVzID0gdXJsLnNsaWNlKHVybC5pbmRleE9mKCc/JykgKyAxKS5zcGxpdCgnJicpO1xuICAgIGNvbnN0IHBhcmFtc09iaiA9IGhhc2hlcy5yZWR1Y2UoKHBhcmFtcywgaGFzaCkgPT4ge1xuICAgICAgY29uc3QgW2tleSwgdmFsXSA9IGhhc2guc3BsaXQoJz0nKTtcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHBhcmFtcywge1trZXldOiBkZWNvZGVVUklDb21wb25lbnQodmFsKX0pO1xuICAgIH0sIHt9IGFzIEtleVZhbHVlU3RyKTtcbiAgICBpZiAoKCFwYXJhbXNPYmopIHx8ICghcGFyYW1zT2JqLmNvZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBhcmFtc09iai5jb2RlID0gKHBhcmFtc09iai5jb2RlIGFzIHN0cmluZykuc3BsaXQoJyMnKVswXTtcbiAgICByZXR1cm4gcGFyYW1zT2JqO1xuICB9XG5cbiAgcHJpdmF0ZSBuZXh0UGFyYW1zKGNvZGU6IHN0cmluZykge1xuICAgIHRoaXMucGFyYW1zU3ViamVjdC5uZXh0KGNvZGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBjb250YWluc0NvZGUoZnJhZ21lbnQ6IHN0cmluZykge1xuICAgIGlmICghZnJhZ21lbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZyYWdtZW50LmluZGV4T2YoJ2NvZGUnKSA+IC0xO1xuICB9XG59XG4iXX0=