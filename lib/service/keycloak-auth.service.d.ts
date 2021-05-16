import { HttpClient } from "@angular/common/http";
import { DeepLinkService } from "./deep-link.service";
import { StorageService } from "./storage.service";
import { BrowserTab } from "@ionic-native/browser-tab/ngx";
import { Observable } from "rxjs";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { Router } from "@angular/router";
import { IDTokenDecoded } from "../model/id-token-decoded";
import { KcConfig } from "../model/kc-config";
import { DeepLinkConfig } from "../model/deep-link-config";
import { AuthToken } from "../model/auth-token";
import { TokenDecoded } from "../model/token-decoded";
import * as ɵngcc0 from "@angular/core";
export declare class KeycloakAuthService {
  protected http: HttpClient;
  protected browserTab: BrowserTab;
  protected router: Router;
  protected storage: StorageService;
  protected inAppBrowser: InAppBrowser;
  protected deepLinkService: DeepLinkService;
  private subject;
  private scope;
  private readonly appPrefix;
  private readonly keycloakConfig;
  private actualKeycloakConfig;
  private keycloakInstance;
  constructor(
    deepLinkConfig: DeepLinkConfig,
    kcConfig: KcConfig,
    http: HttpClient,
    browserTab: BrowserTab,
    router: Router,
    storage: StorageService,
    inAppBrowser: InAppBrowser,
    deepLinkService: DeepLinkService
  );
  /**
   *
   */
  user(): Observable<IDTokenDecoded>;
  /**
   *
   */
  init(): Promise<AuthToken>;
  /**
   *
   */
  logout(): Promise<void>;
  /**
   *
   * @param isLogin
   * @param redirectUrl
   */
  login(isLogin?: boolean, redirectUrl?: string): Promise<AuthToken>;
  /**
   *
   * @param refresh
   */
  getToken(refresh?: boolean): Promise<string>;
  getTokenDecoded(refresh?: boolean): Promise<TokenDecoded>;
  private getLogoutUrl;
  private getKcJsonStructure;
  handleNewToken(authToken);
  private createPostRequest;
  private getRefreshParams;
  private getAccessTokenParams;
  private getTokenRequestHeaders;
  private refresh;
  private getTokenUrl;
  private isValidToken;
  private initKeycloakInstance;
  private initKeycloak;
  private beginLoginAndGetCode;
  private continueLoginWithCode;
  static ɵfac: ɵngcc0.ɵɵFactoryDef<KeycloakAuthService, never>;
  static ɵprov: ɵngcc0.ɵɵInjectableDef<KeycloakAuthService>;
}

//# sourceMappingURL=keycloak-auth.service.d.ts.map
