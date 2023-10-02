import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-image',
  templateUrl: './view-image.component.html',
  styleUrls: ['./view-image.component.css']
})
export class ViewImageComponent implements OnInit {
  httpClient: any;
  yourName: string;


  constructor() { }

  ngOnInit(): void {
    const Name = localStorage.getItem("Name")
  const response =  this.httpClient.get(`http://localhost:8080/image/upload/${Name}`)
    this.yourName = response.body.name;
    console.log(response.body.name)

  }

}
