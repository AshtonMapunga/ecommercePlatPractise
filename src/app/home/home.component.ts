import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username: string;
  public productList: any;


  constructor(private authService: AuthService ,private apiService: ApiService) { }

  ngOnInit(): void {
    this.username = this.authService.getUsername();

    this.apiService.getProduct().subscribe(res =>{
      this.productList = res;
    })

  }

}
