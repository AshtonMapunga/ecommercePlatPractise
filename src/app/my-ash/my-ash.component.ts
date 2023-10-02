import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-ash',
  templateUrl: './my-ash.component.html',
  styleUrls: ['./my-ash.component.css']
})
export class MyAshComponent implements OnInit {

  isClicked = false;
  showbutton = true;


  onButtonClicked() {
    this.isClicked = !this.isClicked;
    this.showbutton = true
    this.showbutton = false

  }
  showButtons() {
    this.showbutton = false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
