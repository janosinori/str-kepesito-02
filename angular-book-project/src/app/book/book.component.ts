import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookForm: FormGroup;
  book: Book = new Book();

  constructor() { }

  ngOnInit(): void {
  }

  saveBook():any{
    console.log(this.book);
  }

}
