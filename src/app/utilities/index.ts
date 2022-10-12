/* "Barrel" of Http Interceptors */

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { URLInterceptor } from './url.interceptor';

export const interceptors = [{ provide: HTTP_INTERCEPTORS, useClass: URLInterceptor, multi: true }];
