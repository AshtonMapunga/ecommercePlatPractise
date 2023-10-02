import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientService } from '../client.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';





@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrls: ['./loginn.component.css']
})
export class LoginnComponent implements OnInit {
  client: Client = new Client();
  errormssg: string;



  constructor(private clientServic: ClientService,
    private router : Router, private authService: AuthService) { }


  ngOnInit(): void {
  }

  onSubmit() {
    this.loginClient();
}

loginClient(){
this.clientServic.logedClient(this.client).subscribe(data =>{
  console.log(data);
  this.authService.setUsername(data.username);
  this.goHomePage();
},
error => {
  console.log(error);
  this.errormssg = error.error.message;
}

)}

goHomePage() {
this.router.navigate(['/home'])
}
}
