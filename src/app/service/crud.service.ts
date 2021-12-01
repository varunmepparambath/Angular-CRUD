import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiServer = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }
  httpOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAllProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/').pipe(
      catchError(this.errorHandler)
    )
  }
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id).pipe(
      catchError(this.errorHandler)
      )
  }
  create(product:Product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/products/', JSON.stringify(product), this.httpOption)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  updateProductById(id:number, product:Product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOption)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  deleteProductById(id:number){
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOption)
    .pipe(
      catchError(this.errorHandler)
    )
  }





  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }




}
