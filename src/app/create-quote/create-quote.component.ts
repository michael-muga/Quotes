import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new Quote(0,"","","");
  @Output() addingQuote = new EventEmitter<Quote>();

  addQuote(){
    this.addingQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
