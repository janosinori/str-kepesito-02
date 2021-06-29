import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../service/http.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList =[];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {  }

  getBookList(): void {
    this.httpService.getBookList().subscribe({
      next: data => {this.bookList = data},
      error: err => console.log(err)
    });
  }

  readBook(bookObj: Book): void {
    console.log('Reading Book ' + bookObj.id + ' ...')
    this.httpService.readABook(bookObj.id, bookObj).subscribe({
      next: bookObj => console.log(' done.'),
      error: err => console.log(err)
    });
  }
}
