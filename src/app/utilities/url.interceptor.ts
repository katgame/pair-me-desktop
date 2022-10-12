import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable()
export class URLInterceptor implements HttpInterceptor {
  private token!: string;

  constructor( @Inject('ENVIRONMENT') private environment: any) {
    //store.select(selectors.ecommerceToken).subscribe((t) => (this.token = t as string));
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Add token
    // const token = localStorage.getItem('shop_token');
    // if (req.url.includes('ecommerce:/')) {
    //   if (token) {
    //     const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    //     req = req.clone({ headers });
    //   } else {
    //     const headers = new HttpHeaders({ Authorization: `Bearer ${this.token}` });
    //     req = req.clone({ headers });
    //   }
    // }

    // Update URL and path parameters with environment data
    const amendedReq = req.clone({
      url: req.url
        .replace('pairme:/', this.environment.pairmeURL)
    });

    return next.handle(amendedReq);
  }
}
