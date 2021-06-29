import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, ReplaySubject, Observable, Subject } from 'rxjs';
import { Book } from '../model/book';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  BASE_URL = 'http://localhost:3000/books';

  apiUrl: string = 'http://localhost:3000/books';
  error$: Subject<string> = new Subject();

  constructor(private http: HttpClient) { }

  getBookList(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl)
  }

  readABook(id, book): Observable<Book> {
    return this.http.patch<Book>(`${this.apiUrl}/${id}`,book);
  }

}

