import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList =[];

  constructor() { }

  ngOnInit(): void {
  }

  getBookList(): void {
    this.httpService.getBookList().subscribe({
      next: data => {this.Books = data},
      error: err => console.log(err)
    });
  }

  readBook(bookObj){}

  Books: Book[] = [];
  //list$: Observable<Book[]> = this.httpService.list$;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {  }

  readBook(bookObj: Book): void {
    console.log('Reading Book ' + bookObj.id + ' ...')
    this.httpService.readABook(bookObj).subscribe({
      next: bookObj => console.log(' done.'),
      error: err => console.log(err)
    });
  }
}
