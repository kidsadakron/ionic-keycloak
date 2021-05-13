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
var Keycloak = Keycloak_;
/** @type {?} */
var jwtHelperService = new JwtHelperService();
var KeycloakAuthService = /** @class */ (function () {
    function KeycloakAuthService(deepLinkConfig, kcConfig, http, browserTab, router, storage, inAppBrowser, deepLinkService) {
        this.http = http;
        this.browserTab = browserTab;
        this.router = router;
        this.storage = storage;
        this.inAppBrowser = inAppBrowser;
        this.deepLinkService = deepLinkService;
        this.scope = kcConfig.scope;
        this.keycloakConfig = kcConfig.jsonConfig;
        this.appPrefix = deepLinkConfig.deepLinkingScheme + "://app";
    }
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    KeycloakAuthService.prototype.user = /**
     *
     * @return {?}
     */
    function () {
        if (!this.subject) {
            this.subject = new BehaviorSubject(null);
        }
        return this.subject.asObservable();
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    KeycloakAuthService.prototype.init = /**
     *
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initKeycloak()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.refresh()];
                }
            });
        });
    };
    /**
     *
     */
    /**
     *
     * @return {?}
     */
    KeycloakAuthService.prototype.logout = /**
     *
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var url;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.handleNewToken(null)];
                    case 1:
                        _a.sent();
                        url = this.getLogoutUrl();
                        return [2 /*return*/, new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            function (resolve, reject) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var browser_1, sub_1;
                                var _this = this;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.browserTab.isAvailable()];
                                        case 1:
                                            if (_a.sent()) {
                                                this.browserTab.openUrl(url)
                                                    .then((/**
                                                 * @return {?}
                                                 */
                                                function () { return _this.browserTab.close(); }))
                                                    .catch((/**
                                                 * @param {?} err
                                                 * @return {?}
                                                 */
                                                function (err) { return reject(err); }));
                                                resolve();
                                            }
                                            else {
                                                browser_1 = this.inAppBrowser.create(url, '_system');
                                                sub_1 = browser_1.on('loadstop')
                                                    .subscribe((/**
                                                 * @return {?}
                                                 */
                                                function () {
                                                    browser_1.close();
                                                    resolve();
                                                    sub_1.unsubscribe();
                                                }), (/**
                                                 * @param {?} err
                                                 * @return {?}
                                                 */
                                                function (err) {
                                                    reject(err);
                                                    sub_1.unsubscribe();
                                                }));
                                            }
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                }
            });
        });
    };
    /**
     *
     * @param isLogin
     * @param redirectUrl
     */
    /**
     *
     * @param {?=} isLogin
     * @param {?=} redirectUrl
     * @return {?}
     */
    KeycloakAuthService.prototype.login = /**
     *
     * @param {?=} isLogin
     * @param {?=} redirectUrl
     * @return {?}
     */
    function (isLogin, redirectUrl) {
        if (isLogin === void 0) { isLogin = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var response, err_1, context;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        if (redirectUrl[0] === '/') {
                            redirectUrl = redirectUrl.substr(1);
                        }
                        return [4 /*yield*/, this.beginLoginAndGetCode(redirectUrl, isLogin)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, this.continueLoginWithCode(response)];
                    case 2:
                        err_1 = _a.sent();
                        context = { messageError: 'Ionic Keycloak Error: error by login' };
                        Object.assign(err_1, { context: context });
                        throw err_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param refresh
     */
    /**
     *
     * @param {?=} refresh
     * @return {?}
     */
    KeycloakAuthService.prototype.getToken = /**
     *
     * @param {?=} refresh
     * @return {?}
     */
    function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var authToken;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getToken()];
                    case 1:
                        authToken = _a.sent();
                        if (!authToken) {
                            return [2 /*return*/, null];
                        }
                        if (!(refresh || jwtHelperService.isTokenExpired(authToken.access_token, 10))) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.refresh()];
                    case 2:
                        authToken = _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/, authToken.access_token];
                }
            });
        });
    };
    /**
     * @param {?=} refresh
     * @return {?}
     */
    KeycloakAuthService.prototype.getTokenDecoded = /**
     * @param {?=} refresh
     * @return {?}
     */
    function (refresh) {
        if (refresh === void 0) { refresh = false; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var token;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getToken(refresh)];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, (/** @type {?} */ (jwtHelperService.decodeToken(token)))];
                }
            });
        });
    };
    /**
     * @private
     * @param {?=} redirectUrl
     * @return {?}
     */
    KeycloakAuthService.prototype.getLogoutUrl = /**
     * @private
     * @param {?=} redirectUrl
     * @return {?}
     */
    function (redirectUrl) {
        if (redirectUrl === void 0) { redirectUrl = this.router.url; }
        return this.keycloakInstance.createLogoutUrl({
            redirectUri: this.appPrefix + encodeURIComponent(redirectUrl)
        });
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.getKcJsonStructure = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var prom, config;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        prom = this.keycloakConfig();
                        if (!(prom instanceof Promise)) return [3 /*break*/, 2];
                        return [4 /*yield*/, prom];
                    case 1:
                        config = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        config = prom;
                        _a.label = 3;
                    case 3:
                        /**
                         * This line because the init method needs the clientId and url to work
                         * which are the resource and the auth-server-url respectively
                         */
                        config.clientId = config.resource;
                        config.url = config['auth-server-url'];
                        return [2 /*return*/, config];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    KeycloakAuthService.prototype.handleNewToken = /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    function (authToken) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var user;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!authToken) return [3 /*break*/, 2];
                        user = jwtHelperService.decodeToken(authToken.id_token || authToken.access_token);
                        if (!this.subject) {
                            this.subject = new BehaviorSubject(user);
                        }
                        this.subject.next(user);
                        return [4 /*yield*/, this.storage.setToken(authToken)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        if (!this.subject) {
                            this.subject = new BehaviorSubject(null);
                        }
                        this.subject.next(null);
                        return [4 /*yield*/, this.storage.setToken(null)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} uri
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    KeycloakAuthService.prototype.createPostRequest = /**
     * @private
     * @param {?} uri
     * @param {?} body
     * @param {?=} options
     * @return {?}
     */
    function (uri, body, options) {
        return this.http.post(uri, body, options).toPromise();
    };
    /**
     * @private
     * @param {?} refreshToken
     * @return {?}
     */
    KeycloakAuthService.prototype.getRefreshParams = /**
     * @private
     * @param {?} refreshToken
     * @return {?}
     */
    function (refreshToken) {
        /** @type {?} */
        var params = new HttpParams()
            .set('grant_type', 'refresh_token')
            .set('refresh_token', refreshToken)
            .set('client_id', encodeURIComponent(this.keycloakInstance.clientId));
        /** @type {?} */
        var secret = this.keycloakInstance.clientSecret;
        if (secret) {
            return params
                .set('client_secret', encodeURIComponent(secret));
        }
        return params;
    };
    /**
     * @private
     * @param {?} code
     * @param {?} redirectUrl
     * @return {?}
     */
    KeycloakAuthService.prototype.getAccessTokenParams = /**
     * @private
     * @param {?} code
     * @param {?} redirectUrl
     * @return {?}
     */
    function (code, redirectUrl) {
        /** @type {?} */
        var redirectUri = new HttpParams()
            .set('grant_type', 'authorization_code')
            .set('code', code)
            .set('client_id', encodeURIComponent(this.keycloakInstance.clientId))
            .set('redirect_uri', redirectUrl);
        if (this.scope || (this.actualKeycloakConfig && this.actualKeycloakConfig.scope)) {
            redirectUri = redirectUri.set('scope', this.scope || this.actualKeycloakConfig.scope);
        }
        /** @type {?} */
        var secret = this.keycloakInstance.clientSecret;
        if (secret) {
            redirectUri = redirectUri.set('client_secret', encodeURIComponent(secret));
        }
        return redirectUri;
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.getTokenRequestHeaders = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var headers = new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded');
        /** @type {?} */
        var clientSecret = this.keycloakInstance.clientSecret;
        /** @type {?} */
        var clientId = this.keycloakInstance.clientId;
        if (clientId && clientSecret) {
            headers.set('Authorization', 'Basic ' + btoa(clientId + ':' + clientSecret));
        }
        return headers;
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.refresh = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var tokens, uri, headers, body, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 6]);
                        return [4 /*yield*/, this.storage.getToken()];
                    case 1:
                        tokens = _a.sent();
                        if (!tokens) return [3 /*break*/, 3];
                        if (!!this.isValidToken(tokens)) return [3 /*break*/, 3];
                        uri = this.getTokenUrl();
                        headers = this.getTokenRequestHeaders();
                        body = this.getRefreshParams(tokens.refresh_token);
                        return [4 /*yield*/, this.createPostRequest(uri, body, { headers: headers })];
                    case 2:
                        tokens = _a.sent();
                        _a.label = 3;
                    case 3:
                        this.handleNewToken(tokens);
                        return [2 /*return*/, tokens];
                    case 4:
                        e_1 = _a.sent();
                        return [4 /*yield*/, this.logout()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/, null];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.getTokenUrl = /**
     * @private
     * @return {?}
     */
    function () {
        return this.keycloakInstance.authServerUrl + "/realms/" + this.keycloakInstance.realm + "/protocol/openid-connect/token";
    };
    /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    KeycloakAuthService.prototype.isValidToken = /**
     * @private
     * @param {?} authToken
     * @return {?}
     */
    function (authToken) {
        if (!authToken) {
            return false;
        }
        return jwtHelperService.isTokenExpired(authToken.access_token, 10);
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.initKeycloakInstance = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var keycloakConfig;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getKcJsonStructure()];
                    case 1:
                        keycloakConfig = _a.sent();
                        this.actualKeycloakConfig = keycloakConfig;
                        this.keycloakInstance = Keycloak(keycloakConfig);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @return {?}
     */
    KeycloakAuthService.prototype.initKeycloak = /**
     * @private
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.initKeycloakInstance()];
                    case 1:
                        _a.sent();
                        this.keycloakInstance
                            .init({
                            adapter: 'cordova-native',
                            redirectUri: this.appPrefix + '/'
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} path
     * @param {?=} login
     * @return {?}
     */
    KeycloakAuthService.prototype.beginLoginAndGetCode = /**
     * @private
     * @param {?} path
     * @param {?=} login
     * @return {?}
     */
    function (path, login) {
        if (login === void 0) { login = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options, url;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        path = this.appPrefix + "/" + path;
                        return [4 /*yield*/, this.storage.setToken(null)];
                    case 1:
                        _a.sent();
                        options = {
                            redirectUri: path
                        };
                        url = login
                            ? this.keycloakInstance.createLoginUrl(options)
                            : this.keycloakInstance.createRegisterUrl(options);
                        return [4 /*yield*/, this.browserTab.isAvailable()];
                    case 2:
                        if (_a.sent()) {
                            this.browserTab.openUrl(url);
                        }
                        else {
                            this.inAppBrowser.create(url, '_system');
                        }
                        return [2 /*return*/, new Promise((/**
                             * @param {?} resolve
                             * @param {?} reject
                             * @return {?}
                             */
                            function (resolve, reject) {
                                /** @type {?} */
                                var sub = _this.deepLinkService
                                    .params()
                                    .subscribe((/**
                                 * @param {?} code
                                 * @return {?}
                                 */
                                function (code) {
                                    resolve({ code: code, redirectUri: path });
                                    sub.unsubscribe();
                                }), (/**
                                 * @param {?} error
                                 * @return {?}
                                 */
                                function (error) {
                                    reject(error);
                                    sub.unsubscribe();
                                }));
                            }))];
                }
            });
        });
    };
    /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    KeycloakAuthService.prototype.continueLoginWithCode = /**
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var code = _a.code, redirectUrl = _a.redirectUri;
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var uri, body, headers;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                this.browserTab.close()
                    .catch((/**
                 * @param {?=} err
                 * @return {?}
                 */
                function (err) {
                    if (err === void 0) { err = {}; }
                    /** @type {?} */
                    var context = { message: 'Error while closing the browser' };
                    console.log(context.message, err);
                    Object.assign(err, { context: context });
                    throw err;
                }));
                uri = this.getTokenUrl();
                body = this.getAccessTokenParams(code, redirectUrl);
                headers = this.getTokenRequestHeaders();
                return [2 /*return*/, this.createPostRequest(uri, body, { headers: headers })
                        .then((/**
                     * @param {?} authToken
                     * @return {?}
                     */
                    function (authToken) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        return tslib_1.__generator(this, function (_a) {
                            this.handleNewToken(authToken);
                            return [2 /*return*/, authToken];
                        });
                    }); }))];
            });
        });
    };
    /** @nocollapse */
    KeycloakAuthService.ctorParameters = function () { return [
        { type: DeepLinkConfig, decorators: [{ type: Inject, args: [DEEP_LINKING_OPTIONS,] }] },
        { type: KcConfig, decorators: [{ type: Inject, args: [KEYCLOAK_OPTIONS,] }] },
        { type: HttpClient },
        { type: BrowserTab },
        { type: Router },
        { type: StorageService },
        { type: InAppBrowser },
        { type: DeepLinkService }
    ]; };
