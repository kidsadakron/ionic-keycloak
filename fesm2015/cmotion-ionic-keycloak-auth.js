import { InjectionToken, Injectable, Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController, Platform } from '@ionic/angular';
import { JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { __awaiter } from 'tslib';
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
const DEEP_LINKING_OPTIONS = new InjectionToken('DEEP_LINKING_OPTIONS');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const JWT_GET_AND_SETTER = new InjectionToken('JWT_GET_AND_SETTER');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const KEYCLOAK_OPTIONS = new InjectionToken('KEYCLOAK_OPTIONS');

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
class DeepLinkConfig {
}
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
class KcConfig {
}
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
class ModuleConfig {
}
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
class DeepLinkService {
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
DeepLinkService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
DeepLinkService.ctorParameters = () => [
    { type: NavController },
    { type: Deeplinks }
];
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
class StorageService {
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
        return __awaiter(this, void 0, void 0, function* () {
            return this.config.setToken(value);
        });
    }
    /**
     * @return {?}
     */
    getToken() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.config.getToken();
        });
    }
}
StorageService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
StorageService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] }
];
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
const Keycloak = Keycloak_;
/** @type {?} */
const jwtHelperService = new JwtHelperService();
class KeycloakAuthService {
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
        return __awaiter(this, void 0, void 0, function* () {
            yield this.initKeycloak();
            return this.refresh();
        });
    }
    /**
     *
     * @return {?}
     */
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.handleNewToken(null);
            /** @type {?} */
            const url = this.getLogoutUrl();
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            (resolve, reject) => __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
        return __awaiter(this, void 0, void 0, function* () {
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
            (authToken) => __awaiter(this, void 0, void 0, function* () {
                this.handleNewToken(authToken);
                return authToken;
            })));
        });
    }
}
KeycloakAuthService.decorators = [
    { type: Injectable }
];
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
class KcTokenInterceptorService extends JwtInterceptor {
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
KcTokenInterceptorService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
KcTokenInterceptorService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [JWT_GET_AND_SETTER,] }] },
    { type: KeycloakAuthService }
];
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
class IonicKeycloakAuthModule {
    /**
     * @param {?} platform
     * @param {?} authService
     * @param {?} deepLinkService
     * @param {?} parentModule
     */
    constructor(platform, authService, deepLinkService, parentModule) {
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
        () => this.authService.init()))
            .then((/**
         * @return {?}
         */
        () => this.deepLinkService.init()))
            .catch((/**
         * @param {?=} err
         * @return {?}
         */
        (err = {}) => {
            /** @type {?} */
            const context = { messageError: 'Ionic Keycloak Error: could not initialize the app' };
            Object.assign(err, { context });
            throw err;
        }));
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = new ModuleConfig()) {
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
    }
}
IonicKeycloakAuthModule.decorators = [
    { type: NgModule }
];
/** @nocollapse */
IonicKeycloakAuthModule.ctorParameters = () => [
    { type: Platform },
    { type: KeycloakAuthService },
    { type: DeepLinkService },
    { type: IonicKeycloakAuthModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
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
