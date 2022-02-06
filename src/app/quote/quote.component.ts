import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,"Never be scared to dream and always dream big","Ahmed Abaughaush","michael muga"),
    new Quote(2,"Never be scared to dream and always dream big", "Ahmed Abaughaush", "michael shawn")

  ]

  details(index:number){
    this.quotes[index].showDetails = !this.quotes[index].showDetails
    
  }
  deleteQuote(isComplete:boolean,index:number){
    if(isComplete){
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote: any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
