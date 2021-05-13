import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { NavController } from '@ionic/angular';
import * as ɵngcc0 from '@angular/core';
export declare class DeepLinkService {
    private navController;
    private deepLinks;
    private paramsSubject;
    constructor(navController: NavController, deepLinks: Deeplinks);
    params(): import("rxjs").Observable<string>;
    init(): void;
    private extractData;
    private extractCode;
    private nextParams;
    private containsCode;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeepLinkService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<DeepLinkService>;
}

//# sourceMappingURL=deep-link.service.d.ts.map