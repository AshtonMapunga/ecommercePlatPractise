import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagee } from '../imagee';


@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {

  images: Imagee[];

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.getImages();

  }

  getImages() {
    this.httpClient.get<Imagee[]>('http://localhost:8080/image/getAllImages')
      .subscribe(images => {
        this.images = images;
        console.log(images)
      });
  }

}
