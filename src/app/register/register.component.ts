import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  client: Client = new Client();


  constructor(private clientServic: ClientService,
    private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
        this.saveClient();
  }

  saveClient(){
    this.clientServic.createClient(this.client).subscribe(data =>{
      console.log(data);
      this.goToLoginPage()
    },
    error => console.log(error));

  }

  goToLoginPage() {
    this.router.navigate(['/login'])
  }



}
