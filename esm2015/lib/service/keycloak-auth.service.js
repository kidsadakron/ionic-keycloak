/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { DeepLinkService } from './deep-link.service';
import { StorageService } from './storage.service';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import * as Keycloak_ from 'keycloak-js';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { KcConfig } from '../model/kc-config';
import { DeepLinkConfig } from '../model/deep-link-config';
import { KEYCLOAK_OPTIONS } from '../contant/kc-injection-token';
import { DEEP_LINKING_OPTIONS } from '../contant/deep-linking-config-injection-token';
// Workaround from https://github.com/ng-packagr/ng-packagr/issues/343#issuecomment-350965445
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common/http';
import * as ɵngcc2 from '@ionic-native/browser-tab/ngx';
import * as ɵngcc3 from '@angular/router';
import * as ɵngcc4 from './storage.service';
import * as ɵngcc5 from '@ionic-native/in-app-browser/ngx';
import * as ɵngcc6 from './deep-link.service';
import * as ɵngcc7 from '../model/deep-link-config';
import * as ɵngcc8 from '../model/kc-config';
const Keycloak = Keycloak_;
/** @type {?} */
const jwtHelperService = new JwtHelperService();
export class KeycloakAuthService {
    /**
     * @param {?} deepLinkConfig
     * @param {?} kcConfig
     * @param {?} http
     * @param {?} browserTab
     * @param {?} router
     * @param {?} storage
     * @param {?} inAppBrowser
     * @param {?} deepLinkService
     */
    constructor(deepLinkConfig, kcConfig, http, browserTab, router, storage, inAppBrowser, deepLinkService) {
        this.http = http;
        this.browserTab = browserTab;
        this.router = router;
        this.storage = storage;
        this.inAppBrowser = inAppBrowser;
        this.deepLinkService = deepLinkService;
        this.scope = kcConfig.scope;
        this.keycloakConfig = kcConfig.jsonConfig;
        this.appPrefix = `${deepLinkConfig.deepLinkingScheme}://app`;
    }
    /**
     *
     * @return {?}
     */
    user() {
        if (!this.subject) {
            this.subject = new BehaviorSubject(null);
        }
        return this.subject.asObservable();
    }
    /**
     *
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initKeycloak();
            return this.refresh();
        });
    }
    /**
     *
     * @return {?}
     */
    logout() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.handleNewToken(null);
            /** @type {?} */
            const url = this.getLogoutUrl();
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (yield this.browserTab.isAvailable()) {
                    this.browserTab.openUrl(url)
                        .then((/**
                     * @return {?}
                     */
                    () => this.browserTab.close()))
                        .catch((/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => reject(err)));
                    resolve();
                }
                else {
                    /** @type {?} */
                    const browser = this.inAppBrowser.create(url, '_system');
                    /** @type {?} */
                    const sub = browser.on('loadstop')
                        .subscribe((/**
                     * @return {?}
                     */
                    () => {
                        browser.close();
                        resolve();
                        sub.unsubscribe();
                    }), (/**
                     * @param {?} err
                     * @return {?}
                     */
                    err => {
                        reject(err);
                        sub.unsubscribe();
                    }));
                }
            })));
        });
    }
    /**
     *
     * @param {?=} isLogin
     * @param {?=} redirectUrl
     * @return {?}
     */
    login(isLogin = true, redirectUrl) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                if (redirectUrl[0] === '/') {
                    redirectUrl = redirectUrl.substr(1);
                }
                /** @type {?} */
                const response = yield this.beginLoginAndGetCode(redirectUrl, isLogin);
                return this.continueLoginWithCode(response);
            }
            catch (err) {
                /** @type {?} */
                const context = { messageError: 'Ionic Keycloak Error: error by login' };
                Object.assign(err, { context });
                throw err;
            }
        });
    }
    /**
     *
     * @param {?=} refresh
     * @return {?}
     */
    getToken(refresh = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let authToken = yield this.storage.getToken();
            if (!authToken) {
                return null;
            }
            if (refresh || jwtHelperService.isTokenExpired(authToken.access_token, 10)) {
                authToken = yield this.refresh();
            }
            return authToken.access_token;
        });
    }
    /**
     * @param {?=} refresh
     * @return {?}
     */
    getTokenDecoded(refresh = false) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const token = yield this.getToken(refresh);
            return (/** @type {?} */ (jwtHelperService.decodeToken(token)));
        });
    }
    /**
     * @private
     * @param {?=} redirectUrl
     * @return {?}
     */
    getLogoutUrl(redirectUrl = this.router.url) {
        return this.keycloakInstance.createLogoutUrl({
            redirectUri: this.appPrefix + encodeURIComponent(redirectUrl)
        });
    }
    /**
     * @private
     * @return {?}
     */
    getKcJsonStructure() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const prom = this.keycloakConfig();
            /** @type {?} */
            let config;
            if (prom instanceof Promise) {
                config = yield prom;
            }
            else {
                config = prom;
            }
            /**
             * This line because the init method needs the clientId and url to work
             * which are the resource and the auth-server-url respectively
             */
            config.clientId = config.resource;
            config.url = config['auth-server-url'];
            return config;
        });
    }
    /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    handleNewToken(authToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (authToken) {
                /** @type {?} */
                const user = jwtHelperService.decodeToken(authToken.id_token || authToken.access_token);
                if (!this.subject) {
                    this.subject = new BehaviorSubject(user);
                }
                this.subject.next(user);
                yield this.storage.setToken(authToken);
            }
            else {
                if (!this.subject) {
                    this.subject = new BehaviorSubject(null);
                }
                this.subject.next(null);
                yield this.storage.setToken(null);
            }
        });
    }
    /**
     * @private
     * @param {?} uri
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    createPostRequest(uri, body, options) {
        return this.http.post(uri, body, options).toPromise();
    }
    /**
     * @private
     * @param {?} refreshToken
     * @return {?}
     */
    getRefreshParams(refreshToken) {
        /** @type {?} */
        const params = new HttpParams()
            .set('grant_type', 'refresh_token')
            .set('refresh_token', refreshToken)
            .set('client_id', encodeURIComponent(this.keycloakInstance.clientId));
        /** @type {?} */
        const secret = this.keycloakInstance.clientSecret;
        if (secret) {
            return params
                .set('client_secret', encodeURIComponent(secret));
        }
        return params;
    }
    /**
     * @private
     * @param {?} code
     * @param {?} redirectUrl
     * @return {?}
     */
    getAccessTokenParams(code, redirectUrl) {
        /** @type {?} */
        let redirectUri = new HttpParams()
            .set('grant_type', 'authorization_code')
            .set('code', code)
            .set('client_id', encodeURIComponent(this.keycloakInstance.clientId))
            .set('redirect_uri', redirectUrl);
        if (this.scope || (this.actualKeycloakConfig && this.actualKeycloakConfig.scope)) {
            redirectUri = redirectUri.set('scope', this.scope || this.actualKeycloakConfig.scope);
        }
        /** @type {?} */
        const secret = this.keycloakInstance.clientSecret;
        if (secret) {
            redirectUri = redirectUri.set('client_secret', encodeURIComponent(secret));
        }
        return redirectUri;
    }
    /**
     * @private
     * @return {?}
     */
    getTokenRequestHeaders() {
        /** @type {?} */
        const headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        /** @type {?} */
        const clientSecret = this.keycloakInstance.clientSecret;
        /** @type {?} */
        const clientId = this.keycloakInstance.clientId;
        if (clientId && clientSecret) {
            headers.set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));
        }
        return headers;
    }
    /**
     * @private
     * @return {?}
     */
    refresh() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                /** @type {?} */
                let tokens = yield this.storage.getToken();
                if (tokens) {
                    if (!this.isValidToken(tokens)) {
                        /** @type {?} */
                        const uri = this.getTokenUrl();
                        /** @type {?} */
                        const headers = this.getTokenRequestHeaders();
                        /** @type {?} */
                        const body = this.getRefreshParams(tokens.refresh_token);
                        tokens = yield this.createPostRequest(uri, body, { headers });
                    }
                }
                this.handleNewToken(tokens);
                return tokens;
            }
            catch (e) {
                yield this.logout();
                return null;
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    getTokenUrl() {
        return `${this.keycloakInstance.authServerUrl}/realms/${this.keycloakInstance.realm}/protocol/openid-connect/token`;
    }
    /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    isValidToken(authToken) {
        if (!authToken) {
            return false;
        }
        return jwtHelperService.isTokenExpired(authToken.access_token, 10);
    }
    /**
     * @private
     * @return {?}
     */
    initKeycloakInstance() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const keycloakConfig = yield this.getKcJsonStructure();
            this.actualKeycloakConfig = keycloakConfig;
            this.keycloakInstance = Keycloak(keycloakConfig);
        });
    }
    /**
     * @private
     * @return {?}
     */
    initKeycloak() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.initKeycloakInstance();
            this.keycloakInstance
                .init({
                adapter: 'cordova-native',
                redirectUri: this.appPrefix + '/'
            });
        });
    }
    /**
     * @private
     * @param {?} path
     * @param {?=} login
     * @return {?}
     */
    beginLoginAndGetCode(path, login = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            path = `${this.appPrefix}/${path}`;
            yield this.storage.setToken(null);
            /** @type {?} */
            const options = {
                redirectUri: path
            };
            /** @type {?} */
            const url = login
                ? this.keycloakInstance.createLoginUrl(options)
                : this.keycloakInstance.createRegisterUrl(options);
            if (yield this.browserTab.isAvailable()) {
                this.browserTab.openUrl(url);
            }
            else {
                this.inAppBrowser.create(url, '_system');
            }
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => {
                /** @type {?} */
                const sub = this.deepLinkService
                    .params()
                    .subscribe((/**
                 * @param {?} code
                 * @return {?}
                 */
                code => {
                    resolve({ code, redirectUri: path });
                    sub.unsubscribe();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    reject(error);
                    sub.unsubscribe();
                }));
            }));
        });
    }
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    continueLoginWithCode({ code, redirectUri: redirectUrl }) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.browserTab.close()
                .catch((/**
             * @param {?=} err
             * @return {?}
             */
            (err = {}) => {
                /** @type {?} */
                const context = { message: 'Error while closing the browser' };
                console.log(context.message, err);
                Object.assign(err, { context });
                throw err;
            }));
            /** @type {?} */
            const uri = this.getTokenUrl();
            /** @type {?} */
            const body = this.getAccessTokenParams(code, redirectUrl);
            /** @type {?} */
            const headers = this.getTokenRequestHeaders();
            return this.createPostRequest(uri, body, { headers })
                .then((/**
             * @param {?} authToken
             * @return {?}
             */
            (authToken) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                this.handleNewToken(authToken);
                return authToken;
            })));
        });
    }
}
KeycloakAuthService.ɵfac = function KeycloakAuthService_Factory(t) { return new (t || KeycloakAuthService)(ɵngcc0.ɵɵinject(DEEP_LINKING_OPTIONS), ɵngcc0.ɵɵinject(KEYCLOAK_OPTIONS), ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.BrowserTab), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.StorageService), ɵngcc0.ɵɵinject(ɵngcc5.InAppBrowser), ɵngcc0.ɵɵinject(ɵngcc6.DeepLinkService)); };
KeycloakAuthService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KeycloakAuthService, factory: KeycloakAuthService.ɵfac });
/** @nocollapse */
KeycloakAuthService.ctorParameters = () => [
    { type: DeepLinkConfig, decorators: [{ type: Inject, args: [DEEP_LINKING_OPTIONS,] }] },
    { type: KcConfig, decorators: [{ type: Inject, args: [KEYCLOAK_OPTIONS,] }] },
    { type: HttpClient },
    { type: BrowserTab },
    { type: Router },
    { type: StorageService },
    { type: InAppBrowser },
    { type: DeepLinkService }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeycloakAuthService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc7.DeepLinkConfig, decorators: [{
                type: Inject,
                args: [DEEP_LINKING_OPTIONS]
            }] }, { type: ɵngcc8.KcConfig, decorators: [{
                type: Inject,
                args: [KEYCLOAK_OPTIONS]
            }] }, { type: ɵngcc1.HttpClient }, { type: ɵngcc2.BrowserTab }, { type: ɵngcc3.Router }, { type: ɵngcc4.StorageService }, { type: ɵngcc5.InAppBrowser }, { type: ɵngcc6.DeepLinkService }]; }, null); })();
