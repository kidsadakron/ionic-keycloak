import { InjectionToken, Injectable, Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { __read, __awaiter, __generator, __extends } from 'tslib';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController, Platform } from '@ionic/angular';
import { JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { HttpParams, HttpHeaders, HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserTab } from '@ionic-native/browser-tab/ngx';
import * as Keycloak_ from 'keycloak-js';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@ionic/angular';
import * as ɵngcc2 from '@ionic-native/deeplinks/ngx';
import * as ɵngcc3 from '@angular/common/http';
import * as ɵngcc4 from '@ionic-native/browser-tab/ngx';
import * as ɵngcc5 from '@angular/router';
import * as ɵngcc6 from '@ionic-native/in-app-browser/ngx';
var DEEP_LINKING_OPTIONS = new InjectionToken('DEEP_LINKING_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var JWT_GET_AND_SETTER = new InjectionToken('JWT_GET_AND_SETTER');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var KEYCLOAK_OPTIONS = new InjectionToken('KEYCLOAK_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function AuthToken() { }
if (false) {
    /** @type {?} */
    AuthToken.prototype.access_token;
    /** @type {?} */
    AuthToken.prototype.expires_in;
    /** @type {?} */
    AuthToken.prototype.id_token;
    /* Skipping unnamed member:
    'not-before-policy': number;*/
    /** @type {?} */
    AuthToken.prototype.refresh_expires_in;
    /** @type {?} */
    AuthToken.prototype.refresh_token;
    /** @type {?} */
    AuthToken.prototype.scope;
    /** @type {?} */
    AuthToken.prototype.session_state;
    /** @type {?} */
    AuthToken.prototype.token_type;
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
var DeepLinkConfig = /** @class */ (function () {
    function DeepLinkConfig() {
    }
    return DeepLinkConfig;
}());
if (false) {
    /** @type {?} */
    DeepLinkConfig.prototype.deepLinkingScheme;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function IDTokenDecoded() { }
if (false) {
    /** @type {?} */
    IDTokenDecoded.prototype.jti;
    /** @type {?} */
    IDTokenDecoded.prototype.exp;
    /** @type {?} */
    IDTokenDecoded.prototype.nbf;
    /** @type {?} */
    IDTokenDecoded.prototype.iat;
    /** @type {?} */
    IDTokenDecoded.prototype.iss;
    /** @type {?} */
    IDTokenDecoded.prototype.aud;
    /** @type {?} */
    IDTokenDecoded.prototype.sub;
    /** @type {?} */
    IDTokenDecoded.prototype.typ;
    /** @type {?} */
    IDTokenDecoded.prototype.azp;
    /** @type {?} */
    IDTokenDecoded.prototype.nonce;
    /** @type {?} */
    IDTokenDecoded.prototype.auth_time;
    /** @type {?} */
    IDTokenDecoded.prototype.session_state;
    /** @type {?} */
    IDTokenDecoded.prototype.acr;
    /** @type {?} */
    IDTokenDecoded.prototype.email_verified;
    /** @type {?} */
    IDTokenDecoded.prototype.name;
    /** @type {?} */
    IDTokenDecoded.prototype.preferred_username;
    /** @type {?} */
    IDTokenDecoded.prototype.given_name;
    /** @type {?} */
    IDTokenDecoded.prototype.family_name;
    /** @type {?} */
    IDTokenDecoded.prototype.email;
    /** @type {?} */
    IDTokenDecoded.prototype.avatarUrl;
    /** @type {?} */
    IDTokenDecoded.prototype.mobileNumber;
    /** @type {?} */
    IDTokenDecoded.prototype.description;
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function JwtConfig() { }
if (false) {
    /** @type {?} */
    JwtConfig.prototype.setToken;
    /** @type {?} */
    JwtConfig.prototype.getToken;
    /** @type {?|undefined} */
    JwtConfig.prototype.headerName;
    /** @type {?|undefined} */
    JwtConfig.prototype.authScheme;
    /** @type {?|undefined} */
    JwtConfig.prototype.whitelistedDomains;
    /** @type {?|undefined} */
    JwtConfig.prototype.blacklistedRoutes;
    /** @type {?|undefined} */
    JwtConfig.prototype.throwNoTokenError;
    /** @type {?|undefined} */
    JwtConfig.prototype.skipWhenExpired;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
var KcConfig = /** @class */ (function () {
    function KcConfig() {
    }
    return KcConfig;
}());
if (false) {
    /**
     * The same as the contain of the keycloak.json
     * Example: jsonConfig: () => require('/path/to/keycloak.json')
     * @type {?}
     */
    KcConfig.prototype.jsonConfig;
    /**
     * Example: scope='openid email offline_access address profile', the value would be
     * 'openid email offline_access address profile' here
     * @type {?}
     */
    KcConfig.prototype.scope;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function KeyValueStr() { }

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function KeycloakJsonStructure() { }
if (false) {
    /** @type {?|undefined} */
    KeycloakJsonStructure.prototype.realm;
    /* Skipping unnamed member:
    'auth-server-url'?: string;*/
    /* Skipping unnamed member:
    'ssl-required'?: string;*/
    /** @type {?|undefined} */
    KeycloakJsonStructure.prototype.resource;
    /** @type {?|undefined} */
    KeycloakJsonStructure.prototype.clientId;
    /** @type {?|undefined} */
    KeycloakJsonStructure.prototype.url;
    /** @type {?|undefined} */
    KeycloakJsonStructure.prototype.credentials;
    /* Skipping unnamed member:
    'confidential-port'?: number;*/
    /* Skipping unhandled member: [key: string]: any;*/
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
/**
 * @record
 */
function KeycloakLoginResponse() { }
if (false) {
    /** @type {?} */
    KeycloakLoginResponse.prototype.code;
    /** @type {?} */
    KeycloakLoginResponse.prototype.redirectUri;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 */
var ModuleConfig = /** @class */ (function () {
    function ModuleConfig() {
    }
    return ModuleConfig;
}());
if (false) {
    /** @type {?} */
    ModuleConfig.prototype.kcOptionsProvider;
    /** @type {?} */
    ModuleConfig.prototype.jwtConfigProvider;
    /** @type {?} */
    ModuleConfig.prototype.keycloakConfig;
    /** @type {?} */
    ModuleConfig.prototype.deepLinksConfig;
    /** @type {?} */
    ModuleConfig.prototype.jwtModuleOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TokenDecoded() { }
if (false) {
    /** @type {?} */
    TokenDecoded.prototype.jti;
    /** @type {?} */
    TokenDecoded.prototype.exp;
    /** @type {?} */
    TokenDecoded.prototype.nbf;
    /** @type {?} */
    TokenDecoded.prototype.iat;
    /** @type {?} */
    TokenDecoded.prototype.iss;
    /** @type {?} */
    TokenDecoded.prototype.aud;
    /** @type {?} */
    TokenDecoded.prototype.sub;
    /** @type {?} */
    TokenDecoded.prototype.typ;
    /** @type {?} */
    TokenDecoded.prototype.azp;
    /** @type {?} */
    TokenDecoded.prototype.nonce;
    /** @type {?} */
    TokenDecoded.prototype.auth_time;
    /** @type {?} */
    TokenDecoded.prototype.session_state;
    /** @type {?} */
    TokenDecoded.prototype.acr;
    /* Skipping unnamed member:
    'allowed-origins': string[];*/
    /** @type {?} */
    TokenDecoded.prototype.realm_access;
    /** @type {?} */
    TokenDecoded.prototype.resource_access;
    /** @type {?} */
    TokenDecoded.prototype.scope;
    /** @type {?} */
    TokenDecoded.prototype.email_verified;
    /** @type {?} */
    TokenDecoded.prototype.name;
    /** @type {?} */
    TokenDecoded.prototype.preferred_username;
    /** @type {?} */
    TokenDecoded.prototype.given_name;
    /** @type {?} */
    TokenDecoded.prototype.family_name;
    /** @type {?} */
    TokenDecoded.prototype.email;
}
/**
 * @record
 */
function RealmAccess() { }
if (false) {
    /** @type {?} */
    RealmAccess.prototype.roles;
}
/**
 * @record
 */
function ResourceAccess() { }
if (false) {
    /** @type {?} */
    ResourceAccess.prototype.account;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
            var _b = __read(hash.split('='), 2), key = _b[0], val = _b[1];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    StorageService.prototype.config;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// Workaround from https://github.com/ng-packagr/ng-packagr/issues/343#issuecomment-350965445
/** @type {?} */
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var url;
            var _this = this;
            return __generator(this, function (_a) {
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
                            function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                var browser_1, sub_1;
                                var _this = this;
                                return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var response, err_1, context;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var authToken;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var prom, config;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var tokens, uri, headers, body, e_1;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var keycloakConfig;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var options, url;
            var _this = this;
            return __generator(this, function (_a) {
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
        return __awaiter(this, void 0, void 0, function () {
            var uri, body, headers;
            var _this = this;
            return __generator(this, function (_b) {
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
                    function (authToken) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
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
KeycloakAuthService.ɵfac = function KeycloakAuthService_Factory(t) { return new (t || KeycloakAuthService)(ɵngcc0.ɵɵinject(DEEP_LINKING_OPTIONS), ɵngcc0.ɵɵinject(KEYCLOAK_OPTIONS), ɵngcc0.ɵɵinject(ɵngcc3.HttpClient), ɵngcc0.ɵɵinject(ɵngcc4.BrowserTab), ɵngcc0.ɵɵinject(ɵngcc5.Router), ɵngcc0.ɵɵinject(StorageService), ɵngcc0.ɵɵinject(ɵngcc6.InAppBrowser), ɵngcc0.ɵɵinject(DeepLinkService)); };
KeycloakAuthService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KeycloakAuthService, factory: function (t) { return KeycloakAuthService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KeycloakAuthService, [{
        type: Injectable
    }], function () { return [{ type: DeepLinkConfig, decorators: [{
                type: Inject,
                args: [DEEP_LINKING_OPTIONS]
            }] }, { type: KcConfig, decorators: [{
                type: Inject,
                args: [KEYCLOAK_OPTIONS]
            }] }, { type: ɵngcc3.HttpClient }, { type: ɵngcc4.BrowserTab }, { type: ɵngcc5.Router }, { type: StorageService }, { type: ɵngcc6.InAppBrowser }, { type: DeepLinkService }]; }, null); })();
    return KeycloakAuthService;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var KcTokenInterceptorService = /** @class */ (function (_super) {
    __extends(KcTokenInterceptorService, _super);
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
KcTokenInterceptorService.ɵfac = function KcTokenInterceptorService_Factory(t) { return new (t || KcTokenInterceptorService)(ɵngcc0.ɵɵinject(JWT_GET_AND_SETTER), ɵngcc0.ɵɵinject(KeycloakAuthService)); };
KcTokenInterceptorService.ɵprov = ɵngcc0.ɵɵdefineInjectable({ token: KcTokenInterceptorService, factory: function (t) { return KcTokenInterceptorService.ɵfac(t); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(KcTokenInterceptorService, [{
        type: Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [JWT_GET_AND_SETTER]
            }] }, { type: KeycloakAuthService }]; }, null); })();
    return KcTokenInterceptorService;
}(JwtInterceptor));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
IonicKeycloakAuthModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function IonicKeycloakAuthModule_Factory(t) { return new (t || IonicKeycloakAuthModule)(ɵngcc0.ɵɵinject(ɵngcc1.Platform), ɵngcc0.ɵɵinject(KeycloakAuthService), ɵngcc0.ɵɵinject(DeepLinkService), ɵngcc0.ɵɵinject(IonicKeycloakAuthModule, 12)); } });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(IonicKeycloakAuthModule, [{
        type: NgModule
    }], function () { return [{ type: ɵngcc1.Platform }, { type: KeycloakAuthService }, { type: DeepLinkService }, { type: IonicKeycloakAuthModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();
    return IonicKeycloakAuthModule;
}());
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DEEP_LINKING_OPTIONS, DeepLinkConfig, DeepLinkService, IonicKeycloakAuthModule, JWT_GET_AND_SETTER, KEYCLOAK_OPTIONS, KcConfig, KcTokenInterceptorService, KeycloakAuthService, ModuleConfig, StorageService };

//# sourceMappingURL=cmotion-ionic-keycloak-auth.js.map