KeycloakAuthService.ɵfac = function KeycloakAuthService_Factory(t) { return new (t || KeycloakAuthService)(ɵngcc0.ɵɵinject(DEEP_LINKING_OPTIONS), ɵngcc0.ɵɵinject(KEYCLOAK_OPTIONS), ɵngcc0.ɵɵinject(ɵngcc1.HttpClient), ɵngcc0.ɵɵinject(ɵngcc2.BrowserTab), ɵngcc0.ɵɵinject(ɵngcc3.Router), ɵngcc0.ɵɵinject(ɵngcc4.StorageService), ɵngcc0.ɵɵinject(ɵngcc5.InAppBrowser), ɵngcc0.ɵɵinject(ɵngcc6.DeepLinkService)); };
KeycloakAuthService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KeycloakAuthService, factory: function (t) { return KeycloakAuthService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeycloakAuthService, [{
        type: Injectable
    }], function () { return [{ type: ɵngcc7.DeepLinkConfig, decorators: [{
                type: Inject,
                args: [DEEP_LINKING_OPTIONS]
            }] }, { type: ɵngcc8.KcConfig, decorators: [{
                type: Inject,
                args: [KEYCLOAK_OPTIONS]
            }] }, { type: ɵngcc1.HttpClient }, { type: ɵngcc2.BrowserTab }, { type: ɵngcc3.Router }, { type: ɵngcc4.StorageService }, { type: ɵngcc5.InAppBrowser }, { type: ɵngcc6.DeepLinkService }]; }, null); })();
    return KeycloakAuthService;
}());
export { KeycloakAuthService };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2xvYWstYXV0aC5zZXJ2aWNlLmpzIiwic291cmNlcyI6WyJAY21vdGlvbi9pb25pYy1rZXljbG9hay1hdXRoL2xpYi9zZXJ2aWNlL2tleWNsb2FrLWF1dGguc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUlBLE9BQU8sRUFBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pELE9BQU8sRUFBQyxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3pFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDakQsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxlQUFlLEVBQWEsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxLQUFLLFNBQVMsTUFBTSxhQUFhLENBQUM7QUFFekMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGtDQUFrQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUV2QyxPQUFPLEVBQW9CLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRS9ELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUl6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxnREFBZ0QsQ0FBQztBQUNwRjtBQUM2Rjs7Ozs7Ozs7OztBQUM3RSxJQUFWLFFBQVEsR0FBRyxTQUFTO0FBQzFCO0FBQWlCLElBQVgsZ0JBQWdCLEdBQXFCLElBQUksZ0JBQWdCLEVBQUU7QUFFakU7QUFHSyxJQU9ILDZCQUNn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QUFpQjtBQUNwQztBQUFRLElBRFIsc0NBQWlEO0FBQ25EO0FBQVE7QUFDUjtBQUFnQjtBQUFRLElBRHRCLG9DQUFzQjtBQUN4QjtBQUFRO0FBQWlCO0FBQ3RCO0FBQVEsSUFEVCx3Q0FBbUM7QUFDckM7QUFBUTtBQUFpQjtBQUFnQjtBQUFRLElBQS9DLDZDQUFtRDtBQUNyRDtBQUFRO0FBQWlCO0FBQWdCO0FBQVEsSUFBL0MsbURBQW9EO0FBQ3REO0FBQVE7QUFBaUI7QUFBZ0I7QUFBUSxJQUEvQywrQ0FBcUQ7QUFDdkQ7QUFDTztBQUNFO0FBQWtCO0FBQVEsSUFFL0IsbUNBQTBCO0FBQUM7QUFDeEI7QUFBaUI7QUFDcEI7QUFBUSxJQURSLHlDQUFnQztBQUFDO0FBQzlCO0FBQWlCO0FBQ1o7QUFBUSxJQURoQixxQ0FBd0I7QUFBQztBQUN0QjtBQUFpQjtBQUNyQjtBQUFRLElBRFAsc0NBQWlDO0FBQUM7QUFDL0I7QUFBaUI7QUFDeEI7QUFBUSxJQURKLDJDQUFvQztBQUFDO0FBQ2xDO0FBQWlCO0FBQWtCO0FBQ3hDLElBREUsOENBQTBDO0FBQUM7QUFDOUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQ29weXJpZ2h0IChjKSAyMDE5LiBUaGlzIENvZGUgaXMgdW5kZXIgbGljZW5zZSBhbmQgYmVsb25ncyB0byBDb2RpbmcgTW90aW9uXG4gKi9cblxuaW1wb3J0IHtJbmplY3QsIEluamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHtEZWVwTGlua1NlcnZpY2V9IGZyb20gJy4vZGVlcC1saW5rLnNlcnZpY2UnO1xuaW1wb3J0IHtTdG9yYWdlU2VydmljZX0gZnJvbSAnLi9zdG9yYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtCcm93c2VyVGFifSBmcm9tICdAaW9uaWMtbmF0aXZlL2Jyb3dzZXItdGFiL25neCc7XG5pbXBvcnQge0p3dEhlbHBlclNlcnZpY2V9IGZyb20gJ0BhdXRoMC9hbmd1bGFyLWp3dCc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQgKiBhcyBLZXljbG9ha18gZnJvbSAna2V5Y2xvYWstanMnO1xuaW1wb3J0IHtLZXljbG9ha0xvZ2luT3B0aW9uc30gZnJvbSAna2V5Y2xvYWstanMnO1xuaW1wb3J0IHtJbkFwcEJyb3dzZXJ9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW4tYXBwLWJyb3dzZXIvbmd4JztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtJRFRva2VuRGVjb2RlZH0gZnJvbSAnLi4vbW9kZWwvaWQtdG9rZW4tZGVjb2RlZCc7XG5pbXBvcnQge0ZldGNoS2V5Y2xvYWtKU09OLCBLY0NvbmZpZ30gZnJvbSAnLi4vbW9kZWwva2MtY29uZmlnJztcbmltcG9ydCB7S2V5Y2xvYWtKc29uU3RydWN0dXJlfSBmcm9tICcuLi9tb2RlbC9rZXljbG9hay1qc29uLXN0cnVjdHVyZSc7XG5pbXBvcnQge0RlZXBMaW5rQ29uZmlnfSBmcm9tICcuLi9tb2RlbC9kZWVwLWxpbmstY29uZmlnJztcbmltcG9ydCB7QXV0aFRva2VufSBmcm9tICcuLi9tb2RlbC9hdXRoLXRva2VuJztcbmltcG9ydCB7VG9rZW5EZWNvZGVkfSBmcm9tICcuLi9tb2RlbC90b2tlbi1kZWNvZGVkJztcbmltcG9ydCB7S2V5Y2xvYWtMb2dpblJlc3BvbnNlfSBmcm9tICcuLi9tb2RlbC9rZXljbG9hay1sb2dpbi1yZXNwb25zZSc7XG5pbXBvcnQge0tFWUNMT0FLX09QVElPTlN9IGZyb20gJy4uL2NvbnRhbnQva2MtaW5qZWN0aW9uLXRva2VuJztcbmltcG9ydCB7REVFUF9MSU5LSU5HX09QVElPTlN9IGZyb20gJy4uL2NvbnRhbnQvZGVlcC1saW5raW5nLWNvbmZpZy1pbmplY3Rpb24tdG9rZW4nO1xuXG4vLyBXb3JrYXJvdW5kIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL25nLXBhY2thZ3IvbmctcGFja2Fnci9pc3N1ZXMvMzQzI2lzc3VlY29tbWVudC0zNTA5NjU0NDVcbmNvbnN0IEtleWNsb2FrID0gS2V5Y2xvYWtfO1xuY29uc3Qgand0SGVscGVyU2VydmljZTogSnd0SGVscGVyU2VydmljZSA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXljbG9ha0F1dGhTZXJ2aWNlIHtcblxuICBwcml2YXRlIHN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxJRFRva2VuRGVjb2RlZD47XG4gIHByaXZhdGUgc2NvcGU6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBhcHBQcmVmaXg6IHN0cmluZztcbiAgcHJpdmF0ZSByZWFkb25seSBrZXljbG9ha0NvbmZpZzogRmV0Y2hLZXljbG9ha0pTT047XG4gIHByaXZhdGUgYWN0dWFsS2V5Y2xvYWtDb25maWc6IEtleWNsb2FrSnNvblN0cnVjdHVyZTtcbiAgcHJpdmF0ZSBrZXljbG9ha0luc3RhbmNlOiBLZXljbG9ha18uS2V5Y2xvYWtJbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERFRVBfTElOS0lOR19PUFRJT05TKSBkZWVwTGlua0NvbmZpZzogRGVlcExpbmtDb25maWcsXG4gICAgQEluamVjdChLRVlDTE9BS19PUFRJT05TKSBrY0NvbmZpZzogS2NDb25maWcsXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIGJyb3dzZXJUYWI6IEJyb3dzZXJUYWIsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgIHByb3RlY3RlZCBzdG9yYWdlOiBTdG9yYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgaW5BcHBCcm93c2VyOiBJbkFwcEJyb3dzZXIsXG4gICAgcHJvdGVjdGVkIGRlZXBMaW5rU2VydmljZTogRGVlcExpbmtTZXJ2aWNlLFxuICApIHtcbiAgICB0aGlzLnNjb3BlID0ga2NDb25maWcuc2NvcGU7XG4gICAgdGhpcy5rZXljbG9ha0NvbmZpZyA9IGtjQ29uZmlnLmpzb25Db25maWc7XG4gICAgdGhpcy5hcHBQcmVmaXggPSBgJHtkZWVwTGlua0NvbmZpZy5kZWVwTGlua2luZ1NjaGVtZX06Ly9hcHBgO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwdWJsaWMgdXNlcigpOiBPYnNlcnZhYmxlPElEVG9rZW5EZWNvZGVkPiB7XG4gICAgaWYgKCF0aGlzLnN1YmplY3QpIHtcbiAgICAgIHRoaXMuc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SURUb2tlbkRlY29kZWQ+KG51bGwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqL1xuICBwdWJsaWMgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmluaXRLZXljbG9haygpO1xuICAgIHJldHVybiB0aGlzLnJlZnJlc2goKTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ291dCgpIHtcbiAgICBhd2FpdCB0aGlzLmhhbmRsZU5ld1Rva2VuKG51bGwpO1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRMb2dvdXRVcmwoKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGF3YWl0IHRoaXMuYnJvd3NlclRhYi5pc0F2YWlsYWJsZSgpKSB7XG4gICAgICAgIHRoaXMuYnJvd3NlclRhYi5vcGVuVXJsKHVybClcbiAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmJyb3dzZXJUYWIuY2xvc2UoKSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHJlamVjdChlcnIpKTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgYnJvd3NlciA9IHRoaXMuaW5BcHBCcm93c2VyLmNyZWF0ZSh1cmwsICdfc3lzdGVtJyk7XG4gICAgICAgIGNvbnN0IHN1YiA9IGJyb3dzZXIub24oJ2xvYWRzdG9wJylcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGJyb3dzZXIuY2xvc2UoKTtcbiAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH0sIGVyciA9PiB7XG4gICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBpc0xvZ2luXG4gICAqIEBwYXJhbSByZWRpcmVjdFVybFxuICAgKi9cbiAgcHVibGljIGFzeW5jIGxvZ2luKGlzTG9naW46IGJvb2xlYW4gPSB0cnVlLCByZWRpcmVjdFVybD86IHN0cmluZyk6IFByb21pc2U8QXV0aFRva2VuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChyZWRpcmVjdFVybFswXSA9PT0gJy8nKSB7XG4gICAgICAgIHJlZGlyZWN0VXJsID0gcmVkaXJlY3RVcmwuc3Vic3RyKDEpO1xuICAgICAgfVxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmJlZ2luTG9naW5BbmRHZXRDb2RlKHJlZGlyZWN0VXJsLCBpc0xvZ2luKTtcbiAgICAgIHJldHVybiB0aGlzLmNvbnRpbnVlTG9naW5XaXRoQ29kZShyZXNwb25zZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zdCBjb250ZXh0ID0ge21lc3NhZ2VFcnJvcjogJ0lvbmljIEtleWNsb2FrIEVycm9yOiBlcnJvciBieSBsb2dpbid9O1xuICAgICAgT2JqZWN0LmFzc2lnbihlcnIsIHtjb250ZXh0fSk7XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICB9XG5cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHJlZnJlc2hcbiAgICovXG4gIHB1YmxpYyBhc3luYyBnZXRUb2tlbihyZWZyZXNoID0gZmFsc2UpIHtcbiAgICBsZXQgYXV0aFRva2VuID0gYXdhaXQgdGhpcy5zdG9yYWdlLmdldFRva2VuKCk7XG4gICAgaWYgKCFhdXRoVG9rZW4pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAocmVmcmVzaCB8fCBqd3RIZWxwZXJTZXJ2aWNlLmlzVG9rZW5FeHBpcmVkKGF1dGhUb2tlbi5hY2Nlc3NfdG9rZW4sIDEwKSkge1xuICAgICAgYXV0aFRva2VuID0gYXdhaXQgdGhpcy5yZWZyZXNoKCk7XG4gICAgfVxuICAgIHJldHVybiBhdXRoVG9rZW4uYWNjZXNzX3Rva2VuO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGdldFRva2VuRGVjb2RlZChyZWZyZXNoID0gZmFsc2UpOiBQcm9taXNlPFRva2VuRGVjb2RlZD4ge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5nZXRUb2tlbihyZWZyZXNoKTtcbiAgICByZXR1cm4gand0SGVscGVyU2VydmljZS5kZWNvZGVUb2tlbih0b2tlbikgYXMgVG9rZW5EZWNvZGVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRMb2dvdXRVcmwocmVkaXJlY3RVcmwgPSB0aGlzLnJvdXRlci51cmwpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY3JlYXRlTG9nb3V0VXJsKHtcbiAgICAgIHJlZGlyZWN0VXJpOiB0aGlzLmFwcFByZWZpeCArIGVuY29kZVVSSUNvbXBvbmVudChyZWRpcmVjdFVybClcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZ2V0S2NKc29uU3RydWN0dXJlKCk6IFByb21pc2U8S2V5Y2xvYWtKc29uU3RydWN0dXJlPiB7XG4gICAgY29uc3QgcHJvbSA9IHRoaXMua2V5Y2xvYWtDb25maWcoKTtcbiAgICBsZXQgY29uZmlnOiBLZXljbG9ha0pzb25TdHJ1Y3R1cmU7XG4gICAgaWYgKHByb20gaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICBjb25maWcgPSBhd2FpdCBwcm9tO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25maWcgPSBwcm9tO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGxpbmUgYmVjYXVzZSB0aGUgaW5pdCBtZXRob2QgbmVlZHMgdGhlIGNsaWVudElkIGFuZCB1cmwgdG8gd29ya1xuICAgICAqIHdoaWNoIGFyZSB0aGUgcmVzb3VyY2UgYW5kIHRoZSBhdXRoLXNlcnZlci11cmwgcmVzcGVjdGl2ZWx5XG4gICAgICovXG4gICAgY29uZmlnLmNsaWVudElkID0gY29uZmlnLnJlc291cmNlO1xuICAgIGNvbmZpZy51cmwgPSBjb25maWdbJ2F1dGgtc2VydmVyLXVybCddO1xuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGhhbmRsZU5ld1Rva2VuKGF1dGhUb2tlbjogQXV0aFRva2VuKSB7XG4gICAgaWYgKGF1dGhUb2tlbikge1xuICAgICAgY29uc3QgdXNlcjogSURUb2tlbkRlY29kZWQgPSBqd3RIZWxwZXJTZXJ2aWNlLmRlY29kZVRva2VuKGF1dGhUb2tlbi5pZF90b2tlbiB8fCBhdXRoVG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgIGlmICghdGhpcy5zdWJqZWN0KSB7XG4gICAgICAgIHRoaXMuc3ViamVjdCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8SURUb2tlbkRlY29kZWQ+KHVzZXIpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdWJqZWN0Lm5leHQodXNlcik7XG4gICAgICBhd2FpdCB0aGlzLnN0b3JhZ2Uuc2V0VG9rZW4oYXV0aFRva2VuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLnN1YmplY3QpIHtcbiAgICAgICAgdGhpcy5zdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxJRFRva2VuRGVjb2RlZD4obnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnN1YmplY3QubmV4dChudWxsKTtcbiAgICAgIGF3YWl0IHRoaXMuc3RvcmFnZS5zZXRUb2tlbihudWxsKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVBvc3RSZXF1ZXN0KHVyaTogc3RyaW5nLCBib2R5OiBhbnksIG9wdGlvbnM/OiB7XG4gICAgaGVhZGVycz86IEh0dHBIZWFkZXJzIHwge1xuICAgICAgW2hlYWRlcjogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfTtcbiAgfSkge1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxBdXRoVG9rZW4+KHVyaSwgYm9keSwgb3B0aW9ucykudG9Qcm9taXNlKCk7XG4gIH1cblxuICBwcml2YXRlIGdldFJlZnJlc2hQYXJhbXMocmVmcmVzaFRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdncmFudF90eXBlJywgJ3JlZnJlc2hfdG9rZW4nKVxuICAgICAgLnNldCgncmVmcmVzaF90b2tlbicsIHJlZnJlc2hUb2tlbilcbiAgICAgIC5zZXQoJ2NsaWVudF9pZCcsIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50SWQpKTtcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50U2VjcmV0O1xuICAgIGlmIChzZWNyZXQpIHtcbiAgICAgIHJldHVybiBwYXJhbXNcbiAgICAgICAgLnNldCgnY2xpZW50X3NlY3JldCcsIGVuY29kZVVSSUNvbXBvbmVudChzZWNyZXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWNjZXNzVG9rZW5QYXJhbXMoY29kZTogc3RyaW5nLCByZWRpcmVjdFVybDogc3RyaW5nKSB7XG4gICAgbGV0IHJlZGlyZWN0VXJpID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnZ3JhbnRfdHlwZScsICdhdXRob3JpemF0aW9uX2NvZGUnKVxuICAgICAgLnNldCgnY29kZScsIGNvZGUpXG4gICAgICAuc2V0KCdjbGllbnRfaWQnLCBlbmNvZGVVUklDb21wb25lbnQodGhpcy5rZXljbG9ha0luc3RhbmNlLmNsaWVudElkKSlcbiAgICAgIC5zZXQoJ3JlZGlyZWN0X3VyaScsIHJlZGlyZWN0VXJsKTtcbiAgICBpZiAodGhpcy5zY29wZSB8fCAodGhpcy5hY3R1YWxLZXljbG9ha0NvbmZpZyAmJiB0aGlzLmFjdHVhbEtleWNsb2FrQ29uZmlnLnNjb3BlKSkge1xuICAgICAgcmVkaXJlY3RVcmkgPSByZWRpcmVjdFVyaS5zZXQoJ3Njb3BlJywgdGhpcy5zY29wZSB8fCB0aGlzLmFjdHVhbEtleWNsb2FrQ29uZmlnLnNjb3BlKTtcbiAgICB9XG5cbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50U2VjcmV0O1xuICAgIGlmIChzZWNyZXQpIHtcbiAgICAgIHJlZGlyZWN0VXJpID0gcmVkaXJlY3RVcmkuc2V0KCdjbGllbnRfc2VjcmV0JywgZW5jb2RlVVJJQ29tcG9uZW50KHNlY3JldCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVkaXJlY3RVcmk7XG4gIH1cblxuICBwcml2YXRlIGdldFRva2VuUmVxdWVzdEhlYWRlcnMoKSB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpXG4gICAgICAuc2V0KCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyk7XG5cbiAgICBjb25zdCBjbGllbnRTZWNyZXQgPSB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY2xpZW50U2VjcmV0O1xuICAgIGNvbnN0IGNsaWVudElkID0gdGhpcy5rZXljbG9ha0luc3RhbmNlLmNsaWVudElkO1xuICAgIGlmIChjbGllbnRJZCAmJiBjbGllbnRTZWNyZXQpIHtcbiAgICAgIGhlYWRlcnMuc2V0KCdBdXRob3JpemF0aW9uJywgJ0Jhc2ljICcgKyBidG9hKGNsaWVudElkICsgJzonICsgY2xpZW50U2VjcmV0KSk7XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZWZyZXNoKCk6IFByb21pc2U8QXV0aFRva2VuPiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB0b2tlbnM6IEF1dGhUb2tlbiA9IGF3YWl0IHRoaXMuc3RvcmFnZS5nZXRUb2tlbigpO1xuICAgICAgaWYgKHRva2Vucykge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZFRva2VuKHRva2VucykpIHtcbiAgICAgICAgICBjb25zdCB1cmkgPSB0aGlzLmdldFRva2VuVXJsKCk7XG4gICAgICAgICAgY29uc3QgaGVhZGVycyA9IHRoaXMuZ2V0VG9rZW5SZXF1ZXN0SGVhZGVycygpO1xuICAgICAgICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldFJlZnJlc2hQYXJhbXModG9rZW5zLnJlZnJlc2hfdG9rZW4pO1xuICAgICAgICAgIHRva2VucyA9IGF3YWl0IHRoaXMuY3JlYXRlUG9zdFJlcXVlc3QodXJpLCBib2R5LCB7aGVhZGVyc30pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLmhhbmRsZU5ld1Rva2VuKHRva2Vucyk7XG4gICAgICByZXR1cm4gdG9rZW5zO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGF3YWl0IHRoaXMubG9nb3V0KCk7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFRva2VuVXJsKCkge1xuICAgIHJldHVybiBgJHt0aGlzLmtleWNsb2FrSW5zdGFuY2UuYXV0aFNlcnZlclVybH0vcmVhbG1zLyR7dGhpcy5rZXljbG9ha0luc3RhbmNlLnJlYWxtfS9wcm90b2NvbC9vcGVuaWQtY29ubmVjdC90b2tlbmA7XG4gIH1cblxuICBwcml2YXRlIGlzVmFsaWRUb2tlbihhdXRoVG9rZW46IEF1dGhUb2tlbikge1xuICAgIGlmICghYXV0aFRva2VuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBqd3RIZWxwZXJTZXJ2aWNlLmlzVG9rZW5FeHBpcmVkKGF1dGhUb2tlbi5hY2Nlc3NfdG9rZW4sIDEwKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdEtleWNsb2FrSW5zdGFuY2UoKSB7XG4gICAgY29uc3Qga2V5Y2xvYWtDb25maWcgPSBhd2FpdCB0aGlzLmdldEtjSnNvblN0cnVjdHVyZSgpO1xuICAgIHRoaXMuYWN0dWFsS2V5Y2xvYWtDb25maWcgPSBrZXljbG9ha0NvbmZpZztcbiAgICB0aGlzLmtleWNsb2FrSW5zdGFuY2UgPSBLZXljbG9hayhrZXljbG9ha0NvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRLZXljbG9haygpIHtcbiAgICBhd2FpdCB0aGlzLmluaXRLZXljbG9ha0luc3RhbmNlKCk7XG5cbiAgICB0aGlzLmtleWNsb2FrSW5zdGFuY2VcbiAgICAgIC5pbml0KHtcbiAgICAgICAgYWRhcHRlcjogJ2NvcmRvdmEtbmF0aXZlJyxcbiAgICAgICAgcmVkaXJlY3RVcmk6IHRoaXMuYXBwUHJlZml4ICsgJy8nXG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgYmVnaW5Mb2dpbkFuZEdldENvZGUocGF0aDogc3RyaW5nLCBsb2dpbiA9IHRydWUpOiBQcm9taXNlPEtleWNsb2FrTG9naW5SZXNwb25zZT4ge1xuICAgIHBhdGggPSBgJHt0aGlzLmFwcFByZWZpeH0vJHtwYXRofWA7XG4gICAgYXdhaXQgdGhpcy5zdG9yYWdlLnNldFRva2VuKG51bGwpO1xuXG4gICAgY29uc3Qgb3B0aW9uczogS2V5Y2xvYWtMb2dpbk9wdGlvbnMgPSB7XG4gICAgICByZWRpcmVjdFVyaTogcGF0aFxuICAgIH07XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBsb2dpblxuICAgICAgPyB0aGlzLmtleWNsb2FrSW5zdGFuY2UuY3JlYXRlTG9naW5Vcmwob3B0aW9ucylcbiAgICAgIDogdGhpcy5rZXljbG9ha0luc3RhbmNlLmNyZWF0ZVJlZ2lzdGVyVXJsKG9wdGlvbnMpO1xuXG4gICAgaWYgKGF3YWl0IHRoaXMuYnJvd3NlclRhYi5pc0F2YWlsYWJsZSgpKSB7XG4gICAgICB0aGlzLmJyb3dzZXJUYWIub3BlblVybCh1cmwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmluQXBwQnJvd3Nlci5jcmVhdGUodXJsLCAnX3N5c3RlbScpO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxLZXljbG9ha0xvZ2luUmVzcG9uc2U+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHN1YiA9IHRoaXMuZGVlcExpbmtTZXJ2aWNlXG4gICAgICAgIC5wYXJhbXMoKVxuICAgICAgICAuc3Vic2NyaWJlKGNvZGUgPT4ge1xuICAgICAgICAgIHJlc29sdmUoe2NvZGUsIHJlZGlyZWN0VXJpOiBwYXRofSk7XG4gICAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY29udGludWVMb2dpbldpdGhDb2RlKHtjb2RlLCByZWRpcmVjdFVyaTogcmVkaXJlY3RVcmx9OiBLZXljbG9ha0xvZ2luUmVzcG9uc2UpOiBQcm9taXNlPEF1dGhUb2tlbj4ge1xuICAgIHRoaXMuYnJvd3NlclRhYi5jbG9zZSgpXG4gICAgICAuY2F0Y2goKGVyciA9IHt9KSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7bWVzc2FnZTogJ0Vycm9yIHdoaWxlIGNsb3NpbmcgdGhlIGJyb3dzZXInfTtcbiAgICAgICAgY29uc29sZS5sb2coY29udGV4dC5tZXNzYWdlLCBlcnIpO1xuICAgICAgICBPYmplY3QuYXNzaWduKGVyciwge2NvbnRleHR9KTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gICAgY29uc3QgdXJpID0gdGhpcy5nZXRUb2tlblVybCgpO1xuICAgIGNvbnN0IGJvZHkgPSB0aGlzLmdldEFjY2Vzc1Rva2VuUGFyYW1zKGNvZGUsIHJlZGlyZWN0VXJsKTtcbiAgICBjb25zdCBoZWFkZXJzID0gdGhpcy5nZXRUb2tlblJlcXVlc3RIZWFkZXJzKCk7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlUG9zdFJlcXVlc3QodXJpLCBib2R5LCB7aGVhZGVyc30pXG4gICAgICAudGhlbihhc3luYyBhdXRoVG9rZW4gPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZU5ld1Rva2VuKGF1dGhUb2tlbik7XG4gICAgICAgIHJldHVybiBhdXRoVG9rZW47XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=