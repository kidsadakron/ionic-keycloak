/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/*
 * Copyright (c) 2019. This Code is under license and belongs to Coding Motion
 *
 *  Public API Surface of ionic-keycloak-auth
 */
export { DEEP_LINKING_OPTIONS } from './lib/contant/deep-linking-config-injection-token';
export { JWT_GET_AND_SETTER } from './lib/contant/jwt-injection-token';
export { KEYCLOAK_OPTIONS } from './lib/contant/kc-injection-token';
export {} from './lib/model/auth-token';
export { DeepLinkConfig } from './lib/model/deep-link-config';
export {} from './lib/model/id-token-decoded';
export {} from './lib/model/jwt-config';
export { KcConfig } from './lib/model/kc-config';
export {} from './lib/model/key-value-str';
export {} from './lib/model/keycloak-json-structure';
export {} from './lib/model/keycloak-login-response';
export { ModuleConfig } from './lib/model/model-api';
export {} from './lib/model/module-config';
export {} from './lib/model/token-decoded';
export { DeepLinkService } from './lib/service/deep-link.service';
export { KcTokenInterceptorService } from './lib/service/kc-token-interceptor.service';
export { KeycloakAuthService } from './lib/service/keycloak-auth.service';
export { StorageService } from './lib/service/storage.service';
export { IonicKeycloakAuthModule } from './lib/ionic-keycloak-auth.module';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BjbW90aW9uL2lvbmljLWtleWNsb2FrLWF1dGgvIiwic291cmNlcyI6WyJwdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQU1BLHFDQUFjLG1EQUFtRCxDQUFDO0FBQ2xFLG1DQUFjLG1DQUFtQyxDQUFDO0FBQ2xELGlDQUFjLGtDQUFrQyxDQUFDO0FBRWpELGVBQWMsd0JBQXdCLENBQUM7QUFDdkMsK0JBQWMsOEJBQThCLENBQUM7QUFDN0MsZUFBYyw4QkFBOEIsQ0FBQztBQUM3QyxlQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLHlCQUFjLHVCQUF1QixDQUFDO0FBQ3RDLGVBQWMsMkJBQTJCLENBQUM7QUFDMUMsZUFBYyxxQ0FBcUMsQ0FBQztBQUNwRCxlQUFjLHFDQUFxQyxDQUFDO0FBQ3BELDZCQUFjLHVCQUF1QixDQUFDO0FBQ3RDLGVBQWMsMkJBQTJCLENBQUM7QUFDMUMsZUFBYywyQkFBMkIsQ0FBQztBQUUxQyxnQ0FBYyxpQ0FBaUMsQ0FBQztBQUNoRCwwQ0FBYyw0Q0FBNEMsQ0FBQztBQUMzRCxvQ0FBYyxxQ0FBcUMsQ0FBQztBQUNwRCwrQkFBYywrQkFBK0IsQ0FBQztBQUU5Qyx3Q0FBYyxrQ0FBa0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTkuIFRoaXMgQ29kZSBpcyB1bmRlciBsaWNlbnNlIGFuZCBiZWxvbmdzIHRvIENvZGluZyBNb3Rpb25cbiAqXG4gKiAgUHVibGljIEFQSSBTdXJmYWNlIG9mIGlvbmljLWtleWNsb2FrLWF1dGhcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb250YW50L2RlZXAtbGlua2luZy1jb25maWctaW5qZWN0aW9uLXRva2VuJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL2NvbnRhbnQvand0LWluamVjdGlvbi10b2tlbic7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9jb250YW50L2tjLWluamVjdGlvbi10b2tlbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVsL2F1dGgtdG9rZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwvZGVlcC1saW5rLWNvbmZpZyc7XG5leHBvcnQgKiBmcm9tICcuL2xpYi9tb2RlbC9pZC10b2tlbi1kZWNvZGVkJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVsL2p3dC1jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwva2MtY29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVsL2tleS12YWx1ZS1zdHInO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwva2V5Y2xvYWstanNvbi1zdHJ1Y3R1cmUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwva2V5Y2xvYWstbG9naW4tcmVzcG9uc2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwvbW9kZWwtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL21vZGVsL21vZHVsZS1jb25maWcnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvbW9kZWwvdG9rZW4tZGVjb2RlZCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2UvZGVlcC1saW5rLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2VydmljZS9rYy10b2tlbi1pbnRlcmNlcHRvci5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2Uva2V5Y2xvYWstYXV0aC5zZXJ2aWNlJztcbmV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2Uvc3RvcmFnZS5zZXJ2aWNlJztcblxuZXhwb3J0ICogZnJvbSAnLi9saWIvaW9uaWMta2V5Y2xvYWstYXV0aC5tb2R1bGUnO1xuIl19