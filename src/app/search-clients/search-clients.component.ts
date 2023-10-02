import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../client.service';


@Component({
  selector: 'app-search-clients',
  templateUrl: './search-clients.component.html',
  styleUrls: ['./search-clients.component.css']
})
export class SearchClientsComponent implements OnInit {

  username: string;
  client: Client = new Client();

  constructor(private clientServic: ClientService, private route: ActivatedRoute) { }
  ngOnInit(): void {

  }

  onSubmit(){
    this.username = this.route.snapshot.params['username'];
    this.clientServic.getClientByUsername(this.username)
    .subscribe(client =>{
      this.client = client
    },error => console.log(error))
  }

}
