import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Inject, Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class PairmeService {
  constructor(private http: HttpClient, @Inject('ENVIRONMENT') private environment: any) { }


  public getCategories<T>(categoryId: string): Observable<T> {
    return this.http.get<T>('pairme://Category', { params: { categoryId } });
  }

}
