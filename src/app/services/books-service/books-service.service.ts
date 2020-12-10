import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BookModel} from "../../core/models/book-model/book.model";

@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  readonly ROOT_URL;

  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:9800';
  }

  public getAllBooks(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/books`)
  }

  public createBook(book: any): Observable<any> {
    return this.http.post(`${this.ROOT_URL}/books`, {book},{
      observe: 'response'
    })
  }

  public deleteBook(id: string): Observable<any> {
    return this.http.delete(`${this.ROOT_URL}/books/` + id)
  }

  public updateBook(book: BookModel): Observable<any> {
    return this.http.put(`${this.ROOT_URL}/books/` + book._id, {book})
  }

}