if (false) {
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.scope;
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.appPrefix;
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.keycloakConfig;
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.actualKeycloakConfig;
    /**
     * @type {?}
     * @private
     */
    KeycloakAuthService.prototype.keycloakInstance;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.browserTab;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.router;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.storage;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.inAppBrowser;
    /**
     * @type {?}
     * @protected
     */
    KeycloakAuthService.prototype.deepLinkService;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWstYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJAY21vdGlvbi9pb25pYy1rZXljbG9hay1hdXRoL2xpYi9zZXJ2aWNlL2tleWNsb2FrLWF1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxLQUFLLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFFekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxPQUFPLEVBQW9CLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUl6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRjtBQUM2Rjs7Ozs7Ozs7OztBQUM3RSxNQUFWLFFBQVEsR0FBRyxTQUFTO0FBQzFCO0FBQWlCLE1BQVgsZ0JBQWdCLEdBQXFCLElBQUksZ0JBQWdCLEVBQUU7QUFHakUsTUFBTSxPQUFPLG1CQUFt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cyB1bmRlciBsaWNlbnNlIGFuZCBiZWxvbmdzIHRvIENvZGluZyBNb3Rpb25cbiAqL1xuXG5pbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0h0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0RlZXBMaW5rU2VydmljZX0gZnJvbSAnLi9kZWVwLWxpbmsuc2VydmljZSc7XG5pbXBvcnQge1N0b3JhZ2VTZXJ2aWNlfSBmcm9tICcuL3N0b3JhZ2Uuc2VydmljZSc7XG5pbXBvcnQge0Jyb3dzZXJUYWJ9IGZyb20gJ0Bpb25pYy1uYXRpdmUvYnJvd3Nlci10YWIvbmd4JztcbmltcG9ydCB7Snd0SGVscGVyU2VydmljZX0gZnJvbSAnQGF1dGgwL2FuZ3VsYXItand0JztcbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCAqIGFzIEtleWNsb2FrXyBmcm9tICdrZXljbG9hay1qcyc7XG5pbXBvcnQge0tleWNsb2FrTG9naW5PcHRpb25zfSBmcm9tICdrZXljbG9hay1qcyc7XG5pbXBvcnQge0luQXBwQnJvd3Nlcn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9pbi1hcHAtYnJvd3Nlci9uZ3gnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0lEVG9rZW5EZWNvZGVkfSBmcm9tICcuLi9tb2RlbC9pZC10b2tlbi1kZWNvZGVkJztcbmltcG9ydCB7RmV0Y2hLZXljbG9ha0pTT04sIEtjQ29uZmlnfSBmcm9tICcuLi9tb2RlbC9rYy1jb25maWcnO1xuaW1wb3J0IHtLZXljbG9ha0pzb25TdHJ1Y3R1cmV9IGZyb20gJy4uL21vZGVsL2tleWNsb2FrLWpzb24tc3RydWN0dXJlJztcbmltcG9ydCB7RGVlcExpbmtDb25maWd9IGZyb20gJy4uL21vZGVsL2RlZXAtbGluay1jb25maWcnO1xuaW1wb3J0IHtBdXRoVG9rZW59IGZyb20gJy4uL21vZGVsL2F1dGgtdG9rZW4nO1xuaW1wb3J0IHtUb2tlbkRlY29kZWR9IGZyb20gJy4uL21vZGVsL3Rva2VuLWRlY29kZWQnO1xuaW1wb3J0IHtLZXljbG9ha0xvZ2luUmVzcG9uc2V9IGZyb20gJy4uL21vZGVsL2tleWNsb2FrLWxvZ2luLXJlc3BvbnNlJztcbmltcG9ydCB7S0VZQ0xPQUtfT1BUSU9OU30gZnJvbSAnLi4vY29udGFudC9rYy1pbmplY3Rpb24tdG9rZW4nO1xuaW1wb3J0IHtERUVQX0xJTktJTkdfT1BUSU9OU30gZnJvbSAnLi4vY29udGFudC9kZWVwLWxpbmtpbmctY29uZmlnLWluamVjdGlvbi10b2tlbic7XG5cbi8vIFdvcmthcm91bmQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbmctcGFja2Fnci9uZy1wYWNrYWdyL2lzc3Vlcy8zNDMjaXNzdWVjb21tZW50LTM1MDk2NTQ0NVxuY29uc3QgS2V5Y2xvYWsgPSBLZXljbG9ha187XG5jb25zdCBqd3RIZWxwZXJTZXJ2aWNlOiBKd3RIZWxwZXJTZXJ2aWNlID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEtleWNsb2FrQXV0aFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgc3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PElEVG9rZW5EZWNvZGVkPjtcbiAgcHJpdmF0ZSBzY29wZTogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGFwcFByZWZpeDogc3RyaW5nO1xuICBwcml2YXRlIHJlYWRvbmx5IGtleWNsb2FrQ29uZmlnOiBGZXRjaEtleWNsb2FrSlNPTjtcbiAgcHJpdmF0ZSBhY3R1YWxLZXljbG9ha0NvbmZpZzogS2V5Y2xvYWtKc29uU3RydWN0dXJlO1xuICBwcml2YXRlIGtleWNsb2FrSW5zdGFuY2U6IEtleWNsb2FrXy5LZXljbG9ha0luc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoREVFUF9MSU5LSU5HX09QVElPTlMpIGRlZXBMaW5rQ29uZmlnOiBEZWVwTGlua0NvbmZpZyxcbiAgICBASW5qZWN0KEtFWUNMT0FLX09QVElPTlMpIGtjQ29uZmlnOiBLY0NvbmZpZyxcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgYnJvd3NlclRhYjogQnJvd3NlclRhYixcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJvdGVjdGVkIHN0b3JhZ2U6IFN0b3JhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbkFwcEJyb3dzZXI6IEluQXBwQnJvd3NlcixcbiAgICBwcm90ZWN0ZWQgZGVlcExpbmtTZXJ2aWNlOiBEZWVwTGlua1NlcnZpY2UsXG4gICkge1xuICAgIHRoaXMuc2NvcGUgPSBrY0NvbmZpZy5zY29wZTtcbiAgICB0aGlzLmtleWNsb2FrQ29uZmlnID0ga2NDb25maWcuanNvbkNvbmZpZztcbiAgICB0aGlzLmFwcFByZWZpeCA9IGAke2RlZXBMaW5rQ29uZmlnLmRlZXBMaW5raW5nU2NoZW1lfTovL2FwcGA7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHB1YmxpYyB1c2VyKCk6IE9ic2VydmFibGU8SURUb2tlbkRlY29kZWQ+IHtcbiAgICBpZiAoIXRoaXMuc3ViamVjdCkge1xuICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRFRva2VuRGVjb2RlZD4obnVsbCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICovXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuaW5pdEtleWNsb2FrKCk7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaCgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9nb3V0KCkge1xuICAgIGF3YWl0IHRoaXMuaGFuZGxlTmV3VG9rZW4obnVsbCk7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldExvZ291dFVybCgpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoYXdhaXQgdGhpcy5icm93c2VyVGFiLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgICAgdGhpcy5icm93c2VyVGFiLm9wZW5VcmwodXJsKVxuICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMuYnJvd3NlclRhYi5jbG9zZSgpKVxuICAgICAgICAgIC5jYXRjaChlcnIgPT4gcmVqZWN0KGVycikpO1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBicm93c2VyID0gdGhpcy5pbkFwcEJyb3dzZXIuY3JlYXRlKHVybCwgJ19zeXN0ZW0nKTtcbiAgICAgICAgY29uc3Qgc3ViID0gYnJvd3Nlci5vbignbG9hZHN0b3AnKVxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAgICAgYnJvd3Nlci5jbG9zZSgpO1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfSwgZXJyID0+IHtcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGlzTG9naW5cbiAgICogQHBhcmFtIHJlZGlyZWN0VXJsXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgbG9naW4oaXNMb2dpbjogYm9vbGVhbiA9IHRydWUsIHJlZGlyZWN0VXJsPzogc3RyaW5nKTogUHJvbWlzZTxBdXRoVG9rZW4+IHtcbiAgICB0cnkge1xuICAgICAgaWYgKHJlZGlyZWN0VXJsWzBdID09PSAnLycpIHtcbiAgICAgICAgcmVkaXJlY3RVcmwgPSByZWRpcmVjdFVybC5zdWJzdHIoMSk7XG4gICAgICB9XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuYmVnaW5Mb2dpbkFuZEdldENvZGUocmVkaXJlY3RVcmwsIGlzTG9naW4pO1xuICAgICAgcmV0dXJuIHRoaXMuY29udGludWVMb2dpbldpdGhDb2RlKHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB7bWVzc2FnZUVycm9yOiAnSW9uaWMgS2V5Y2xvYWsgRXJyb3I6IGVycm9yIGJ5IGxvZ2luJ307XG4gICAgICBPYmplY3QuYXNzaWduKGVyciwge2NvbnRleHR9KTtcbiAgICAgIHRocm93IGVycjtcbiAgICB9XG4gIH1cblxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcmVmcmVzaFxuICAgKi9cbiAgcHVibGljIGFzeW5jIGdldFRva2VuKHJlZnJlc2ggPSBmYWxzZSkge1xuICAgIGxldCBhdXRoVG9rZW4gPSBhd2FpdCB0aGlzLnN0b3JhZ2UuZ2V0VG9rZW4oKTtcbiAgICBpZiAoIWF1dGhUb2tlbikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChyZWZyZXNoIHx8IGp3dEhlbHBlclNlcnZpY2UuaXNUb2tlbkV4cGlyZWQoYXV0aFRva2VuLmFjY2Vzc190b2tlbiwgMTApKSB7XG4gICAgICBhdXRoVG9rZW4gPSBhd2FpdCB0aGlzLnJlZnJlc2goKTtcbiAgICB9XG4gICAgcmV0dXJuIGF1dGhUb2tlbi5hY2Nlc3NfdG9rZW47XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0VG9rZW5EZWNvZGVkKHJlZnJlc2ggPSBmYWxzZSk6IFByb21pc2U8VG9rZW5EZWNvZGVkPiB7XG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCB0aGlzLmdldFRva2VuKHJlZnJlc2gpO1xuICAgIHJldHVybiBqd3RIZWxwZXJTZXJ2aWNlLmRlY29kZVRva2VuKHRva2VuKSBhcyBUb2tlbkRlY29kZWQ7XG4gIH1cblxuICBwcml2YXRlIGdldExvZ291dFVybChyZWRpcmVjdFVybCA9IHRoaXMucm91dGVyLnVybCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jcmVhdGVMb2dvdXRVcmwoe1xuICAgICAgcmVkaXJlY3RVcmk6IHRoaXMuYXBwUHJlZml4ICsgZW5jb2RlVVJJQ29tcG9uZW50KHJlZGlyZWN0VXJsKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBnZXRLY0pzb25TdHJ1Y3R1cmUoKTogUHJvbWlzZTxLZXljbG9ha0pzb25TdHJ1Y3R1cmU+IHtcbiAgICBjb25zdCBwcm9tID0gdGhpcy5rZXljbG9ha0NvbmZpZygpO1xuICAgIGxldCBjb25maWc6IEtleWNsb2FrSnNvblN0cnVjdHVyZTtcbiAgICBpZiAocHJvbSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIGNvbmZpZyA9IGF3YWl0IHByb207XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZpZyA9IHByb207XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgbGluZSBiZWNhdXNlIHRoZSBpbml0IG1ldGhvZCBuZWVkcyB0aGUgY2xpZW50SWQgYW5kIHVybCB0byB3b3JrXG4gICAgICogd2hpY2ggYXJlIHRoZSByZXNvdXJjZSBhbmQgdGhlIGF1dGgtc2VydmVyLXVybCByZXNwZWN0aXZlbHlcbiAgICAgKi9cbiAgICBjb25maWcuY2xpZW50SWQgPSBjb25maWcucmVzb3VyY2U7XG4gICAgY29uZmlnLnVybCA9IGNvbmZpZ1snYXV0aC1zZXJ2ZXItdXJsJ107XG4gICAgcmV0dXJuIGNvbmZpZztcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlTmV3VG9rZW4oYXV0aFRva2VuOiBBdXRoVG9rZW4pIHtcbiAgICBpZiAoYXV0aFRva2VuKSB7XG4gICAgICBjb25zdCB1c2VyOiBJRFRva2VuRGVjb2RlZCA9IGp3dEhlbHBlclNlcnZpY2UuZGVjb2RlVG9rZW4oYXV0aFRva2VuLmlkX3Rva2VuIHx8IGF1dGhUb2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgaWYgKCF0aGlzLnN1YmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRFRva2VuRGVjb2RlZD4odXNlcik7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YmplY3QubmV4dCh1c2VyKTtcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXRUb2tlbihhdXRoVG9rZW4pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXRoaXMuc3ViamVjdCkge1xuICAgICAgICB0aGlzLnN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PElEVG9rZW5EZWNvZGVkPihudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3ViamVjdC5uZXh0KG51bGwpO1xuICAgICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldFRva2VuKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlUG9zdFJlcXVlc3QodXJpOiBzdHJpbmcsIGJvZHk6IGFueSwgb3B0aW9ucz86IHtcbiAgICBoZWFkZXJzPzogSHR0cEhlYWRlcnMgfCB7XG4gICAgICBbaGVhZGVyOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB9O1xuICB9KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PEF1dGhUb2tlbj4odXJpLCBib2R5LCBvcHRpb25zKS50b1Byb21pc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UmVmcmVzaFBhcmFtcyhyZWZyZXNoVG9rZW46IHN0cmluZykge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2dyYW50X3R5cGUnLCAncmVmcmVzaF90b2tlbicpXG4gICAgICAuc2V0KCdyZWZyZXNoX3Rva2VuJywgcmVmcmVzaFRva2VuKVxuICAgICAgLnNldCgnY2xpZW50X2lkJywgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jbGllbnRJZCkpO1xuICAgIGNvbnN0IHNlY3JldCA9IHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jbGllbnRTZWNyZXQ7XG4gICAgaWYgKHNlY3JldCkge1xuICAgICAgcmV0dXJuIHBhcmFtc1xuICAgICAgICAuc2V0KCdjbGllbnRfc2VjcmV0JywgZW5jb2RlVVJJQ29tcG9uZW50KHNlY3JldCkpO1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBY2Nlc3NUb2tlblBhcmFtcyhjb2RlOiBzdHJpbmcsIHJlZGlyZWN0VXJsOiBzdHJpbmcpIHtcbiAgICBsZXQgcmVkaXJlY3RVcmkgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ2F1dGhvcml6YXRpb25fY29kZScpXG4gICAgICAuc2V0KCdjb2RlJywgY29kZSlcbiAgICAgIC5zZXQoJ2NsaWVudF9pZCcsIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50SWQpKVxuICAgICAgLnNldCgncmVkaXJlY3RfdXJpJywgcmVkaXJlY3RVcmwpO1xuICAgIGlmICh0aGlzLnNjb3BlIHx8ICh0aGlzLmFjdHVhbEtleWNsb2FrQ29uZmlnICYmIHRoaXMuYWN0dWFsS2V5Y2xvYWtDb25maWcuc2NvcGUpKSB7XG4gICAgICByZWRpcmVjdFVyaSA9IHJlZGlyZWN0VXJpLnNldCgnc2NvcGUnLCB0aGlzLnNjb3BlIHx8IHRoaXMuYWN0dWFsS2V5Y2xvYWtDb25maWcuc2NvcGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHNlY3JldCA9IHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jbGllbnRTZWNyZXQ7XG4gICAgaWYgKHNlY3JldCkge1xuICAgICAgcmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaS5zZXQoJ2NsaWVudF9zZWNyZXQnLCBlbmNvZGVVUklDb21wb25lbnQoc2VjcmV0KSk7XG4gICAgfVxuICAgIHJldHVybiByZWRpcmVjdFVyaTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9rZW5SZXF1ZXN0SGVhZGVycygpIHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKClcbiAgICAgIC5zZXQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcblxuICAgIGNvbnN0IGNsaWVudFNlY3JldCA9IHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jbGllbnRTZWNyZXQ7XG4gICAgY29uc3QgY2xpZW50SWQgPSB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50SWQ7XG4gICAgaWYgKGNsaWVudElkICYmIGNsaWVudFNlY3JldCkge1xuICAgICAgaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCAnQmFzaWMgJyArIGJ0b2EoY2xpZW50SWQgKyAnOicgKyBjbGllbnRTZWNyZXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlZnJlc2goKTogUHJvbWlzZTxBdXRoVG9rZW4+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHRva2VuczogQXV0aFRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldFRva2VuKCk7XG4gICAgICBpZiAodG9rZW5zKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkVG9rZW4odG9rZW5zKSkge1xuICAgICAgICAgIGNvbnN0IHVyaSA9IHRoaXMuZ2V0VG9rZW5VcmwoKTtcbiAgICAgICAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XG4gICAgICAgICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0UmVmcmVzaFBhcmFtcyh0b2tlbnMucmVmcmVzaF90b2tlbik7XG4gICAgICAgICAgdG9rZW5zID0gYXdhaXQgdGhpcy5jcmVhdGVQb3N0UmVxdWVzdCh1cmksIGJvZHksIHtoZWFkZXJzfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuaGFuZGxlTmV3VG9rZW4odG9rZW5zKTtcbiAgICAgIHJldHVybiB0b2tlbnM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXdhaXQgdGhpcy5sb2dvdXQoKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9rZW5VcmwoKSB7XG4gICAgcmV0dXJuIGAke3RoaXMua2V5Y2xvYWtJbnN0YW5jZS5hdXRoU2VydmVyVXJsfS9yZWFsbXMvJHt0aGlzLmtleWNsb2FrSW5zdGFuY2UucmVhbG19L3Byb3RvY29sL29wZW5pZC1jb25uZWN0L3Rva2VuYDtcbiAgfVxuXG4gIHByaXZhdGUgaXNWYWxpZFRva2VuKGF1dGhUb2tlbjogQXV0aFRva2VuKSB7XG4gICAgaWYgKCFhdXRoVG9rZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGp3dEhlbHBlclNlcnZpY2UuaXNUb2tlbkV4cGlyZWQoYXV0aFRva2VuLmFjY2Vzc190b2tlbiwgMTApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBpbml0S2V5Y2xvYWtJbnN0YW5jZSgpIHtcbiAgICBjb25zdCBrZXljbG9ha0NvbmZpZyA9IGF3YWl0IHRoaXMuZ2V0S2NKc29uU3RydWN0dXJlKCk7XG4gICAgdGhpcy5hY3R1YWxLZXljbG9ha0NvbmZpZyA9IGtleWNsb2FrQ29uZmlnO1xuICAgIHRoaXMua2V5Y2xvYWtJbnN0YW5jZSA9IEtleWNsb2FrKGtleWNsb2FrQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdEtleWNsb2FrKCkge1xuICAgIGF3YWl0IHRoaXMuaW5pdEtleWNsb2FrSW5zdGFuY2UoKTtcblxuICAgIHRoaXMua2V5Y2xvYWtJbnN0YW5jZVxuICAgICAgLmluaXQoe1xuICAgICAgICBhZGFwdGVyOiAnY29yZG92YS1uYXRpdmUnLFxuICAgICAgICByZWRpcmVjdFVyaTogdGhpcy5hcHBQcmVmaXggKyAnLydcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBiZWdpbkxvZ2luQW5kR2V0Q29kZShwYXRoOiBzdHJpbmcsIGxvZ2luID0gdHJ1ZSk6IFByb21pc2U8S2V5Y2xvYWtMb2dpblJlc3BvbnNlPiB7XG4gICAgcGF0aCA9IGAke3RoaXMuYXBwUHJlZml4fS8ke3BhdGh9YDtcbiAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0VG9rZW4obnVsbCk7XG5cbiAgICBjb25zdCBvcHRpb25zOiBLZXljbG9ha0xvZ2luT3B0aW9ucyA9IHtcbiAgICAgIHJlZGlyZWN0VXJpOiBwYXRoXG4gICAgfTtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IGxvZ2luXG4gICAgICA/IHRoaXMua2V5Y2xvYWtJbnN0YW5jZS5jcmVhdGVMb2dpblVybChvcHRpb25zKVxuICAgICAgOiB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY3JlYXRlUmVnaXN0ZXJVcmwob3B0aW9ucyk7XG5cbiAgICBpZiAoYXdhaXQgdGhpcy5icm93c2VyVGFiLmlzQXZhaWxhYmxlKCkpIHtcbiAgICAgIHRoaXMuYnJvd3NlclRhYi5vcGVuVXJsKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaW5BcHBCcm93c2VyLmNyZWF0ZSh1cmwsICdfc3lzdGVtJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEtleWNsb2FrTG9naW5SZXNwb25zZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgc3ViID0gdGhpcy5kZWVwTGlua1NlcnZpY2VcbiAgICAgICAgLnBhcmFtcygpXG4gICAgICAgIC5zdWJzY3JpYmUoY29kZSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh7Y29kZSwgcmVkaXJlY3RVcmk6IHBhdGh9KTtcbiAgICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb250aW51ZUxvZ2luV2l0aENvZGUoe2NvZGUsIHJlZGlyZWN0VXJpOiByZWRpcmVjdFVybH06IEtleWNsb2FrTG9naW5SZXNwb25zZSk6IFByb21pc2U8QXV0aFRva2VuPiB7XG4gICAgdGhpcy5icm93c2VyVGFiLmNsb3NlKClcbiAgICAgIC5jYXRjaCgoZXJyID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHttZXNzYWdlOiAnRXJyb3Igd2hpbGUgY2xvc2luZyB0aGUgYnJvd3Nlcid9O1xuICAgICAgICBjb25zb2xlLmxvZyhjb250ZXh0Lm1lc3NhZ2UsIGVycik7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oZXJyLCB7Y29udGV4dH0pO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgICBjb25zdCB1cmkgPSB0aGlzLmdldFRva2VuVXJsKCk7XG4gICAgY29uc3QgYm9keSA9IHRoaXMuZ2V0QWNjZXNzVG9rZW5QYXJhbXMoY29kZSwgcmVkaXJlY3RVcmwpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB0aGlzLmdldFRva2VuUmVxdWVzdEhlYWRlcnMoKTtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVQb3N0UmVxdWVzdCh1cmksIGJvZHksIHtoZWFkZXJzfSlcbiAgICAgIC50aGVuKGFzeW5jIGF1dGhUb2tlbiA9PiB7XG4gICAgICAgIHRoaXMuaGFuZGxlTmV3VG9rZW4oYXV0aFRva2VuKTtcbiAgICAgICAgcmV0dXJuIGF1dGhUb2tlbjtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==