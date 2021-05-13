import { JwtConfig } from '../model/jwt-config';
import { AuthToken } from '../model/auth-token';
import * as ɵngcc0 from '@angular/core';
export declare class StorageService {
    private config;
    constructor(config: JwtConfig);
    setToken(value: AuthToken): Promise<void>;
    getToken(): Promise<AuthToken>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StorageService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StorageService>;
}

//# sourceMappingURL=storage.service.d.ts.map