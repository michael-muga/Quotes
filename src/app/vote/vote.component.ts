import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  numberOfUpvotes: number=0;
  numberOfDownvotes: number=0;

  addUpvote(){
    this.numberOfUpvotes++;
  }
  addDownvote(){
    this.numberOfDownvotes++;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
