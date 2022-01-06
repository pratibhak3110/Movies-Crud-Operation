import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url="http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.url + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )}

    find(id: number): Observable<any> {
      return this.httpClient.get(this.url + '/posts/' + id) 
      .pipe(
      catchError(this.errorHandler)
      )
    }

    create(post: Post){
      return this.httpClient.post(this.url + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )}

    delete(id: number){
      return this.httpClient.delete(this.url + '/posts/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }
 
    update(id:number, post:Post){

      return this.httpClient.put(this.url + '/posts/' + id, JSON.stringify(post), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
    }


    errorHandler(error: any){
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
       errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
      }
  
      return throwError(errorMessage);
    }
  
}
